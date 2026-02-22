"use client";

import Link from "next/link";
export default function Card() {
    return (
        <div className=" bg-purple-100 min-h-screen px-32 flex flex-col items-center" >
            <h1 className="text-5xl mt-4 font-extrabold text-slate-900 pt-48 text-center">
                Powerful AI Features to Optimize Your Resume
            </h1>
            {/* <p className=" text  w-[30vw] my-10 font-semibold text-lg h-[20vh]">
                CareerLens helps you understand how your resume performs against real job descriptions,
                providing ATS scoring, skill insights, and actionable recommendations — all in seconds.
            </p> */}
            <section className="min-h-[50vh] flex gap-8 mt-20">

                {/* Feature 1 */}
                <div className="bg-purple-300 py-2 pl-2 rounded-xl h-[36vh]">
                    <div className="bg-white px-6 rounded-xl w-[20vw] h-[36vh] flex items-center flex-col justify-center transition-transform duration-300 hover:scale-[1.03] hover:translate-y-2 hover:translate-x-2 cursor-pointer">
                        <h1 className="text-xl font-bold mb-3  text-center ">Resume & Job Description Matching</h1>
                        <ul className="list-disc ml-5 space-y-1 flex flex-col">
                            <li>Analyze your resume against any job description</li>
                            <li>Upload resume (PDF)</li>
                            <li>Paste job description</li>
                            <li>Instant comparison using AI</li>
                        </ul>
                    </div>
                </div>

                {/* Feature 2 */}
                <div className="bg-purple-300 py-2 pl-2 rounded-xl h-[36vh]">
                    <div className="bg-white px-6 rounded-xl w-[20vw] h-[36vh] flex items-center flex-col justify-center transition-transform duration-300 hover:scale-[1.03] hover:translate-y-2 hover:translate-x-2 cursor-pointer">
                        <h1 className="text-xl font-bold mb-3  text-center">ATS Compatibility Score</h1>
                        <ul className="list-disc ml-5 space-y-1">
                            <li>Instant ATS scoring</li>
                            <li>Highlights optimization gaps</li>
                            <li>Improves shortlisting chances</li>
                            <li>Role-specific evaluation</li>
                        </ul>
                    </div>
                </div>
                {/* Feature 3 */}
                <div className="bg-purple-300 pl-2 py-2 rounded-xl h-[36vh]">
                    <div className="bg-white px-6 rounded-xl w-[20vw]  h-[36vh] flex items-center flex-col justify-center transition-transform duration-300 hover:scale-[1.03] hover:translate-y-2 hover:translate-x-2 cursor-pointer">
                        <h1 className="text-xl font-bold mb-3  text-center">Skill Gap Detection</h1>
                        <ul className="list-disc ml-5 space-y-1">
                            <li>Detect missing skills</li>
                            <li>Compare against job requirements</li>
                            <li>Identify weak areas</li>
                            <li>Learning priority suggestions</li>
                        </ul>
                    </div>
                </div>
                {/* Feature 4 */}
                <div className="bg-purple-300 py-2 pl-2 rounded-xl h-[36vh]">
                    <div className="bg-white px-6 rounded-xl w-[20vw] h-[36vh] flex items-center flex-col justify-center transition-transform duration-300 hover:scale-[1.03] hover:translate-y-2 hover:translate-x-2 cursor-pointer">
                        <h1 className="text-xl font-bold mb-3  text-center">AI Improvement Suggestions</h1>
                        <ul className="list-disc ml-5 space-y-1">
                            <li>Content clarity feedback</li>
                            <li>Keyword optimization</li>
                            <li>Role-based recommendations</li>
                            <li>Actionable resume tips</li>
                        </ul>
                    </div>
                </div>


            </section >
        </div >
    );
}