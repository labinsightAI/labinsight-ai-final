import Link from "next/link";

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-4xl font-bold text-blue-700 mb-2">
        📊 Student Dashboard
      </h1>

      <p className="text-gray-600 mb-8">
        Welcome to your LabInsight AI Dashboard
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

        <Link
          href="/lab-test"
          className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl"
        >
          <h2 className="text-xl font-bold">🧪 Lab Tests</h2>
          <p className="text-gray-500 mt-2">
            Explore CBC, LFT and KFT.
          </p>
        </Link>

        <Link
          href="/chat"
          className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl"
        >
          <h2 className="text-xl font-bold">🤖 AI Assistant</h2>
          <p className="text-gray-500 mt-2">
            Ask medical laboratory questions.
          </p>
        </Link>

        <Link
          href="/quiz"
          className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl"
        >
          <h2 className="text-xl font-bold">📝 Quiz</h2>
          <p className="text-gray-500 mt-2">
            Test your laboratory knowledge.
          </p>
        </Link>

        <Link
          href="/progress"
          className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl"
        >
          <h2 className="text-xl font-bold">📈 Progress</h2>
          <p className="text-gray-500 mt-2">
            Track your learning progress.
          </p>
        </Link>

      </div>

      <div className="mt-10">
        <Link
          href="/"
          className="text-blue-600 font-semibold hover:underline"
        >
          ← Back to Home
        </Link>
      </div>
    </main>
  );
}