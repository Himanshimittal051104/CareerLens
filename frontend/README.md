# CareerLens Frontend

This is the frontend of CareerLens, an AI-powered resume analyzer that helps users evaluate how well their resume matches a job description and provides actionable improvement suggestions.

The frontend is built using Next.js (App Router) with Tailwind CSS and integrates authentication via NextAuth.

---

## 🔗 Live Links

Frontend (Vercel): https://career-lens-fawn.vercel.app/

---

## 🚀 Features

- Google authentication (NextAuth)
- Resume upload (PDF)
- Job description input
- Analyze button with loading state
- Redirect-based Result page
- ATS score visualization
- Strengths / Missing Skills / Suggestions cards
- About, Features & FAQ sections
- Responsive modern UI
- Sticky navbar + footer
- Deployed on Vercel

---

## 🛠 Tech Stack

- Next.js (App Router)
- React
- Tailwind CSS
- NextAuth

---

## 📂 Project Structure
```md
frontend/
 ├── src/app
 │   ├── page.jsx
 │   ├── about/
 │   ├── result/
 │   └── api/auth
 ├── src/components
 │   ├── UploadForm.jsx
 │   ├── Navbar.jsx
 │   ├── Footer.jsx
 │   └── ClientLayout.jsx

```

---

## ▶ How to run locally

### Clone the repo and move inside folder:
```bash
git clone https://github.com/Himanshimittal051104/CareerLens.git
cd CareerLens
```

### Start Frontend

Go to frontend folder:
```bash
cd frontend
```
Install packages:
```bash
npm install
```

Start frontend:
```bash
npm run dev
```

Open in browser:
```text
http://localhost:3000
```

Create .env.local:
```text
NEXT_PUBLIC_API_URL=http://localhost:8000
NEXTAUTH_SECRET=your_secret
NEXTAUTH_URL=http://localhost:3000
GOOGLE_CLIENT_ID=your_id
GOOGLE_CLIENT_SECRET=your_secret
```

---

## 🔄 Application Flow

- User logs in with Google
- Uploads resume (PDF)
- Pastes job description
- Frontend sends data to backend API
- Receives analysis result
- Stores result temporarily in localStorage
- Redirects to /result page
- Result page displays ATS score and insights

---

## 📸 Screenshots

![Home Page](frontend/public/screenshots/home.png)
![Analyze Resume Page](frontend/public/screenshots/analyze.png)
![Result](frontend/public/screenshots/result.png)

---

## 📌 Notes

- Results are stored temporarily using localStorage and cleared after viewing.
- /result route is protected against direct access without analysis.
- Backend API must be running for analysis to work.

---

## 🔮 Future Improvements

- Resume preview before submission
- Visual ATS score indicator (progress ring / chart)
- Downloadable PDF report from result page
- Resume history dashboard for logged-in users
- Compare multiple resumes UI
- Improved loading & skeleton states
- Mobile-first responsiveness
- Dark mode

---

## 👩‍💻 Author

Himanshi Mittal

---

## ⭐ Support

If you found this project helpful, consider giving it a star ⭐

---
