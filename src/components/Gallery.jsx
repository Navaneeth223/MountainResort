import { motion } from 'framer-motion';
import galleryImage4 from '../assets/photos/Gallery image 4.png';

const images = [
    "https://images.unsplash.com/photo-1518005020250-675f0f0fd174?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&q=80&w=800",
    galleryImage4,
    "https://images.unsplash.com/photo-1590490359683-658d3d23f972?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?auto=format&fit=crop&q=80&w=800",
];

const Gallery = () => {
    return (
        <section id="gallery" className="py-24 bg-background overflow-hidden px-4 md:px-0">
            <div className="container mx-auto px-6 text-center mb-16">
                <span className="text-accent tracking-[0.3em] uppercase text-sm font-medium block mb-4">Gallery</span>
                <h2 className="text-4xl md:text-6xl font-serif text-primary mb-8">Cinematic Perspectives</h2>
            </div>

            <div className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4 container mx-auto">
                {images.map((src, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: index * 0.1 }}
                        className="relative overflow-hidden cursor-pointer group"
                    >
                        <img
                            src={src}
                            alt={`Gallery image ${index + 1}`}
                            className="w-full h-auto grayscale-[30%] group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-all duration-500" />
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                            <span className="text-white border border-white/40 px-6 py-2 backdrop-blur-sm uppercase tracking-widest text-xs">View Full Screen</span>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Gallery;
