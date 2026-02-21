"use client";

import { useState } from "react";

export default function UploadForm() {
  const [file, setFile] = useState(null);
  const [job, setJob] = useState("");
  // const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

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
    <div className="max-w-xl mx-auto mt-10 space-y-6">

      <form onSubmit={handleSubmit} className="space-y-4">

        <input
          type="file"
          accept="application/pdf"
          onChange={(e) => setFile(e.target.files[0])}
        />

        <textarea
          placeholder="Paste Job Description..."
          className="w-full border p-3"
          rows={6}
          value={job}
          onChange={(e) => setJob(e.target.value)}
        />

        <button
          className="bg-black text-white px-4 py-2"
          disabled={loading}
        >
          {loading ? "Analyzing..." : "Analyze Resume"}
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