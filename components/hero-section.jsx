"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, BarChart3, LineChart, PieChart } from "lucide-react";
import { motion } from "framer-motion";
import WaitListForm from "./waitlist-form";

const HeroSection = () => {
  return (
    <section className="relative hero-gradient">
      <div className="container px-4 md:px-6 py-16 md:py-24 mx-auto">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
          <div className="space-y-4">
            <div className="inline-block px-3 py-1 rounded-full bg-expense-100 text-expense-700 text-sm font-medium mb-2">
              Coming Soon
            </div>
            <h1 className="text-3xl md:text-5xl font-bold font-display">
              Your Finances,{" "}
              <span className="text-gradient">One Chat Away.</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-[600px]">
              An AI chatbot that makes tracking expenses as easy as texting. No
              more spreadsheets, no more data entry.
            </p>
            <WaitListForm />
            <p className="text-sm text-gray-500">
              Join 1,200+ early adopters. No spam, ever.
            </p>
          </div>

          <motion.div
            className="relative mx-auto lg:mr-0 w-full max-w-[550px]"
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <div className="chat-container rounded-2xl p-5 shadow-xl w-full">
              <div className="flex flex-col gap-3">
                <div className="self-end bg-expense-300 py-3 px-4 rounded-2xl rounded-tr-none">
                  <p className="text-sm">I spent $5 on bananas yesterday.</p>
                </div>
                <div className="self-start bg-white py-3 px-4 rounded-2xl rounded-tl-none shadow-sm max-w-[90%]">
                  <p className="text-sm">
                    Got it! Added $5 to Groceries on April 8.
                  </p>
                </div>
                <div className="self-end bg-expense-300 py-3 px-4 rounded-2xl rounded-tr-none">
                  <p className="text-sm">
                    How much did I spend on food this week?
                  </p>
                </div>
                <div className="self-start bg-white py-3 px-4 rounded-2xl rounded-tl-none shadow-sm max-w-[90%]">
                  <p className="text-sm">
                    You spent $78.45 on food this week, which is 15% less than
                    last week!
                  </p>

                  {/* Horizontal bar chart visualization - now showing only 4 days */}
                  <div className="mt-3 bg-white rounded-lg p-3 border border-gray-100">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-medium">
                        Weekly Food Expenses
                      </span>
                      <div className="flex space-x-2">
                        <BarChart3 className="h-3 w-3 text-expense-600" />
                        <LineChart className="h-3 w-3 text-expense-500" />
                        <PieChart className="h-3 w-3 text-expense-400" />
                      </div>
                    </div>

                    {/* Horizontal bar chart - reduced to 4 days */}
                    <div className="space-y-2 mt-2">
                      <div className="flex items-center gap-2">
                        <span className="text-xs w-8">Mon</span>
                        <div
                          className="h-5 bg-expense-200 rounded-sm"
                          style={{ width: "40%" }}
                        ></div>
                        <span className="text-xs text-gray-500">$12.40</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs w-8">Wed</span>
                        <div
                          className="h-5 bg-expense-400 rounded-sm"
                          style={{ width: "30%" }}
                        ></div>
                        <span className="text-xs text-gray-500">$9.25</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs w-8">Fri</span>
                        <div
                          className="h-5 bg-expense-600 rounded-sm"
                          style={{ width: "90%" }}
                        ></div>
                        <span className="text-xs text-gray-500">$27.80</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs w-8">Sun</span>
                        <div
                          className="h-5 bg-expense-300 rounded-sm"
                          style={{ width: "20%" }}
                        ></div>
                        <span className="text-xs text-gray-500">$6.20</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="self-end bg-expense-300 py-3 px-4 rounded-2xl rounded-tr-none">
                  <p className="text-sm">
                    What are my top spending categories?
                  </p>
                </div>
                <div className="self-start bg-white py-3 px-4 rounded-2xl rounded-tl-none shadow-sm max-w-[90%]">
                  <p className="text-sm">
                    Here's your spending breakdown for April:
                  </p>

                  {/* Add pie chart visualization */}
                  <div className="mt-3 bg-white rounded-lg p-3 border border-gray-100">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-medium">
                        Monthly Breakdown
                      </span>
                    </div>

                    <div className="flex">
                      {/* Simple pie chart visualization */}
                      <div className="w-24 h-24 relative">
                        <div
                          className="absolute inset-0 rounded-full border-8 border-expense-600"
                          style={{
                            clipPath:
                              "polygon(50% 50%, 100% 50%, 100% 0, 50% 0)",
                          }}
                        ></div>
                        <div
                          className="absolute inset-0 rounded-full border-8 border-expense-400"
                          style={{
                            clipPath: "polygon(50% 50%, 50% 0, 0 0, 0 50%)",
                          }}
                        ></div>
                        <div
                          className="absolute inset-0 rounded-full border-8 border-income-500"
                          style={{
                            clipPath:
                              "polygon(50% 50%, 0 50%, 0 100%, 30% 100%)",
                          }}
                        ></div>
                        <div
                          className="absolute inset-0 rounded-full border-8 border-expense-300"
                          style={{
                            clipPath:
                              "polygon(50% 50%, 30% 100%, 100% 100%, 100% 50%)",
                          }}
                        ></div>
                      </div>

                      {/* Legend */}
                      <div className="ml-4 text-xs space-y-1 flex-1">
                        <div className="flex items-center">
                          <div className="w-3 h-3 bg-expense-600 rounded-sm mr-2"></div>
                          <span>Groceries (35%)</span>
                        </div>
                        <div className="flex items-center">
                          <div className="w-3 h-3 bg-expense-400 rounded-sm mr-2"></div>
                          <span>Dining (20%)</span>
                        </div>
                        <div className="flex items-center">
                          <div className="w-3 h-3 bg-income-500 rounded-sm mr-2"></div>
                          <span>Utilities (15%)</span>
                        </div>
                        <div className="flex items-center">
                          <div className="w-3 h-3 bg-expense-300 rounded-sm mr-2"></div>
                          <span>Entertainment (30%)</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              style={{
                position: "absolute",
                zIndex: "-10",
                bottom: "-16px",
                right: "-16px",
                width: "100%",
                height: "100%",
                backgroundColor: "rgba(51, 218, 135, 0.2)",
                borderRadius: "16px",
              }}
            ></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
