export default function AlreadyRegistered() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-2xl shadow-lg text-center max-w-md">
        <h2 className="text-2xl font-semibold text-gray-800">
          You are already registered!
        </h2>
        <p className="text-gray-600 mt-2">
          It looks like you have already completed the registration process.
        </p>
        <button
          className="mt-4 px-6 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition"
          onClick={() => (window.location.href = "/")}
        >
          Go to Homepage
        </button>
      </div>
    </div>
  );
}
