import react from "react";

const BackgroundPatternWrapper = ({ children }) => (
  <div className="relative min-h-screen">
    <div
      style={{
        backgroundImage: "url('/pattern3.svg')",
        backgroundRepeat: 'repeat',
        backgroundSize: '100px',
        opacity: 0.3, // for testing, make it more visible
        pointerEvents: 'none',
        position: 'absolute',
        inset: 0,
        zIndex: 0,
      }}
    />
    <div className="relative z-10">{children}</div>
  </div>
);

export default BackgroundPatternWrapper