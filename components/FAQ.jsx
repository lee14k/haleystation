import React, { useState } from "react";
import Topbar from "../components/Topbar";
import { Playfair_Display } from "next/font/google";
import { Lora } from "next/font/google";
import Image from "next/image";
import {ChevronDownIcon } from "@heroicons/react/24/outline";

const lora = Lora({ subsets: ["latin"] });
const playfair = Playfair_Display({ subsets: ["latin"] });

const FAQ = () => {
  const questions = [
    {
      question: "Who sets up for my event?",
      answer:
        "Your event coordinator will handle all the setup. You just need to show up and enjoy your day!",
    },
    {
      question:
        "Do you have bartenders on staff, or do I need to provide my own?",
      answer:
        "We have professional bartenders on staff. ",
    },
    {
      question: "Where can my guests park? Where can they stay in town?",
      answer:
        "There is ample parking at our venue, located just a block away at 319 Stephenson Ave. We can recommend several nearby hotels for your guests.",
    },
    {
      question: "What is there to do in town if my guests arrive a day early?",
      answer:
        "There are plenty of attractions, including parks, museums, and great dining options.",
    },
    {
      question: "Can we tour or view Haley Station before booking?",
      answer:
        "Absolutely! We encourage you to schedule a tour to see the venue and discuss your event in detail.",
    },
    {
      question: "Can I provide my own alcohol?",
      answer: "No, all alcohol must be provided in house, no carry-ins"
    },
  ];

  // State to keep track of which answers are visible
  const [visibleAnswers, setVisibleAnswers] = useState(
    Array(questions.length).fill(false)
  );

  const toggleAnswerVisibility = (index) => {
    // Update the visibility state of the targeted answer
    const updatedVisibility = [...visibleAnswers];
    updatedVisibility[index] = !updatedVisibility[index];
    setVisibleAnswers(updatedVisibility);
  };

  return (
    <div className="">
      <div className="grid lg:grid-cols-2 text-yellow-950 py-12 px-4">
        <div className="flex justify-center items-center flex-col">
          <div className="text-6xl">
            <h1 className={playfair.className}>FAQs</h1>
          </div>
          {questions.map((item, index) => (
            <div key={item.question} className="my-4">
              <button
                onClick={() => toggleAnswerVisibility(index)}
                className="text-left w-full text-2xl flex gap-2"
              >
                {item.question} <ChevronDownIcon className="w-6 h-6"/>
              </button>
              {visibleAnswers[index] && (
                <div className="text-left w-full text-2xl">{item.answer}</div>
              )}
            </div>
          ))}
        </div>
        <div className="ml-4">
          <Image src="/stok1.jpg" width={800} height={600} />
        </div>
      </div>
    </div>
  );
};

export default FAQ;
