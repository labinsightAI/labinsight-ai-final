import Link from "next/link";

export default function CBCPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-red-50 to-blue-100 p-8">
      <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl p-8">

        <Link
          href="/lab-test"
          className="text-blue-600 hover:underline"
        >
          ← Back to Lab Tests
        </Link>

        <h1 className="text-4xl font-bold text-red-600 mt-6">
          🩸 Complete Blood Count (CBC)
        </h1>

        <p className="text-gray-600 mt-4">
          CBC is a common blood test that evaluates blood cells
          and helps detect anemia, infection, and other disorders.
        </p>

        <div className="grid md:grid-cols-2 gap-5 mt-8">

          <div className="bg-red-50 rounded-xl p-5">
            <h2 className="text-xl font-bold text-red-700">
              🔴 RBC
            </h2>
            <p className="mt-2 text-gray-600">
              Red Blood Cells carry oxygen throughout the body.
            </p>
          </div>

          <div className="bg-blue-50 rounded-xl p-5">
            <h2 className="text-xl font-bold text-blue-700">
              ⚪ WBC
            </h2>
            <p className="mt-2 text-gray-600">
              White Blood Cells help fight infections.
            </p>
          </div>

          <div className="bg-yellow-50 rounded-xl p-5">
            <h2 className="text-xl font-bold text-yellow-700">
              🩸 Hemoglobin
            </h2>
            <p className="mt-2 text-gray-600">
              Protein responsible for oxygen transport in blood.
            </p>
          </div>

          <div className="bg-green-50 rounded-xl p-5">
            <h2 className="text-xl font-bold text-green-700">
              🟢 Platelets
            </h2>
            <p className="mt-2 text-gray-600">
              Help in blood clotting and healing.
            </p>
          </div>

        </div>

      </div>
    </main>
  );
}