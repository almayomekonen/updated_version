"use client";

import { askAssistantAction } from "@/actions/assistant";
import { useActionState } from "react";

const initialState = { answer: "", error: "" };

export default function AssistantForm() {
  const [state, formAction, isPending] = useActionState(
    askAssistantAction,
    initialState,
  );

  return (
    <div dir="rtl">
      <form className="flex flex-col gap-4" action={formAction}>
        <div>
          <label
            htmlFor="message"
            className="mb-1.5 block text-base font-medium text-gray-800"
          >
            מה תרצו לשאול?
          </label>

          <textarea
            id="message"
            name="message"
            placeholder="לדוגמה: מפתח Frontend עם שנתיים ניסיון, מחפש משרה היברידית במרכז"
            maxLength={1000}
            rows={4}
            className="w-full resize-y rounded-xl border border-gray-300 bg-white px-4 py-3 text-base text-gray-900 shadow-sm transition placeholder:text-gray-400 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/20"
          />

          <button
            type="submit"
            disabled={isPending}
            className="mt-3 inline-flex min-h-11 items-center justify-center rounded-xl bg-white px-6 py-2.5 text-sm font-semibold text-indigo-600 shadow-sm transition hover:bg-indigo-50 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {isPending ? "הסוכן חושב..." : "שליחה"}
          </button>
        </div>
      </form>

      {state.error && (
        <p
          role="alert"
          className="mt-4 rounded-xl bg-red-50 p-4 text-sm text-red-700"
        >
          {state.error}
        </p>
      )}

      {state.answer && (
        <div className="mt-4 whitespace-pre-wrap rounded-xl border border-gray-200 bg-gray-50 p-4 leading-7 text-gray-800">
          {state.answer}
        </div>
      )}
    </div>
  );
}
