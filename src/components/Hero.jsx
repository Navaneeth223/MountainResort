import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { useSeasonalFog } from '../hooks/useSeasonalFog';

const Hero = () => {
    const { isFoggySeason } = useSeasonalFog();

    return (
        <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
            {/* Background Video/Image Container */}
            <div className="absolute inset-0 z-0">
                <motion.div
                    animate={{
                        scale: [1, 1.1],
                    }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        repeatType: "alternate",
                        ease: "easeInOut"
                    }}
                    className="relative h-full w-full"
                >
                    {/* Main Hero Image - Using a temporary high-quality nature placeholder for now while AI renders */}
                    <img
                        src={isFoggySeason
                            ? "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=2070"
                            : "https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&q=80&w=2070"}
                        alt="Mountain Lodge"
                        className="h-full w-full object-cover"
                    />
                    <div className={`absolute inset-0 bg-black/30 transition-opacity duration-1000 ${isFoggySeason ? 'opacity-50' : 'opacity-20'}`} />
                </motion.div>
            </div>

            {/* Seasonal Fog Overlay Animation */}
            {isFoggySeason && (
                <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden">
                    <motion.div
                        animate={{
                            x: ['-5%', '5%'],
                            y: ['0%', '2%'],
                        }}
                        transition={{
                            duration: 30,
                            repeat: Infinity,
                            repeatType: "alternate",
                            ease: "linear"
                        }}
                        className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/fog.png')] opacity-30 mix-blend-screen scale-150"
                    />
                </div>
            )}

            {/* Content */}
            <div className="relative z-20 container mx-auto px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                    className="space-y-6"
                >
                    <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5, duration: 1 }}
                        className="text-accent tracking-[0.4em] uppercase text-sm md:text-base font-medium"
                    >
                        Luxury Mountain Retreat
                    </motion.span>

                    <h1 className="text-5xl md:text-8xl lg:text-9xl text-white font-serif leading-tight tracking-tight">
                        {isFoggySeason ? "Escape Into\nThe Mist" : "Nature In Its\nPurest Form"}
                    </h1>

                    <p className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed">
                        Experience the harmony of luxury and wilderness in a setting where every moment feels like a cinematic dream.
                    </p>

                    <div className="flex flex-col md:flex-row items-center justify-center gap-6 pt-8">
                        <button
                            onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
                            className="premium-btn group flex items-center gap-2"
                        >
                            Book Your Stay
                            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </button>
                        <button
                            onClick={() => document.getElementById('rooms')?.scrollIntoView({ behavior: 'smooth' })}
                            className="px-8 py-3 bg-white/10 backdrop-blur-md border border-white/20 text-white font-serif text-lg tracking-widest hover:bg-white/20 transition-all uppercase"
                        >
                            Explore Rooms
                        </button>
                    </div>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2, duration: 1 }}
                className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 z-20"
            >
                <span className="text-white/40 text-[10px] uppercase tracking-[0.3em] vertical-text">Scroll</span>
                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                >
                    <ChevronDown className="text-white/60" />
                </motion.div>
            </motion.div>
        </section>
    );
};

const ChevronRight = ({ className }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
    >
        <path d="m9 18 6-6-6-6" />
    </svg>
);

export default Hero;
