import Link from "next/link";

export default function QuizPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-orange-50 to-yellow-100 p-8">
      <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl p-8">

        <Link
          href="/dashboard"
          className="text-blue-600 hover:underline"
        >
          ← Back to Dashboard
        </Link>

        <h1 className="text-4xl font-bold text-orange-600 mt-6">
          📝 Laboratory Quiz
        </h1>

        <p className="text-gray-600 mt-2">
          Test your medical laboratory knowledge.
        </p>

        <div className="mt-8 space-y-6">

          <div className="bg-orange-50 rounded-xl p-5">
            <h2 className="font-bold text-lg">
              1. What does CBC stand for?
            </h2>

            <div className="mt-3 space-y-2">
              <button className="block w-full text-left border rounded-lg p-3 hover:bg-orange-100">
                A. Complete Blood Count
              </button>

              <button className="block w-full text-left border rounded-lg p-3 hover:bg-orange-100">
                B. Cardiac Blood Check
              </button>

              <button className="block w-full text-left border rounded-lg p-3 hover:bg-orange-100">
                C. Clinical Body Count
              </button>
            </div>
          </div>


          <div className="bg-orange-50 rounded-xl p-5">
            <h2 className="font-bold text-lg">
              2. Which test evaluates kidney function?
            </h2>

            <div className="mt-3 space-y-2">
              <button className="block w-full text-left border rounded-lg p-3 hover:bg-orange-100">
                A. LFT
              </button>

              <button className="block w-full text-left border rounded-lg p-3 hover:bg-orange-100">
                B. KFT
              </button>

              <button className="block w-full text-left border rounded-lg p-3 hover:bg-orange-100">
                C. CBC
              </button>
            </div>
          </div>

        </div>


        <button className="mt-8 w-full bg-orange-600 text-white py-3 rounded-xl hover:bg-orange-700">
          Submit Quiz
        </button>

      </div>
    </main>
  );
}