import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { TypographyH1, TypographyP } from "@/components/ui/typography";

const faqItems = [
  {
    value: "what-is-jobsai",
    question: "מה זה JobsAI?",
    answer:
      "JobsAI הוא עוזר חכם לחיפוש עבודה שמרכז במקום אחד משרות רלוונטיות לתפקידים ולתחומים שמעניינים אותך. באמצעות כלי AI, המערכת עוזרת לך למצוא הזדמנויות מתאימות ולשפר את הסיכויים שלך למצוא עבודה.",
  },
  {
    value: "how-does-it-work",
    question: "איך JobsAI עוזר לי למצוא עבודה?",
    answer:
      "JobsAI מנתח את ההעדפות, הכישורים והניסיון שלך ומסייע למצוא משרות שמתאימות לך. במקום לחפש שעות במגוון אתרים, המערכת מרכזת עבורך הזדמנויות רלוונטיות במקום אחד.",
  },
  {
    value: "who-is-it-for",
    question: "למי JobsAI מתאים?",
    answer:
      "JobsAI מתאים לכל מי שמחפש עבודה ורוצה להפוך את תהליך החיפוש לחכם, מהיר וממוקד יותר בין אם אתם מחפשים את העבודה הראשונה שלכם, רוצים להתקדם לתפקיד חדש או מחפשים הזדמנות בתחום אחר.",
  },
  {
    value: "why-jobsai",
    question: "למה להשתמש ב־JobsAI במקום לחפש עבודה לבד?",
    answer:
      "חיפוש עבודה יכול להיות תהליך ארוך ומבלבל. JobsAI מרכז משרות רלוונטיות, משתמש ביכולות AI כדי לעזור לך להתמקד בהזדמנויות המתאימות לך, וחוסך זמן ומאמץ בתהליך חיפוש העבודה.",
  },
];

export default function AboutPage() {
  return (
    <>
      <div className="mb-5 text-center py-8">
        <TypographyH1>אודות JobsAI</TypographyH1>

        <TypographyP className="mx-auto mt-6 max-w-2xl text-center text-lg leading-8 text-black/70">
           <span className="bg-amber-50 font-bold px-1 py-1 rounded-sm">JobsAI</span> היא פלטפורמה חכמה לחיפוש עבודה, שנועדה להפוך את תהליך חיפוש
          המשרה לפשוט, ממוקד ויעיל יותר. המערכת משתמשת בטכנולוגיות AI כדי לעזור
          לך לגלות משרות רלוונטיות, להבין אילו הזדמנויות מתאימות לך ולחסוך זמן
          בחיפוש אחר התפקיד הבא שלך.
        </TypographyP>
      </div>

      <main className="flex w-full justify-center px-6 py-10">
        <div className="w-full max-w-3xl">
          <div className="mb-10 text-center">
            <h1 className="text-3xl font-bold text-black">שאלות נפוצות</h1>
            <p className="mt-3 text-black/60">כל מה שחשוב לדעת על JobsAI</p>
          </div>

          <Accordion
            type="single"
            collapsible="true"
            defaultValue={[]}
            className="w-full"
          >
            {faqItems.map((item) => (
              <AccordionItem
                key={item.value}
                value={item.value}
                className="mb-5 rounded-md border border-black bg-white px-6"
              >
                <AccordionTrigger className="py-6 text-right text-base font-semibold text-black hover:no-underline">
                  {item.question}
                </AccordionTrigger>

                <AccordionContent className="pb-6 text-right text-sm leading-7 text-black/70">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </main>
    </>
  );
}
