import { Search } from "lucide-react";

export default function JobsSearchForm({ query }) {
  return (
    <form
      action="/jobs"
      className="flex w-full items-center gap-2 rounded-xl bg-white p-2 shadow-[0_8px_24px_var(--color-shadow)]"
    >
      <label htmlFor="q" className="sr-only">
        חיפוש משרה
      </label>
      <div className="relative flex-1">
        <Search className="pointer-events-none absolute top-1/2 right-3 size-4 -translate-y-1/2 text-(--color-text-muted)" />
        <input
          id="q"
          name="q"
          type="search"
          defaultValue={query}
          placeholder="לדוגמה: מפתח Frontend, QA, DevOps..."
          className="h-11 w-full rounded-lg bg-transparent pr-10 pl-3 text-(--color-text) outline-none placeholder:text-(--color-text-muted)"
        />
      </div>
      <button
        type="submit"
        className="h-11 cursor-pointer rounded-lg bg-(--color-primary) px-6 font-medium text-white transition hover:bg-(--color-primary-hover)"
      >
        חיפוש
      </button>
    </form>
  );
}
