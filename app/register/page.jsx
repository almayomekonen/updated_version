import Link from "next/link";
import GoogleButton from "@/components/auth/GoogleButton";
import RegisterForm from "@/components/auth/RegisterForm";

const googleErrors = {
  google_not_configured: "התחברות עם Google אינה מוגדרת בשרת כרגע.",
  google_cancelled: "ההתחברות עם Google בוטלה.",
  google_state_mismatch: "ההתחברות עם Google פגה. נסו שוב.",
  google_failed: "ההתחברות עם Google נכשלה. נסו שוב.",
};

export default async function RegisterPage({ searchParams }) {
  const { error } = await searchParams;
  const googleError = googleErrors[error];

  return (
    <div className="mx-auto flex max-w-md flex-col px-4 py-12">
      <div className="text-center">
        <h1 className="mb-2 text-3xl font-bold text-slate-900">יצירת חשבון</h1>
        <p className="mb-3 text-slate-800">
          זה לוקח פחות מדקה, וכל חיפוש העבודה שלכם במקום אחד.
        </p>
      </div>

      <div>
        {googleError && (
          <p
            role="alert"
            className="mb-6 rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-800"
          >
            {googleError}
          </p>
        )}

        <RegisterForm />

        <div className="my-6 flex items-center gap-4">
          <span className="h-px flex-1 bg-white"></span>
          <span className="text-white">או</span>
          <span className="h-px flex-1 bg-white"></span>
        </div>

        <GoogleButton />

        <p className="mt-6 text-center">
          כבר יש לכם חשבון?{" "}
          <Link
            href="/login"
            className="font-bold text-white underline hover:text-amber-100"
          >
            התחברות
          </Link>
        </p>
      </div>
    </div>
  );
}
