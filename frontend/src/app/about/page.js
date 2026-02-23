"use client";
import Link from "next/link";

export default function AboutPage() {
    

  return (
    <div className="min-h-screen px-20 py-32 text-slate-900">

      {/* Hero */}
      <div className="max-w-4xl mb-20">
        <h1 className="text-5xl font-bold mb-6">About CareerLens</h1>
        <p className="text-xl leading-relaxed">
          CareerLens is an AI-powered resume analysis platform designed to help job
          seekers understand how well their resumes match real job descriptions
          and modern Applicant Tracking Systems (ATS).
        </p>
      </div>

      {/* Mission + How it works */}
      <div className="grid md:grid-cols-2 gap-16 mb-24">

        <div>
          <h2 className="text-3xl font-semibold mb-4">Our Mission</h2>
          <p className="text-lg leading-relaxed">
            Many qualified candidates are rejected simply because their resumes
            are not optimized for automated hiring systems. CareerLens bridges
            that gap by providing clear AI-driven insights that improve resume
            quality, keyword alignment, and role relevance.
          </p>
        </div>

        <div>
          <h2 className="text-3xl font-semibold mb-4">How CareerLens Works</h2>
          <p className="text-lg leading-relaxed">
            Upload your resume and paste a job description. CareerLens analyzes
            both using AI to generate an ATS score, identify missing skills, and
            provide actionable suggestions tailored to the target role.
          </p>
        </div>

      </div>

      {/* Tech stack */}
      <div className="mb-24 max-w-4xl">
        <h2 className="text-3xl font-semibold mb-6">Technology Stack</h2>

        <ul className="grid md:grid-cols-2 gap-4 text-lg">
          <li>• Next.js (Frontend)</li>
          <li>• FastAPI (Backend)</li>
          <li>• AI Resume Analysis</li>
          <li>• Tailwind CSS</li>
          <li>• Vercel (Frontend Hosting)</li>
          <li>• Render (Backend Hosting)</li>
        </ul>
      </div>

      {/* Why built */}
      <div className="mb-24 max-w-4xl">
        <h2 className="text-3xl font-semibold mb-6">Why CareerLens Was Built</h2>

        <p className="text-lg leading-relaxed">
          CareerLens was created as a full-stack AI project to showcase modern web
          development, machine learning integration, and production deployment.
          The goal was to build a practical tool that genuinely helps students and
          professionals improve their job application outcomes.
        </p>
      </div>

      {/* CTA */}
      <Link
        href="/#analyze"
        className="inline-block bg-[rgba(210,232,35,1)] text-slate-900 font-semibold px-8 py-4 rounded-full hover:opacity-90 transition"
      >
        Try CareerLens →
      </Link>

    </div>
  );
}