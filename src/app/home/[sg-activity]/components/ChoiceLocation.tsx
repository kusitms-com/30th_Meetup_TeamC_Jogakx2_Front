'use client'

import useKakaoMap from '@/hooks/useKakaoMap'
import { useEffect, useRef, useState } from 'react'

interface Coordinates {
  latitude: number
  longitude: number
}

export default function ChoiceLocation() {
  const [address, setAddress] = useState('')
  const [map, setMap] = useState<any>(null)
  const [marker, setMarker] = useState<any>(null)
  const [search, setSearch] = useState('')
  const [places, setPlaces] = useState<any[]>([])
  const [isDropdownVisible, setIsDropdownVisible] = useState(false)
  const ps = useRef<any>(null)

  const apiKey = process.env.NEXT_PUBLIC_KAKAO_KEY

  useKakaoMap(() => {
    const container = document.getElementById('map')
    const options = {
      center: new window.kakao.maps.LatLng(37.5665, 126.978), // 서울 시청 좌표
      level: 3,
    }
    const mapInstance = new window.kakao.maps.Map(container, options)
    setMap(mapInstance)

    ps.current = new window.kakao.maps.services.Places()

    // 현재 위치 가져오기
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const lat = position.coords.latitude
          const lng = position.coords.longitude
          const locPosition = new window.kakao.maps.LatLng(lat, lng)

          // 현재 위치 가져오기
          const imageSrc = '/images/map_marker.png'
          const imageSize = new window.kakao.maps.Size(64, 69)
          const imageOption = { offset: new window.kakao.maps.Point(27, 69) }
          const markerImage = new window.kakao.maps.MarkerImage(
            imageSrc,
            imageSize,
            imageOption,
          )

          // 현재 위치에 마커 표시
          const markerInstance = new window.kakao.maps.Marker({
            map: mapInstance,
            position: locPosition,
            image: markerImage,
          })
          setMarker(markerInstance)
          mapInstance.setCenter(locPosition)

          // 좌표로 주소 변환
          const geocoder = new window.kakao.maps.services.Geocoder()
          geocoder.coord2RegionCode(lng, lat, (result: any, status: any) => {
            if (status === window.kakao.maps.services.Status.OK) {
              for (var i = 0; i < result.length; i++) {
                if (result[i].region_type === 'H') {
                  setAddress(result[i].address_name)
                  break
                }
              }
            }
          })
        },

        (error) => {
          console.log('현재 위치를 가져올 수 없습니다.', error)
          alert('위치 권한을 허용해주세요!')
        },
      )
    } else {
      alert(
        'Geolocation을 지원하지 않는 브라우저입니다. 크롬이나 edge에서 실행 부탁드려요 :)',
      )
    }
  })

  // 검색어가 변경될 때마다 장소 검색
  useEffect(() => {
    if (!ps.current || !search) {
      setPlaces([])
      setIsDropdownVisible(false)
      return
    }

    ps.current.keywordSearch(search, (data: any, status: any) => {
      if (status === window.kakao.maps.services.Status.OK) {
        const filteredPlaces = data.filter(
          (place: any) => place.category_group_code === '',
        )
        setPlaces(filteredPlaces)
        setIsDropdownVisible(true)
      } else {
        const filteredPlaces = data.filter(
          (place: any) => place.category_group_code === '',
        )
        setPlaces(filteredPlaces)
        setIsDropdownVisible(true)
      }
    })
  }, [search])

  const handlePlaceSelect = (place: any) => {
    setSearch(place.address_name)
    setIsDropdownVisible(false)

    // 주소 좌표 검색
    const geocoder = new window.kakao.maps.services.Geocoder()
    geocoder.addressSearch(place.address_name, (result: any, status: any) => {
      if (status === window.kakao.maps.services.Status.OK) {
        const coords = new window.kakao.maps.LatLng(result[0].y, result[0].x)

        // 마커 위치 이동
        if (marker) {
          marker.setPosition(coords)
        } else {
          const markerInstance = new window.kakao.maps.Marker({
            map: map,
            position: coords,
          })
          setMarker(markerInstance)
        }

        // 주소 업데이트
        setAddress(result[0].address_name)

        // 지도 중심점 이동
        map.setCenter(coords)
      }
    })
  }

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value)
  }

  return (
    <div className="container mx-auto p-4">
      <div id="map" style={{ width: '100%', height: '400px' }}></div>
      <div className="mb-4">
        <p className="text-lg font-semibold">현재 주소: {address}</p>
      </div>
      <div className="mb-4 relative">
        <input
          type="text"
          className="border p-2 w-full"
          placeholder="주소를 입력하세요"
          value={search}
          onChange={handleSearchChange}
          onFocus={() => search && setIsDropdownVisible(true)}
        />
        {isDropdownVisible && places.length > 0 && (
          <ul className="absolute z-10 bg-white border w-full max-h-60 overflow-y-auto">
            {places.map((place, index) => (
              <li
                key={index}
                className="p-2 cursor-pointer hover:bg-gray-100"
                onClick={() => handlePlaceSelect(place)}
              >
                {place.address_name}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}
