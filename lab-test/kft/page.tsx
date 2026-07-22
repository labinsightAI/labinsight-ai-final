import Link from "next/link";

export default function KFTPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-green-50 to-blue-100 p-8">
      <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl p-8">

        <Link
          href="/lab-test"
          className="text-blue-600 hover:underline"
        >
          ← Back to Lab Tests
        </Link>

        <h1 className="text-4xl font-bold text-green-600 mt-6">
          🧪 Kidney Function Test (KFT)
        </h1>

        <p className="text-gray-600 mt-4">
          KFT is a group of tests used to evaluate kidney health
          and check the body's waste removal function.
        </p>

        <div className="grid md:grid-cols-2 gap-5 mt-8">

          <div className="bg-green-50 rounded-xl p-5">
            <h2 className="text-xl font-bold text-green-700">
              Creatinine
            </h2>
            <p className="mt-2 text-gray-600">
              Measures kidney filtration ability and waste removal.
            </p>
          </div>

          <div className="bg-blue-50 rounded-xl p-5">
            <h2 className="text-xl font-bold text-blue-700">
              Urea
            </h2>
            <p className="mt-2 text-gray-600">
              Indicates the level of waste product filtered by kidneys.
            </p>
          </div>

          <div className="bg-purple-50 rounded-xl p-5">
            <h2 className="text-xl font-bold text-purple-700">
              BUN
            </h2>
            <p className="mt-2 text-gray-600">
              Blood Urea Nitrogen helps assess kidney function.
            </p>
          </div>

          <div className="bg-orange-50 rounded-xl p-5">
            <h2 className="text-xl font-bold text-orange-700">
              Electrolytes
            </h2>
            <p className="mt-2 text-gray-600">
              Measures sodium, potassium and fluid balance.
            </p>
          </div>

        </div>

      </div>
    </main>
  );
}