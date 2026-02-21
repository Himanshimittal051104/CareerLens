import UploadForm from "../components/UploadForm";

export default function Home() {
  return (
    <main className="p-10">
      <h1 className="text-2xl font-bold text-center">
        AI Resume Analyzer
      </h1>

      <UploadForm />
    </main>
  );
}