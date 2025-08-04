import React from "react";

const BackgroundPattern = () => {
    return <div
                style={{
                    backgroundImage: "url('/pattern3.svg')",
                    // backgroundRepeat: 'repeat',
                    // backgroundSize: '50px',
                    opacity: 0.05,
                    pointerEvents: 'none',
                    position: 'absolute',
                    inset: 0,
                }}
            />
}

export default BackgroundPattern;