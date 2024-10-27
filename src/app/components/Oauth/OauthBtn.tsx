import { useRouter } from 'next/navigation'
import { OauthBtnProps } from './type'

export default function OauthBtn({ auth_uri, type, text }: OauthBtnProps) {
  const router = useRouter()

  const handleSocialLogin = async () => {
    router.push(`${auth_uri}`)
  }

  let btnStyle: string = ''

  if (type === 'kakao') btnStyle = 'bg-[#FFE819]'
  if (type === 'naver') btnStyle = 'bg-[#03C75A]'
  if (type === 'google') btnStyle = 'bg-white border'

  return (
    <button
      onClick={() => handleSocialLogin()}
      type="button"
      className={`
        ${btnStyle} 
        w-[342px] h-[56px] flex justify-center items-center rounded-12 text-black font-semibold mb-10
      `}
    >
      <img src={`/images/${type}-icon.png`} alt={`${type}`} className="mr-8" />
      {text}로 시작하기
    </button>
  )
}
