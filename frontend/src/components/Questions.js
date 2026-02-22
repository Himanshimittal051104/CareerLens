"use client";

import { useState } from "react";
import Image from "next/image";

export default function Questions() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What is CareerLens?",
      answer:
        "CareerLens is an AI-powered resume analyzer that compares your resume with job descriptions to provide ATS scoring, skill gap insights, and personalized improvement suggestions.",
    },
    {
      question: "How does resume analysis work?",
      answer:
        "Upload your resume and paste a job description. CareerLens analyzes both using AI and generates structured feedback including ATS compatibility, missing skills, and tailored recommendations.",
    },
    {
      question: "What file formats are supported?",
      answer:
        "CareerLens currently supports PDF resumes only, with a maximum file size of 5MB.",
    },
    {
      question: "Is my resume data secure?",
      answer:
        "Yes. Your resume is processed securely and is not shared with third parties. Files are used only for analysis purposes.",
    },
    {
      question: "Do I need to create an account?",
      answer:
        "You can analyze resumes without signing in, but authentication enables a more personalized experience and future features.",
    },
    {
      question: "What is an ATS score?",
      answer:
        "ATS (Applicant Tracking System) score reflects how well your resume aligns with automated screening systems used by recruiters.",
    },
    {
      question: "Can I analyze multiple resumes?",
      answer:
        "Yes. You can upload and analyze multiple resumes one at a time.",
    },
    {
      question: "Who is CareerLens for?",
      answer:
        "CareerLens is designed for students, job seekers, and professionals who want to optimize their resumes and improve interview chances.",
    },
    {
      question: "Is CareerLens free to use?",
      answer:
        "Yes. CareerLens is currently free while under development.",
    },
  ];

  return (
    <div className="bg-[#880d1e] text-[#E9C0E9] pt-48 pb-16 px-6 flex flex-col items-center">
      
      <h1 className="text-5xl font-bold mb-16 text-center">
        Frequently Asked Questions
      </h1>

      <div className="w-full max-w-4xl space-y-6">

        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-red-950 rounded-2xl p-8 cursor-pointer transition-all duration-300"
            onClick={() =>
              setOpenIndex(openIndex === index ? null : index)
            }
          >
            <div className="flex justify-between items-center">
              <h3 className="text-2xl font-semibold">
                {faq.question}
              </h3>

              <Image
                src="/arrow-down.svg"
                alt="arrow"
                width={20}
                height={20}
                className={`transition-transform duration-300 ${
                  openIndex === index ? "rotate-180" : ""
                }`}
              />
            </div>

            {openIndex === index && (
              <div className="mt-6 text-purple-200 leading-relaxed">
                {faq.answer}
              </div>
            )}
          </div>
        ))}

      </div>
    </div>
  );
}