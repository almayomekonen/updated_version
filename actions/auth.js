"use server";

import { AFTER_AUTH_REDIRECT, createUserWithPassword } from "@/lib/auth";
import { createSession, destroySession } from "@/lib/session";
import { validationRegisteration } from "@/lib/validation";
import { redirect } from "next/navigation";

export async function registerAction(prevState, formData) {
  const name = String(formData.get("name")).trim();
  const email = String(formData.get("email")).trim().toLowerCase();
  const password = String(formData.get("password"));
  const confirmPassword = String(formData.get("confirmPassword"));

  const values = { name, email };
  const errors = validationRegisteration({
    name,
    email,
    password,
    confirmPassword,
  });

  if (Object.keys(errors).length > 0) {
    return { errors, values };
  }

  try {
    const user = await createUserWithPassword({ name, email, password });
    await createSession(user._id.toString());
  } catch (error) {
    console.error("registeration falied:", error);
    return {
      errors: { form: "לא הצלחנו ליצור חשבון. נסה שוב בעוד רגע" },
      values,
    };
  }

  redirect(AFTER_AUTH_REDIRECT);
}

export async function logoutAction() {
  await destroySession();
  redirect("/");
}
