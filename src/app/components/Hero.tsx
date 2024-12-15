export default function HeroSection() {
  return (
    <section className="flex flex-col-reverse md:flex-row items-center justify-between h-screen px-8 bg-[#043873]">
      {/* Left Content */}
      <div className="flex-1 md:pr-8 text-center md:text-left">
        <h1 className="text-3xl md:text-4xl font-bold text-white">
          Get More Done With Whitespace
        </h1>
        <p className="mt-4 text-base md:text-lg text-white">
          Project management software that enables your teams to collaborate, plan, analyze, and manage everyday tasks.
        </p>
        <button className="flex items-center justify-center px-6 py-3 mt-6 text-white bg-[#4F9CF9] rounded-lg hover:bg-[#3A8BE0]">
          <span>Try Whitespace free</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-5 h-5 ml-2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>
        </button>
      </div>

      {/* Right Box */}
      <div
        className="w-full md:w-[824px] h-[300px] md:h-[549px] bg-[#C4DEFD] flex-shrink-0 mb-8 md:mb-0"
      ></div>
    </section>
  );
}
