import { motion } from 'framer-motion';
import { Calendar, Users, Home, ArrowRight } from 'lucide-react';

const Booking = () => {
    return (
        <section id="booking" className="py-24 md:py-32 relative overflow-hidden flex items-center justify-center min-h-[80vh]">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <img
                    src="https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&q=80&w=2000"
                    alt="Resort View"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-primary/80 backdrop-blur-[4px]" />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                    className="max-w-6xl mx-auto bg-white/5 backdrop-blur-2xl border border-white/10 p-8 md:p-16 lg:p-20 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)]"
                >
                    <div className="text-center mb-16 space-y-6">
                        <span className="text-accent tracking-[0.4em] uppercase text-sm font-medium block">Reservations</span>
                        <h2 className="text-5xl md:text-7xl lg:text-8xl font-serif text-background">Begin Your Journey</h2>
                        <p className="text-background/60 max-w-2xl mx-auto font-light text-lg md:text-xl leading-relaxed">
                            Secure your sanctuary in the mist. Select your preferred sanctuary and dates to begin your escape.
                        </p>
                    </div>

                    <form className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                        <div className="space-y-4">
                            <label className="text-accent/60 text-[10px] uppercase tracking-[0.2em] font-bold flex items-center gap-2">
                                <Calendar className="w-3 h-3" /> Check In
                            </label>
                            <input
                                type="date"
                                className="w-full bg-white/5 border-b border-white/20 text-white p-4 focus:outline-none focus:border-accent transition-colors appearance-none text-lg"
                            />
                        </div>

                        <div className="space-y-4">
                            <label className="text-accent/60 text-[10px] uppercase tracking-[0.2em] font-bold flex items-center gap-2">
                                <Calendar className="w-3 h-3" /> Check Out
                            </label>
                            <input
                                type="date"
                                className="w-full bg-white/5 border-b border-white/20 text-white p-4 focus:outline-none focus:border-accent transition-colors appearance-none text-lg"
                            />
                        </div>

                        <div className="space-y-4">
                            <label className="text-accent/60 text-[10px] uppercase tracking-[0.2em] font-bold flex items-center gap-2">
                                <Home className="w-3 h-3" /> Room Type
                            </label>
                            <select className="w-full bg-white/5 border-b border-white/20 text-white p-4 focus:outline-none focus:border-accent transition-colors text-lg cursor-pointer">
                                <option className="bg-primary text-white">Mist View Deluxe</option>
                                <option className="bg-primary text-white">Panorama Suite</option>
                                <option className="bg-primary text-white">Forest Cottage</option>
                            </select>
                        </div>

                        <div className="space-y-4">
                            <label className="text-accent/60 text-[10px] uppercase tracking-[0.2em] font-bold flex items-center gap-2">
                                <Users className="w-3 h-3" /> Guests
                            </label>
                            <select className="w-full bg-white/5 border-b border-white/20 text-white p-4 focus:outline-none focus:border-accent transition-colors text-lg cursor-pointer">
                                <option className="bg-primary text-white font-bold">1 Guest</option>
                                <option className="bg-primary text-white font-bold">2 Guests</option>
                                <option className="bg-primary text-white font-bold">3+ Guests</option>
                            </select>
                        </div>

                        <div className="lg:col-span-4 mt-12">
                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="w-full premium-btn flex items-center justify-center gap-4 py-8 text-xl group shadow-2xl"
                            >
                                Reserve Your Stay
                                <ArrowRight className="w-6 h-6 group-hover:translate-x-3 transition-transform duration-500" />
                            </motion.button>
                        </div>
                    </form>
                </motion.div>
            </div>
        </section>
    );
};

export default Booking;
