import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-cyan-100 flex items-center justify-center p-6">

      <div className="max-w-5xl w-full bg-white rounded-[32px] shadow-2xl p-10 md:p-14 text-center border border-blue-100">

        {/* Logo & Title */}
        <div className="flex justify-center mb-6">
          <div className="bg-blue-100 rounded-full p-5 text-5xl shadow-md">
            🧪
          </div>
        </div>

        <h1 className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-blue-700 to-cyan-500 text-transparent bg-clip-text">
          LabInsight AI
        </h1>

        <p className="mt-5 text-lg md:text-xl text-gray-600 font-medium">
          Smart Laboratory Learning Platform for Medical & Biochemistry Students
        </p>

        <p className="mt-6 text-gray-500">
          Explore laboratory knowledge, AI assistance, quizzes and smart learning tools in one platform.
        </p>


        {/* Creator */}
        <div className="mt-6">
          <p className="text-sm text-gray-400">
            Created by
          </p>
          <p className="text-xl font-bold text-blue-700">
            Dr. Farishta
          </p>
        </div>


        {/* Buttons */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-5 mt-10">

          <Link
            href="/login"
            className="bg-blue-600 text-white rounded-2xl p-5 font-semibold shadow-lg hover:shadow-xl hover:-translate-y-1 transition"
          >
            🔐 Login
          </Link>

          <Link
            href="/dashboard"
            className="bg-indigo-600 text-white rounded-2xl p-5 font-semibold shadow-lg hover:shadow-xl hover:-translate-y-1 transition"
          >
            📊 Dashboard
          </Link>

          <Link
            href="/chat"
            className="bg-green-600 text-white rounded-2xl p-5 font-semibold shadow-lg hover:shadow-xl hover:-translate-y-1 transition"
          >
            🤖 AI Assistant
          </Link>

          <Link
            href="/lab-test"
            className="bg-purple-600 text-white rounded-2xl p-5 font-semibold shadow-lg hover:shadow-xl hover:-translate-y-1 transition"
          >
            🧪 Lab Tests
          </Link>

          <Link
            href="/quiz"
            className="bg-orange-500 text-white rounded-2xl p-5 font-semibold shadow-lg hover:shadow-xl hover:-translate-y-1 transition"
          >
            📝 Quiz
          </Link>

          <Link
            href="/progress"
            className="bg-pink-600 text-white rounded-2xl p-5 font-semibold shadow-lg hover:shadow-xl hover:-translate-y-1 transition"
          >
            📈 Progress
          </Link>

        </div>


        {/* Footer */}
        <div className="mt-12 text-sm text-gray-400">
          AI Powered • Interactive Learning • Smart Laboratory Education
        </div>

      </div>

    </main>
  );
}