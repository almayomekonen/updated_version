import Link from "next/link";
import Logo from "./Logo";
import { getSessionUser } from "@/lib/auth";
import { logoutAction } from "@/actions/auth";
import { LogOut } from "lucide-react";

const navLinks = [
  { href: "/jobs", lable: "המשרות שלי" },
  { href: "/dashboard", lable: "מבט על" },
  { href: "/assistant", lable: "עוזר AI" },
];

export default async function Navbar() {
  const user = await getSessionUser();

  return (
    <header className="sticky top-0 z-10 border-b border-slate-200 bg-white/70 backdrop-blur">
      <nav className="mx-auto flex h-16 items-center justify-between gap-4 px-4">
        <Logo />
        <ul className="flex items-center gap-3">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="rounded-sm px-3 py-2 text-lg transition hover:bg-(--color-primary-hover) hover:text-white"
              >
                {link.lable}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          {user ? (
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2">
                <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-(--color-primary) font-semibold text-white">
                  {user.name?.charAt(0).toUpperCase()}
                </span>
                <div className="hidden flex-col leading-tight sm:flex">
                  <span className="text-xs text-(--color-text-muted)">
                    שלום,
                  </span>
                  <span className="max-w-40 truncate text-sm font-medium text-(--color-text)">
                    {user.name}
                  </span>
                </div>
              </div>
              <form action={logoutAction}>
                <button className="flex cursor-pointer items-center gap-1.5 rounded-lg border border-(--color-border) px-3 py-1.5 text-sm text-(--color-text-secondary) transition hover:border-red-200 hover:bg-red-50 hover:text-red-600">
                  <LogOut className="size-4" />
                  התנתקות
                </button>
              </form>
            </div>
          ) : (
            <Link href="/register">הרשמה</Link>
          )}
        </div>
      </nav>
    </header>
  );
}
