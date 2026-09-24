import AssistantForm from "@/components/assistant-form/AssistantForm";
import { getSessionUser } from "@/lib/auth";
import { redirect } from "next/navigation";
import React from "react";

export default async function AssistantPage() {
  const user = await getSessionUser();
  if (!user) {
    redirect("/login");
  }

  return (
    <section className="mx-auto flex max-w-3xl flex-col gap-6 px-4 py-8">
      <div>
        <h1 className="text-5xl font-bold text-white text-center">סוכן AI</h1>
        <p className="text-2xl font-bold text-white text-center mt-2">
          ספרו לעוזר איזו עבודה אתם מחפשים, והוא יעזור לכם לחדד את החיפוש
        </p>
      </div>
      <AssistantForm />
    </section>
  );
}
