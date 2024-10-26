import { useRouter } from 'next/navigation'
import { OauthBtnProps } from './type'

export default function OauthBtn(data: OauthBtnProps) {
  const router = useRouter()

  const handleSocialLogin = async () => {
    router.push(`${data.auth_uri}`)
  }

  return (
    <button
      onClick={() => handleSocialLogin()}
      type="button"
      className={`
        ${data.style} 
        ${
          data.type === 'kakao'
            ? 'bg-[#FFE819]'
            : data.type === 'naver'
              ? 'bg-[#03C75A]'
              : data.type === 'google'
                ? 'bg-white border'
                : ''
        }
        w-[342px] h-[56px] flex justify-center items-center rounded-12 text-black font-semibold mb-10
      `}
    >
      <img
        src={`/images/${data.type}-icon.png`}
        alt={`${data.type}`}
        className="mr-8"
      />
      {data.text}로 시작하기
    </button>
  )
}
