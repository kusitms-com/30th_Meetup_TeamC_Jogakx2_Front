import { useRouter } from 'next/navigation'
import { OauthBtnProps } from './type'

export default function OauthBtn({ type, text, style }: OauthBtnProps) {
  const router = useRouter()

  const handleSocialLogin = async () => {
    router.push(`https://cnergy.p-e.kr/v1/oauth/${type}`)
  }

  return (
    <button
      onClick={() => handleSocialLogin()}
      type="button"
      className={`
        ${style} 
        w-[342px] h-[56px] flex justify-center items-center rounded-12 text-black font-semibold mb-10
      `}
    >
      <img src={`/images/${type}-icon.png`} alt={`${type}`} className="mr-8" />
      {text}로 시작하기
    </button>
  )
}
