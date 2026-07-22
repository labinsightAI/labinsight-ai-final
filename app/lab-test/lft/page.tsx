import Link from "next/link";

export default function LFTPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-yellow-50 to-green-100 p-8">
      <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl p-8">

        <Link
          href="/lab-test"
          className="text-blue-600 hover:underline"
        >
          ← Back to Lab Tests
        </Link>

        <h1 className="text-4xl font-bold text-yellow-600 mt-6">
          🧬 Liver Function Test (LFT)
        </h1>

        <p className="text-gray-600 mt-4">
          LFT is a group of blood tests used to check liver health
          and assess liver enzymes and proteins.
        </p>

        <div className="grid md:grid-cols-2 gap-5 mt-8">

          <div className="bg-yellow-50 rounded-xl p-5">
            <h2 className="text-xl font-bold text-yellow-700">
              ALT (SGPT)
            </h2>
            <p className="mt-2 text-gray-600">
              Indicates liver cell injury and inflammation.
            </p>
          </div>

          <div className="bg-green-50 rounded-xl p-5">
            <h2 className="text-xl font-bold text-green-700">
              AST (SGOT)
            </h2>
            <p className="mt-2 text-gray-600">
              Helps evaluate liver and tissue damage.
            </p>
          </div>

          <div className="bg-blue-50 rounded-xl p-5">
            <h2 className="text-xl font-bold text-blue-700">
              Bilirubin
            </h2>
            <p className="mt-2 text-gray-600">
              Measures bile pigment levels related to liver function.
            </p>
          </div>

          <div className="bg-purple-50 rounded-xl p-5">
            <h2 className="text-xl font-bold text-purple-700">
              Albumin
            </h2>
            <p className="mt-2 text-gray-600">
              Shows the liver's ability to produce proteins.
            </p>
          </div>

        </div>

      </div>
    </main>
  );
}