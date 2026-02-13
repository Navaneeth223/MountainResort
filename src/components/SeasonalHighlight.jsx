import { motion } from 'framer-motion';
import { useSeasonalFog } from '../hooks/useSeasonalFog';

const SeasonalHighlight = () => {
    const { isFoggySeason } = useSeasonalFog();

    return (
        <section className="relative py-32 md:py-48 bg-primary overflow-hidden">
            {/* Background Animated Elements */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <motion.div
                    animate={{
                        x: ['-2%', '2%'],
                        y: ['-2%', '2%'],
                    }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        repeatType: "alternate",
                        ease: "easeInOut"
                    }}
                    className="absolute inset-0 opacity-20"
                >
                    <img
                        src="https://images.unsplash.com/photo-1502011485300-848e359286eb?auto=format&fit=crop&q=80&w=2000"
                        alt="Misty Mountain"
                        className="w-full h-full object-cover scale-110"
                    />
                </motion.div>

                {/* Fog Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-primary via-transparent to-primary z-10" />
                <motion.div
                    animate={{ x: ['-10%', '10%'] }}
                    transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
                    className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/fog.png')] opacity-10 mix-blend-screen scale-150 z-20"
                />
            </div>

            <div className="container mx-auto px-6 relative z-30">
                <div className="max-w-4xl mx-auto text-center space-y-12">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="space-y-6"
                    >
                        <span className="text-accent tracking-[0.5em] uppercase text-sm font-medium">Seasonal Magic</span>
                        <h2 className="text-4xl md:text-7xl font-serif text-background leading-tight">
                            {isFoggySeason ? "The Winter Mist Experience" : "Eternal Peak Serenity"}
                        </h2>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                        className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center text-left"
                    >
                        <div className="space-y-6">
                            <p className="text-background/70 text-lg leading-relaxed font-light">
                                From November to January, our peaks are embraced by a cinematic mist that transforms the landscape into a living masterpiece. This is a time of soft light, muted colors, and profound stillness.
                            </p>
                            <ul className="space-y-4 text-background/80 font-serif tracking-widest uppercase text-sm">
                                <li className="flex items-center gap-3">
                                    <span className="w-8 h-[1px] bg-accent" />
                                    Mood-matching lighting
                                </li>
                                <li className="flex items-center gap-3">
                                    <span className="w-8 h-[1px] bg-accent" />
                                    Private fog-view decks
                                </li>
                                <li className="flex items-center gap-3">
                                    <span className="w-8 h-[1px] bg-accent" />
                                    Cinematic mountain dining
                                </li>
                            </ul>
                        </div>

                        <div className="relative aspect-video overflow-hidden border border-white/10 group">
                            <img
                                src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=1000"
                                alt="Foggy Peak"
                                className="w-full h-full object-cover grayscale transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-primary/20 pointer-events-none" />
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.8 }}
                    >
                        <button className="premium-btn">Plan Your Winter Visit</button>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default SeasonalHighlight;
