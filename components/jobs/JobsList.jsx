import JobCard from "./JobCard";

export default function JobsList({ jobs }) {
  if (!jobs.length) {
    return (
      <p className="rounded-xl bg-white/90 p-8 text-center text-(--color-text-secondary)">
        לא נמצאו משרות. נסו מילת חיפוש אחרת.
      </p>
    );
  }

  return (
    <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {jobs.map((job) => (
        <li key={job.jobId}>
          <JobCard job={job} />
        </li>
      ))}
    </ul>
  );
}
