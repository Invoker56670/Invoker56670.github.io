import React, { useEffect } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import '../styles/spiderman.css';

const SpidermanDecoration = () => {
    const controls = useAnimation();
    const ref = React.useRef(null);
    const isInView = useInView(ref, { once: true }); // Trigger once when seen

    useEffect(() => {
        const sequence = async () => {
            if (isInView) {
                // 1. Grow Down (Web Shoot)
                await controls.start({
                    height: "15.62em",
                    transition: { duration: 0.8, ease: "easeOut", delay: 0.2 }
                });

                // 2. Start Rubber Band Loop
                controls.start({
                    height: ["15.62em", "13.8em", "15.62em"],
                    transition: {
                        duration: 2,
                        ease: "easeInOut",
                        repeat: Infinity,
                        repeatType: "loop"
                    }
                });
            }
        };
        sequence();
    }, [isInView, controls]);

    const containerRef = React.useRef(null);
    const headRef = React.useRef(null);

    useEffect(() => {
        const handleGlobalMouseMove = (e) => {
            if (!containerRef.current || !headRef.current) return;

            const headRect = headRef.current.getBoundingClientRect();

            // Exact center of the visual Spidey Head
            const updateCenter = {
                x: headRect.left + headRect.width / 2,
                y: headRect.top + headRect.height / 2
            };

            const dist = Math.hypot(e.clientX - updateCenter.x, e.clientY - updateCenter.y);
            const maxDist = 150; // Fixed large range (pixels) for smooth approach

            // Calculate proximity ratio (0 = far, 1 = center)
            const proximity = Math.max(0, Math.min(1, 1 - (dist / maxDist)));

            // Set Opacities based on thresholds
            // White: Starts fading in at 10% proximity
            const opacityWhite = proximity > 0.1 ? Math.min(1, (proximity - 0.1) * 2) : 0;

            // Yellow: Starts at 40%
            const opacityYellow = proximity > 0.3 ? Math.min(1, (proximity - 0.3) * 3) : 0;

            // Orange: Starts at 70%
            const opacityOrange = proximity > 0.5 ? Math.min(1, (proximity - 0.5) * 4) : 0;

            containerRef.current.style.setProperty('--opacity-white', opacityWhite);
            containerRef.current.style.setProperty('--opacity-yellow', opacityYellow);
            containerRef.current.style.setProperty('--opacity-orange', opacityOrange);
        };

        window.addEventListener('mousemove', handleGlobalMouseMove);
        return () => window.removeEventListener('mousemove', handleGlobalMouseMove);
    }, []);

    // Remove old handlers as we use global listener now
    const handleMouseLeave = () => { };

    return (
        <div
            ref={ref}
            style={{
                position: 'absolute',
                top: 90,
                right: -300,
                zIndex: 10,
                pointerEvents: 'none'
            }}
        >
            <div
                ref={containerRef}
                className="spidey-container"
                style={{ pointerEvents: 'auto', cursor: 'pointer' }}
            >
                <motion.div
                    className="spidey-rope spidey-center"
                    initial={{ height: 0 }}
                    animate={controls}
                >
                    <div className="spidey-legs spidey-center">
                        <div className="spidey-boot-l"></div>
                        <div className="spidey-boot-r"></div>
                    </div>
                    <div className="spidey-costume spidey-center">
                        {/* Proximity Rings - Separate from mask to fix z-index */}
                        <div className="spidey-ring-container">
                            <div className="spidey-ring white"></div>
                            <div className="spidey-ring yellow"></div>
                            <div className="spidey-ring orange"></div>
                        </div>
                        <div className="spidey-spider">
                            <div className="spidey-s1 spidey-center"></div>
                            <div className="spidey-s2 spidey-center"></div>
                            <div className="spidey-s3"></div>
                            <div className="spidey-s4"></div>
                        </div>
                        <div className="spidey-belt spidey-center"></div>
                        <div className="spidey-hand-r"></div>
                        <div className="spidey-hand-l"></div>
                        <div className="spidey-neck spidey-center"></div>
                        <div className="spidey-mask spidey-center" ref={headRef}>
                            <div className="spidey-eye-l"></div>
                            <div className="spidey-eye-r"></div>
                        </div>
                    </div>
                    {/* Tooltip - Sibling to costume for hover detection */}
                    <div className="spidey-tooltip-container">
                        <div className="spidey-tooltip">
                            Check out Bats—cool toys, zero chill!
                        </div>
                    </div>
                </motion.div>

            </div >
        </div >
    );
};

export default SpidermanDecoration;
