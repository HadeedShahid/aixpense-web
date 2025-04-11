import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, BarChart3, LineChart, PieChart } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative hero-gradient">
      <div className="container px-4 md:px-6 py-16 md:py-24 mx-auto">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
          <div className="space-y-4">
            <div className="inline-block px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-sm font-medium mb-2">
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

            <div className="flex flex-col sm:flex-row gap-3 pt-3">
              <div className="relative flex-1">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="rounded-full pr-24 bg-white/80 border-gray-200 focus:border-expense-500 h-12"
                />
                <Button className="absolute right-1 top-1 rounded-full  text-white h-10">
                  Join Waitlist <ArrowRight className="ml-1 h-4 w-4" />
                </Button>
              </div>
            </div>
            <p className="text-sm text-gray-500">
              Join 1,200+ early adopters. No spam, ever.
            </p>
          </div>

          <div className="relative mx-auto lg:mr-0 animate-floating w-full max-w-[550px]">
            <div className="chat-container rounded-2xl p-5 shadow-xl w-full">
              <div className="flex flex-col gap-3">
                <div className="self-end bg-blue-300 py-3 px-4 rounded-2xl rounded-tr-none">
                  <p className="text-sm">I spent $5 on bananas yesterday.</p>
                </div>
                <div className="self-start bg-white py-3 px-4 rounded-2xl rounded-tl-none shadow-sm max-w-[90%]">
                  <p className="text-sm">
                    Got it! Added $5 to Groceries on April 8.
                  </p>
                </div>
                <div className="self-end bg-blue-300 py-3 px-4 rounded-2xl rounded-tr-none">
                  <p className="text-sm">
                    How much did I spend on food this week?
                  </p>
                </div>
                <div className="self-start bg-white py-3 px-4 rounded-2xl rounded-tl-none shadow-sm max-w-[90%]">
                  <p className="text-sm">
                    You spent $78.45 on food this week, which is 15% less than
                    last week!
                  </p>

                  {/* Add detailed chart visualization */}
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

                    {/* Simple bar chart visualization */}
                    <div className="flex items-end h-24 gap-1 mt-1">
                      <div className="flex-1 flex flex-col items-center">
                        <div
                          className="w-full bg-blue-200 rounded-t-sm"
                          style={{ height: "40%" }}
                        ></div>
                        <span className="text-[10px] mt-1">Mon</span>
                      </div>
                      <div className="flex-1 flex flex-col items-center">
                        <div
                          className="w-full bg-blue-300 rounded-t-sm"
                          style={{ height: "70%" }}
                        ></div>
                        <span className="text-[10px] mt-1">Tue</span>
                      </div>
                      <div className="flex-1 flex flex-col items-center">
                        <div
                          className="w-full bg-blue-400 rounded-t-sm"
                          style={{ height: "30%" }}
                        ></div>
                        <span className="text-[10px] mt-1">Wed</span>
                      </div>
                      <div className="flex-1 flex flex-col items-center">
                        <div
                          className="w-full bg-blue-500 rounded-t-sm"
                          style={{ height: "50%" }}
                        ></div>
                        <span className="text-[10px] mt-1">Thu</span>
                      </div>
                      <div className="flex-1 flex flex-col items-center">
                        <div
                          className="w-full bg-blue-600 rounded-t-sm"
                          style={{ height: "90%" }}
                        ></div>
                        <span className="text-[10px] mt-1">Fri</span>
                      </div>
                      <div className="flex-1 flex flex-col items-center">
                        <div
                          className="w-full bg-blue-400 rounded-t-sm"
                          style={{ height: "60%" }}
                        ></div>
                        <span className="text-[10px] mt-1">Sat</span>
                      </div>
                      <div className="flex-1 flex flex-col items-center">
                        <div
                          className="w-full bg-blue-300 rounded-t-sm"
                          style={{ height: "20%" }}
                        ></div>
                        <span className="text-[10px] mt-1">Sun</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="self-end bg-blue-300 py-3 px-4 rounded-2xl rounded-tr-none">
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
                          <div className="w-3 h-3 bg-blue-600 rounded-sm mr-2"></div>
                          <span>Groceries (35%)</span>
                        </div>
                        <div className="flex items-center">
                          <div className="w-3 h-3 bg-blue-400 rounded-sm mr-2"></div>
                          <span>Dining (20%)</span>
                        </div>
                        <div className="flex items-center">
                          <div className="w-3 h-3 bg-income-500 rounded-sm mr-2"></div>
                          <span>Utilities (15%)</span>
                        </div>
                        <div className="flex items-center">
                          <div className="w-3 h-3 bg-blue-300 rounded-sm mr-2"></div>
                          <span>Entertainment (30%)</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute -z-10 -bottom-4 -right-4 w-full h-full bg-accent/20 rounded-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
