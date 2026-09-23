import {
  BriefcaseBusiness,
  BrainCircuit,
  ChartNoAxesCombined,
  Clock3,
} from "lucide-react";

const features = [
  {
    icon: BriefcaseBusiness,
    title: "כל המשרות במקום אחד",
    description:
      "רכזו משרות ממקורות שונים במקום אחד, כדי שלא תצטרכו לחפש בכל אתר מחדש.",
  },
  {
    icon: BrainCircuit,
    title: "AI שעובד בשבילכם",
    description:
      "קבלו עזרה חכמה בניתוח משרות, התאמה לכישורים ושיפור הסיכויים להתקבל.",
  },
  {
    icon: ChartNoAxesCombined,
    title: "הבינו איפה אתם עומדים",
    description:
      "עקבו אחרי המועמדויות שלכם, הסטטוסים וההתקדמות כדי לדעת בדיוק מה קורה.",
  },
  {
    icon: Clock3,
    title: "חוסכים זמן בחיפוש",
    description:
      "כלי עבודה אחד שמרכז את תהליך חיפוש העבודה ועוזר לכם להתמקד במשרות שבאמת מתאימות לכם.",
  },
];

export default function Features() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-20">
        <h2 className="text-center text-4xl font-bold">מה JobsAI עושה בשבילך </h2>

        <ul className="grid grid-cols-2 mt-12 gap-6">
            {features.map((f) => {
                const Icon = f.icon;

                return (
                <li key={f.title} className="border border-slate-300 rounded-2xl bg-white p-6">
                    <span>
                        <Icon size={50}/>
                    </span>
                    <h3 className="mt-4 font-semibold">{f.title}</h3>
                    <p>{f.description}</p>
                </li>
            )})}
        </ul>
    </section>
  )
}