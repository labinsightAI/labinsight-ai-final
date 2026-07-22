import Link from "next/link";

export default function LabTestPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-100 p-8">
      <div className="max-w-5xl mx-auto">

        <Link
          href="/dashboard"
          className="text-blue-600 hover:underline"
        >
          ← Back to Dashboard
        </Link>

        <h1 className="text-4xl font-bold text-purple-700 mt-6">
          🧪 Lab Test Library
        </h1>

        <p className="text-gray-600 mt-2">
          Explore important laboratory tests and their clinical importance.
        </p>

        <div className="grid md:grid-cols-3 gap-6 mt-8">

          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h2 className="text-2xl font-bold text-red-600">
              🩸 CBC
            </h2>

            <p className="mt-3 text-gray-600">
              Complete Blood Count checks WBC, RBC,
              Hemoglobin and Platelets.
            </p>

            <Link
              href="/lab-test/cbc"
              className="mt-5 inline-block bg-red-500 text-white px-5 py-2 rounded-lg"
            >
              View Details
            </Link>
          </div>


          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h2 className="text-2xl font-bold text-yellow-600">
              🧬 LFT
            </h2>

            <p className="mt-3 text-gray-600">
              Liver Function Test evaluates liver enzymes
              and liver health.
            </p>

            <Link
              href="/lab-test/lft"
              className="mt-5 inline-block bg-yellow-500 text-white px-5 py-2 rounded-lg"
            >
              View Details
            </Link>
          </div>


          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h2 className="text-2xl font-bold text-green-600">
              🧪 KFT
            </h2>

            <p className="mt-3 text-gray-600">
              Kidney Function Test checks Creatinine,
              Urea and Electrolytes.
            </p>

            <Link
              href="/lab-test/kft"
              className="mt-5 inline-block bg-green-600 text-white px-5 py-2 rounded-lg"
            >
              View Details
            </Link>
          </div>

        </div>

      </div>
    </main>
  );
}