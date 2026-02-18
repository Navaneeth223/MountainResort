import { motion } from 'framer-motion';
import luxuryMountainInterior from '../assets/photos/luxury mountain interior.png';

const About = () => {
    return (
        <section id="about" className="py-24 md:py-32 bg-background overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="space-y-8"
                    >
                        <div className="space-y-4">
                            <span className="text-accent tracking-[0.3em] uppercase text-sm font-medium block">Our Story</span>
                            <h2 className="text-4xl md:text-6xl text-primary font-serif leading-tight">
                                Where Silence <br /> Meets Sophistication
                            </h2>
                        </div>

                        <p className="text-primary/70 text-lg leading-relaxed font-light first-letter:text-5xl first-letter:font-serif first-letter:mr-3 first-letter:float-left first-letter:text-primary">
                            Nestled in the heart of the mist-shrouded peaks, Mist Peaks Resort is more than just a destination; it's a sanctuary for the soul. Founded on the principle of minimal intervention, our architecture breathes with the forest, offering an escape that is as luxurious as it is authentic.
                        </p>

                        <p className="text-primary/70 text-lg leading-relaxed font-light">
                            Here, time slows down. The crisp mountain air, the gentle whisper of pine needles, and the ethereal beauty of the seasonal fog create a canvas for memories that transcend the ordinary. Every detail, from the hand-carved stone hearths to the panoramic glass vistas, has been curated to reconnect you with nature without compromising on modern elegance.
                        </p>

                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: 0.5 }}
                            className="pt-4"
                        >
                            <button className="secondary-btn">Discover More</button>
                        </motion.div>
                    </motion.div>

                    {/* Visuals */}
                    <div className="relative">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
                            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.2, ease: "easeOut" }}
                            className="relative z-10 aspect-[4/5] overflow-hidden"
                        >
                            <img
                                src={luxuryMountainInterior}
                                alt="Luxury Mountain Interior"
                                className="w-full h-full object-cover grayscale-[20%] hover:scale-110 transition-transform duration-1000"
                            />
                        </motion.div>

                        {/* Decorative Elements */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 0.1, x: 0 }}
                            className="absolute -top-10 -right-10 text-[12rem] font-serif text-primary pointer-events-none select-none"
                        >
                            M
                        </motion.div>
                        <div className="absolute -bottom-6 -left-6 w-32 h-32 border border-accent/30 z-0" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
