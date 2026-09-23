"use client";

import { useFormStatus } from "react-dom";
import { useState, useActionState } from "react";
import { registerAction } from "@/actions/auth";
import { PASSWORD_LENGTH } from "@/lib/validation";

// useState - משהו שרק הדפדפן צריך לדעת
// useActionState - משהו שהשרת מחליט (ולידציה, שגיאות, שמירה)

const initialState = { errors: {}, values: { name: "", email: "" } };

const baseInput =
  "w-full bg-white px-4 py-2.5 rounded-lg text-slate-900 border border-amber-50 placeholder:text-slate-500";

function inputClass(hasError) {
  return hasError ? `${baseInput}` : `${baseInput}`;
}

function FieldError({ id, message }) {
  if (!message) return null;
  return (
    <p id={id} role="alert" className="text-red-600">
      {message}
    </p>
  );
}

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className="w-full cursor-pointer rounded-lg bg-black px-4 py-2.5 text-center font-semibold text-white hover:bg-cyan-950 disabled:cursor-not-allowed disabled:opacity-60"
    >
      {pending ? "יוצרים לך את החשבון" : "יצירת חשבון"}
    </button>
  );
}

export default function RegisterForm() {
  const [state, formAction] = useActionState(registerAction, initialState);
  const [showPassword, setShowPassword] = useState(false);

  const { errors, values } = state;

  return (
    <form className="flex flex-col gap-4" action={formAction}>
      {errors.form && (
        <p
          role="alert"
          className="rounded-xl border border-red-300 bg-red-50 px-4 py-2.5 text-red-700"
        >
          {errors.form}
        </p>
      )}

      <div>
        <label htmlFor="name" className="mb-1.5 block text-md font-medium">
          שם מלא
        </label>

        <input
          type="text"
          id="name"
          name="name"
          autoComplete="name"
          placeholder="השם שלך"
          defaultValue={values.name}
          className={inputClass(errors.name)}
        />
        <FieldError id="name-error" message={errors.name} />
      </div>
      <div>
        <label htmlFor="" className="mb-1.5 block text-md font-medium">
          אימייל
        </label>

        <input
          type="email"
          id="email"
          name="email"
          autoComplete="email"
          placeholder="האימייל שלך"
          defaultValue={values.email}
          className={inputClass(errors.email)}
        />
        <FieldError id="email-error" message={errors.email} />
      </div>
      <div>
        <label htmlFor="" className="mb-1.5 block text-md font-medium">
          סיסמה
        </label>

        <input
          type={showPassword ? "text" : "password"}
          id="password"
          name="password"
          autoComplete="new-password"
          placeholder="הסיסמה שלך"
          defaultValue={values.password}
          className={inputClass(errors.password)}
        />

        {errors.password && (
          <FieldError id="password-error" message={errors.password} />
        )}

        <button type="button" onClick={() => setShowPassword(!showPassword)}>
          {showPassword ? "הסתר" : "הצג"}
        </button>

      </div>

      <div>
        <label htmlFor="" className="mb-1.5 block text-md font-medium">
          אימות סיסמה
        </label>

        <input
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          autoComplete="new-password"
          placeholder="הקלידו שוב את הסיסמה"
          defaultValue={values.confirmPassword}
          className={inputClass(errors.confirmPassword)}
        />
          {errors.confirmPassword && (
          <FieldError id="confirmPassword-error" message={errors.confirmPassword} />
        )}
      </div>

      <SubmitButton />
    </form>
  );
}
