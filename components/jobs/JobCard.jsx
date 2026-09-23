import { Badge } from "@/components/ui/badge";
import { Briefcase, Clock, Flame, MapPin } from "lucide-react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";

function formatDate(date) {
  if (!date) return null;
  return new Date(date).toLocaleDateString("he-IL");
}

export default function JobCard({ job }) {
  const tags = [
    job.isRemote && "מרחוק",
    job.isHybrid && "היברידי",
    job.subCategory,
  ].filter(Boolean);

  return (
    <Card className="h-full gap-3 bg-(--color-surface) shadow-[0_8px_24px_var(--color-shadow)] ring-(--color-border) transition hover:-translate-y-0.5 hover:shadow-[0_12px_32px_var(--color-shadow)]">
      <CardHeader className="flex items-start gap-3">
        <div className="flex size-12 shrink-0 items-center justify-center overflow-hidden rounded-lg border border-(--color-border) bg-(--color-surface-muted)">
          {job.companyLogoUrl ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={job.companyLogoUrl}
              alt={job.company}
              className="size-full object-contain p-1"
            />
          ) : (
            <span className="text-lg font-bold text-(--color-primary)">
              {job.company?.charAt(0)}
            </span>
          )}
        </div>
        <div className="min-w-0 flex-1">
          <h3 className="line-clamp-2 text-base font-semibold text-(--color-text)">
            {job.title}
          </h3>
          <p className="truncate text-sm text-(--color-text-secondary)">
            {job.company}
          </p>
        </div>
        {job.isHot && (
          <Badge className="bg-orange-100 text-orange-600">
            <Flame /> חם
          </Badge>
        )}
      </CardHeader>

      <CardContent className="flex flex-1 flex-col gap-3">
        <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-(--color-text-muted)">
          {job.location && (
            <span className="flex items-center gap-1">
              <MapPin className="size-3.5" /> {job.location}
            </span>
          )}
          {job.experience && (
            <span className="flex items-center gap-1">
              <Briefcase className="size-3.5" /> {job.experience}
            </span>
          )}
          {job.postedAt && (
            <span className="flex items-center gap-1">
              <Clock className="size-3.5" /> {formatDate(job.postedAt)}
            </span>
          )}
        </div>

        <p className="line-clamp-3 text-sm text-(--color-text-secondary)">
          {job.description}
        </p>

        {tags.length > 0 && (
          <div className="mt-auto flex flex-wrap gap-1.5">
            {tags.map((tag) => (
              <Badge
                key={tag}
                className="bg-(--color-primary-soft) text-(--color-primary-hover)"
              >
                {tag}
              </Badge>
            ))}
          </div>
        )}
      </CardContent>

      <CardFooter className="gap-2 border-(--color-border) bg-(--color-surface-muted)">
        <a
          href={job.applyUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 rounded-lg bg-(--color-primary) px-3 py-2 text-center text-sm font-medium text-white transition hover:bg-(--color-primary-hover)"
        >
          הגשת מועמדות
        </a>
        <a
          href={job.portalUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-lg border border-(--color-border-strong) bg-white px-3 py-2 text-sm font-medium text-(--color-text) transition hover:bg-(--color-primary-soft)"
        >
          לפרטים
        </a>
      </CardFooter>
    </Card>
  );
}
