import UploadForm from "../components/UploadForm";
import Link from "next/link";
export default function Home() {
  return (
    <main className="flex items-center gap-16 px-8 h-[80vh]">
      {/* left */}
      <div className=" text-purple-950 flex-1 h-[40vh]">
        <h1 className="font-bold text-5xl my-4">Optimize Your Resume. Land Better Interviews.</h1>
        <p className="mb-4 ">Upload your resume and job description to get an instant ATS score, skill gap analysis,
          and AI-powered suggestions to improve your chances of getting shortlisted.</p>
        <Link href="/analyze">
          <button className="rounded-full p-4 bg-purple-950 text-white text-lg font-semibold cursor-pointer">Get Started for free</button>
        </Link>
      </div>

      {/* right */}
      <div className=" text-black flex-1 h-[60vh] ">
      </div>
    </main>
  );
}