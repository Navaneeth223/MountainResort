import { motion } from 'framer-motion';
import { Sunrise, Trees, Flame, Bath, Utensils, Map } from 'lucide-react';

const experiences = [
    {
        icon: Sunrise,
        title: "Sunrise View Point",
        description: "Witness the sun breaking through the mountain mist from our private observation deck."
    },
    {
        icon: Trees,
        title: "Nature Walks",
        description: "Guided tours through ancient pine forests and hidden alpine meadows."
    },
    {
        icon: Flame,
        title: "Campfire Nights",
        description: "Premium fireside gatherings with local storytelling and gourmet refreshments."
    },
    {
        icon: Bath,
        title: "Spa & Wellness",
        description: "Holistic treatments using forest-derived minerals and mountain spring water."
    },
    {
        icon: Utensils,
        title: "Local Food Experience",
        description: "Farm-to-table dining featuring seasonal ingredients from the surrounding hills."
    },
    {
        icon: Map,
        title: "Trekking & Adventure",
        description: "Challenging trails for all levels, leading to breathtaking cinematic vistas."
    }
];

const Experiences = () => {
    return (
        <section id="experiences" className="py-24 bg-background">
            <div className="container mx-auto px-6 text-center mb-16">
                <span className="text-accent tracking-[0.3em] uppercase text-sm font-medium block mb-4">Discovery</span>
                <h2 className="text-4xl md:text-6xl font-serif text-primary">Unforgettable Moments</h2>
            </div>

            <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {experiences.map((exp, index) => (
                    <motion.div
                        key={exp.title}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1, duration: 0.6 }}
                        className="p-10 border border-primary/5 hover:border-accent/20 transition-all duration-500 group bg-white/50 backdrop-blur-sm"
                    >
                        <div className="mb-6 inline-block p-4 bg-primary/5 text-primary group-hover:bg-primary group-hover:text-background transition-colors duration-500">
                            <exp.icon className="w-8 h-8" />
                        </div>
                        <h3 className="text-2xl font-serif text-primary mb-4 group-hover:text-accent transition-colors">{exp.title}</h3>
                        <p className="text-primary/60 font-light leading-relaxed">{exp.description}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Experiences;
