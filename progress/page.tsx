import Link from "next/link";

export default function ProgressPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-100 p-8">
      <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-xl p-8">

        <Link
          href="/dashboard"
          className="text-blue-600 hover:underline"
        >
          ← Back to Dashboard
        </Link>

        <h1 className="text-4xl font-bold text-pink-600 mt-6">
          📈 Learning Progress
        </h1>

        <p className="text-gray-600 mt-2">
          Track your laboratory learning journey.
        </p>


        <div className="grid md:grid-cols-3 gap-6 mt-8">

          <div className="bg-blue-50 rounded-2xl p-6 text-center">
            <h2 className="text-xl font-bold text-blue-700">
              🧪 Lab Tests
            </h2>
            <p className="text-4xl font-bold mt-3">
              12
            </p>
            <p className="text-gray-500">
              Completed
            </p>
          </div>


          <div className="bg-green-50 rounded-2xl p-6 text-center">
            <h2 className="text-xl font-bold text-green-700">
              📝 Quiz Score
            </h2>
            <p className="text-4xl font-bold mt-3">
              85%
            </p>
            <p className="text-gray-500">
              Average Score
            </p>
          </div>


          <div className="bg-purple-50 rounded-2xl p-6 text-center">
            <h2 className="text-xl font-bold text-purple-700">
              ⭐ Level
            </h2>
            <p className="text-4xl font-bold mt-3">
              Advanced
            </p>
            <p className="text-gray-500">
              Medical Student
            </p>
          </div>

        </div>


        <div className="mt-8 bg-gray-50 rounded-2xl p-6">
          <h2 className="text-2xl font-bold">
            Overall Progress
          </h2>

          <div className="w-full bg-gray-200 rounded-full h-4 mt-4">
            <div className="bg-pink-600 h-4 rounded-full w-[75%]"></div>
          </div>

          <p className="mt-3 text-gray-600">
            75% of laboratory learning goals completed.
          </p>
        </div>

      </div>
    </main>
  );
}