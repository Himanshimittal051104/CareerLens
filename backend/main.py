from fastapi import FastAPI, UploadFile, File, HTTPException
import pdfplumber
from dotenv import load_dotenv
import os
import requests
import json

load_dotenv()

API_KEY = os.getenv("GEMINI_API_KEY")

if not API_KEY:
    raise ValueError("GEMINI_API_KEY not found in .env file")

app = FastAPI()


@app.get("/")
def home():
    return {"message": "AI Resume Analyzer backend running"}


@app.get("/models")
def list_models():
    """Optional: See available Gemini models"""
    url = f"https://generativelanguage.googleapis.com/v1beta/models?key={API_KEY}"
    response = requests.get(url)
    return response.json()


@app.post("/analyze")
async def analyze_resume(file: UploadFile = File(...)):
    try:
        # 1 Extract text from PDF
        text = ""

        with pdfplumber.open(file.file) as pdf:
            for page in pdf.pages:
                text += page.extract_text() or ""

        if not text.strip():
            raise HTTPException(status_code=400, detail="Could not extract text from PDF")

        # 2 Create prompt
        prompt = f"""
You are an ATS resume analyzer.

Return ONLY valid JSON in this format:

{{
  "ats_score": number,
  "strengths": ["point1", "point2"],
  "missing_skills": ["skill1", "skill2"],
  "suggestions": ["suggestion1", "suggestion2"]
}}

Resume:
{text}
"""

        # 3 Gemini API call
        url = f"https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key={API_KEY}"

        headers = {
            "Content-Type": "application/json"
        }

        data = {
            "contents": [
                {
                    "parts": [
                        {"text": prompt}
                    ]
                }
            ]
        }

        response = requests.post(url, headers=headers, json=data)

        result = response.json()

        # 4 Extract AI text
        raw_text = result["candidates"][0]["content"]["parts"][0]["text"]

        # 5 Clean markdown formatting
        cleaned = raw_text.replace("```json", "").replace("```", "").strip()

        # 6 Convert string → JSON
        analysis = json.loads(cleaned)

        return analysis

    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))