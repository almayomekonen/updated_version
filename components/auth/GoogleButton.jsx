import { FcGoogle } from "react-icons/fc";

export default function GoogleButton() {
  return (
    <a 
      href="/api/auth/google" 
      className="flex w-full items-center justify-center gap-2 rounded-lg bg-white px-4 py-2.5 font-medium text-slate-700 transition hover:bg-violet-50">
      <FcGoogle size={24}/>
      <span>המשך עם Google</span>
    </a>
  )
}