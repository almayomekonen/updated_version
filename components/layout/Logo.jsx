import Link from "next/link";
import { Sparkles } from "lucide-react";

export default function Logo() {
  return (
    <Link href="/" className="flex items-center gap-1.5 font-bold">
      <span>
        <Sparkles className="w-6 h-6" />
      </span>

      <span className="text-2xl">
        Job<span className="text-[#395dc0]">AI</span>
      </span>
    </Link>
  );
}
