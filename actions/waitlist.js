"use server";

import { createClient } from "@/utils/supabase/server";

export async function submitToWaitlist(formData) {
  const { email } = formData;
  const supabase = await createClient();
  const { error } = await supabase.from("waitlist").insert([{ email }]);
  if (error) {
    return {
      success: false,
      error: error,
    };
  }

  return { success: true };
}
