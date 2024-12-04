"use client";

const BackgroundWrapper = ({ children }) => {
  return (
    <div className="relative isolate overflow-hidden min-h-screen bg-white">
      {/* Full-Page Background Gradient */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 transform-gpu blur-3xl"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="absolute top-0 left-0 h-full w-full bg-gradient-to-tr from-[#6EE7B7] to-[#34D399] opacity-30"
        />
        {/* Second Gradient Layer for More Coverage */}
        <div
          style={{
            clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)",
          }}
          className="absolute top-0 left-0 h-full w-full bg-gradient-to-bl from-[#D1FAE5] to-[#A7F3D0] opacity-20"
        />
      </div>

      {/* Children (Page Content) */}
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default BackgroundWrapper;
