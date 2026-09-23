import Features from '@/components/home/Features';
import Link from 'next/link';
import { getSessionUser } from '@/lib/auth';

export default async function Home() {
  const user = await getSessionUser();

  return (
  <>
   <section className='border-b border-slate-200 bg-white'>
     <div className='bg-linear-to-bl from-blue-50 via-white to-pink-100'>

       <div className='mx-auto max-w-6xl px-4 py-20 text-center'>
        <h1 className='text-7xl mt-6 font-bold'>
          חיפוש העבודה שלך
           <br /> 
           <span className='text-(--color-primary)'>סוף סוף מסודר</span>
        </h1>

        <p className='mx-auto max-w-2xl mt-6 text-lg'>שלחת כל כך הרבה קורות חיים ועדיין לא מצאת עבודה?
          עם JobsAI זה אחרת, הבינה המלאכותית שלנו עוזרת לך לשפר את הסיכויים שלך במציאת המשרה הבאה שלך
        </p>


        <div className='mt-10 flex items-center justify-center gap-3'>
          <Link href={user ? "/jobs" : "/register"} className='w-full rounded-md border border-slate-950
          text-(--color-primary) font-bold px-6 py-3 shadow-sm hover:bg-(--color-primary-hover) hover:text-white transition'>
            {user ? "חיפוש משרות" : "יצירת חשבון"}
          </Link>

          <a href="" className='w-full rounded-md border border-slate-700 px-6 py-3 transition 
          text-(--color-primary) font-bold'>איך זה עובד?</a>
        </div>
       </div>
     </div>
   </section>

  <Features />
  </>
  );
}
