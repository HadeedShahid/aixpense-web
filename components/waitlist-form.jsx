"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "./ui/button";
import { ArrowRight, Loader2 } from "lucide-react";
import { Input } from "./ui/input";
import { submitToWaitlist } from "@/actions/waitlist";
import { toast } from "sonner";
import { useState } from "react";

const WaitListForm = () => {
  const [loading, setLoading] = useState(false);
  const waitlistSchema = z.object({
    email: z
      .string()
      .min(1, { message: "Email is required" })
      .email("Please enter a valid email"),
  });

  async function onSubmit(values) {
    setLoading(true);
    const response = await submitToWaitlist(values);
    setLoading(false);
    if (response.success) {
      toast.success("You’ve been added to the waitlist!", {
        description: "We’ll notify you as soon as we launch.",
      });
      form.reset(); // Optional: clear form after success
    } else {
      toast.error("Something went wrong", {
        description: "Could not join the waitlist. Please try again.",
      });
    }
  }

  const form = useForm({
    resolver: zodResolver(waitlistSchema),
    defaultValues: {
      email: "",
    },
  });

  return (
    <Form {...form} className="flex flex-col sm:flex-row gap-3 pt-3">
      <form onSubmit={form.handleSubmit(onSubmit)} className="relative flex-1">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  {...field}
                  type="email"
                  placeholder="Enter your email"
                  className="rounded-full pr-24 bg-white/80 border-gray-200 focus:border-expense-500 h-12"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          type="submit"
          className="absolute right-1 top-1 rounded-full bg-expense-600 hover:bg-expense-700 text-white h-10"
        >
          {loading ? (
            <Loader2 className="animate-spin" />
          ) : (
            <>
              Join Waitlist <ArrowRight className="ml-1 h-4 w-4" />
            </>
          )}
        </Button>
      </form>
    </Form>
  );
};

export default WaitListForm;
