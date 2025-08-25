export const FloatingCallButton = (): JSX.Element => {
  return (
    <>
      <style>{`
        @keyframes subtle-bounce { 0%, 100% { transform: translateY(0) } 50% { transform: translateY(-12px) } }
        @media (prefers-reduced-motion: reduce) { .subtle-bounce { animation: none !important } }
      `}</style>
      <a
        href="tel:+9660509331315"
        aria-label="Call +9660509331315"
        className="fixed z-50 bottom-6 left-6 w-14 h-14 rounded-full bg-[#f9a51a] text-white shadow-xl flex items-center justify-center hover:scale-110 active:scale-95 transition-transform duration-200 subtle-bounce"
        style={{ animation: "subtle-bounce 1.5s ease-in-out infinite" }}
      >
        <img
          src="/call-arab.png"
          alt="Call"
          className="w-12 h-12 object-contain"
        />
        <span className="sr-only">Call +9660509331315</span>
      </a>
    </>
  );
};


