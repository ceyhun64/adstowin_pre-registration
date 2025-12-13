export default function NotFound() {
  return (
    <div className="flex h-screen flex-col items-center justify-center text-center p-6 relative overflow-hidden">
      {/* BACKGROUND AURA */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#1a1205] via-[#0d0904] to-black" />
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-orange-500/30 blur-[140px] rounded-full" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-amber-500/25 blur-[120px] rounded-full" />

      {/* CONTENT */}
      <div className="relative z-10">
        <h1 className="text-7xl font-extrabold bg-gradient-to-r from-amber-400 via-orange-400 to-red-400 bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(255,140,0,0.4)]">
          404
        </h1>

        <p className="mt-4 text-lg text-gray-300 max-w-sm mx-auto font-medium">
          The page you are looking for does not exist or has been moved.
        </p>

        <a
          href="/"
          className="mt-8 inline-block rounded-xl px-8 py-3 text-white font-semibold text-base
          bg-gradient-to-r from-amber-500 via-orange-500 to-red-500
          shadow-lg shadow-orange-500/30
          hover:shadow-orange-400/40 hover:scale-[1.03]
          active:scale-[0.98]
          transition-transform duration-300"
        >
          Go Back Home
        </a>
      </div>
    </div>
  );
}
