"use client";

import { useState,useRef } from "react";

export default function UploadForm() {
  const [file, setFile] = useState(null);
  const [job, setJob] = useState("");
  // const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const fileInputRef = useRef(null);
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!file || !job) {
      alert("Upload resume and enter job description");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);
    formData.append("job_description", job);

    setLoading(true);

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/analyze`, {
        method: "POST",
        body: formData,
      });

      const data = await res.json();
      setResult(data);
    } catch (err) {
      alert("Backend not running");
    }

    setLoading(false);
  };

  return (
    <div className="">

      <form onSubmit={handleSubmit} >

        <p className="font-semibold mb-4">Upload your resume (PDF only, max 5MB)</p>

        <textarea
          placeholder="Paste Job Description..."
          className="w-full border outline-none focus:outline-none focus:ring-0 p-3 placeholder-[rgba(210,232,35,1)] scrollbar-hide overflow-y-scroll mb-4 "
          rows={1}
          value={job}
          onChange={(e) => setJob(e.target.value)}
        />
        <div className="mb-4 flex items-center gap-4">
        <input
         ref={fileInputRef}
          type="file"
          accept="application/pdf"
          onChange={(e) => {
            const file = e.target.files?.[0];
            if (!file) return;

            if (file.size > 5 * 1024 * 1024) {
              alert("File must be less than 5MB");
              e.target.value = "";
              return;
            }

            setFile(file);
          }}
          className=" cursor-pointer file:bg-[rgba(210,232,35,1)]  file:text-slate-900 file:p-4 file:rounded-full file:border-0 file:text-lg file:font-semibold file:cursor-pointer outline-none text-transparent file:w-[12vw] w-[12vw]"
        />
        {file && (
        <p className="text-sm text-bg-[rgba(210,232,35,1)] truncate flex gap-1">
          <span>{file.name}</span>
          <img src="/cancel.svg" alt="cancel" className="-mt-1" onClick={()=>{setFile(null);
    fileInputRef.current.value = null;}}/>
        </p>
        
      )}
      </div>
        <button
          className="bg-[rgba(210,232,35,1)] rounded-full p-4 text-slate-900 font-semibold text-lg w-[12vw] cursor-pointer"
          disabled={loading}
        >
          {loading ? "Submitting..." : "Submit "}
        </button>
      </form>

      {/* {result && (
        <div className="border p-4">

          <h2>ATS Score: {result.ats_score}</h2>

          <h3>Strengths</h3>
          <ul>
            {result.strengths.map((x, i) => (
              <li key={i}>• {x}</li>
            ))}
          </ul>

          <h3>Missing Skills</h3>
          <ul>
            {result.missing_skills.map((x, i) => (
              <li key={i}>• {x}</li>
            ))}
          </ul>

          <h3>Suggestions</h3>
          <ul>
            {result.suggestions.map((x, i) => (
              <li key={i}>• {x}</li>
            ))}
          </ul>

        </div>
      )} */}
    </div>
  );
}