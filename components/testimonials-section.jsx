import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    quote:
      "aiexpense has completely changed how I track my spending. It's like having a personal finance assistant in my pocket.",
    name: "Alex Johnson",
    title: "Marketing Manager",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150",
  },
  {
    quote:
      "I've tried so many expense trackers before but always gave up. This is the first one that I've actually stuck with for more than a week!",
    name: "Samira Patel",
    title: "Freelance Designer",
    avatar:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150",
  },
  {
    quote:
      "As someone who hates entering data manually, the chat interface is a game-changer. It's quick, intuitive, and even fun to use.",
    name: "Michael Chen",
    title: "Software Developer",
    avatar:
      "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=150",
  },
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-16 md:py-24 bg-white">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="text-center max-w-[800px] mx-auto mb-12">
          <h2 className="text-2xl md:text-4xl font-bold font-display mb-4">
            Loved by early users
          </h2>
          <p className="text-gray-600 text-lg">
            Here's what our beta testers have to say about aiexpense.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, i) => (
            <Card
              key={i}
              className="bg-gradient-to-br from-white to-gray-50 border-0 shadow-md card-hover"
            >
              <CardContent className="pt-6">
                <div className="flex flex-col space-y-4">
                  <p className="text-gray-700 italic">"{testimonial.quote}"</p>
                  <div className="flex items-center space-x-3 mt-4">
                    <Avatar>
                      <AvatarImage
                        src={testimonial.avatar}
                        alt={testimonial.name}
                      />
                      <AvatarFallback>
                        {testimonial.name.charAt(0)}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium text-gray-900">
                        {testimonial.name}
                      </p>
                      <p className="text-gray-500 text-sm">
                        {testimonial.title}
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
