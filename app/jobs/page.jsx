import JobsList from "@/components/jobs/JobsList";
import JobsSearchForm from "@/components/jobs/JobsSearchForm";
import { fetchDrushim } from "@/lib/drushim";

export default async function JobsPage({ searchParams }) {
  const { q } = await searchParams;
  const query = q?.trim() || "מפתח";
  const jobs = await fetchDrushim({ query });

  return (
    <section className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-8">
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold text-white">חיפוש משרות</h1>
        <JobsSearchForm query={query} />
        <p className="text-sm text-white/80">
          נמצאו {jobs.length} משרות עבור &quot;{query}&quot;
        </p>
      </div>
      <JobsList jobs={jobs} />
    </section>
  );
}
