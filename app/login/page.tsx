export default function LoginPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-blue-50 p-6">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">
        <h1 className="text-3xl font-bold text-center text-blue-700">
          🔐 Login
        </h1>

        <p className="text-center text-gray-500 mt-2">
          Welcome to LabInsight AI
        </p>

        <form className="mt-6 space-y-4">
          <input
            type="email"
            placeholder="Email Address"
            className="w-full border rounded-lg p-3"
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full border rounded-lg p-3"
          />

          <button
            type="button"
            className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700"
          >
            Login
          </button>
        </form>

        <p className="text-center text-sm mt-6 text-gray-500">
          LabInsight AI © 2026
        </p>
      </div>
    </main>
  );
}