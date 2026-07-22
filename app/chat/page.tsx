import Link from "next/link";

export default function ChatPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-green-50 to-blue-100 p-8">
      <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl p-8">

        <Link
          href="/dashboard"
          className="text-blue-600 hover:underline"
        >
          ← Back to Dashboard
        </Link>

        <h1 className="text-4xl font-bold text-green-700 mt-4">
          🤖 LabInsight AI Assistant
        </h1>

        <p className="text-gray-600 mt-2">
          Ask any laboratory or medical science question.
        </p>

        <div className="mt-8">
          <textarea
            placeholder="Example: What is a CBC test?"
            className="w-full h-40 border rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-green-500"
          ></textarea>

          <button className="mt-4 w-full bg-green-600 text-white py-3 rounded-xl hover:bg-green-700">
            Ask AI
          </button>
        </div>

        <div className="mt-8 bg-green-50 border border-green-200 rounded-xl p-5">
          <h2 className="text-xl font-semibold text-green-700">
            Sample Response
          </h2>

          <p className="mt-3 text-gray-700">
            A Complete Blood Count (CBC) is a common laboratory test that
            measures red blood cells, white blood cells, hemoglobin,
            hematocrit, and platelets to evaluate overall health and detect
            infections, anemia, and other blood disorders.
          </p>
        </div>

      </div>
    </main>
  );
}