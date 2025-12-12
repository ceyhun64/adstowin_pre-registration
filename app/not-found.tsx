export default function NotFound() {
  return (
    <div className="flex h-screen flex-col items-center justify-center text-center p-6">
      <h1 className="text-5xl font-bold">404</h1>
      <p className="mt-4 text-lg text-gray-600">
        The page you are looking for could not be found.
      </p>

      <a
        href="/"
        className="mt-6 inline-block rounded bg-blue-600 px-5 py-2 text-white hover:bg-blue-700 transition"
      >
        Go Back Home
      </a>
    </div>
  );
}
