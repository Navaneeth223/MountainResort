import { motion } from 'framer-motion';
import luxuryMountainInterior from '../assets/photos/luxury mountain interior.png';
import forestViewCottage from '../assets/photos/forest view Cottage.png';

const rooms = [
    {
        title: "Mist View Deluxe Room",
        description: "Elegant minimal design with floor-to-ceiling windows facing the misty pine valleys.",
        price: "$450 / night",
        image: "https://images.unsplash.com/photo-1590490359683-658d3d23f972?auto=format&fit=crop&q=80&w=1000",
    },
    {
        title: "Mountain Panorama Suite",
        description: "Spacious luxury suite offering 270-degree views of the rugged mountain peaks.",
        price: "$750 / night",
        image: luxuryMountainInterior,
    },
    {
        title: "Forest View Cottage",
        description: "A private retreat nestled deep within the forest, featuring a natural stone fireplace.",
        price: "$600 / night",
        image: forestViewCottage,
    },
    {
        title: "Honeymoon Luxury Suite",
        description: "The ultimate romantic escape with a private heated outdoor pool and mist-view balcony.",
        price: "$1,200 / night",
        image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80&w=1000",
    },
];

const Rooms = () => {
    return (
        <section id="rooms" className="py-24 bg-primary text-background">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
                    <div className="space-y-4 max-w-2xl">
                        <span className="text-accent tracking-[0.3em] uppercase text-sm font-medium">Accommodations</span>
                        <h2 className="text-4xl md:text-6xl font-serif">Sanctuaries of Peace</h2>
                    </div>
                    <p className="text-background/60 max-w-md font-light">
                        Each room is designed to be a private sanctuary, blending organic materials with state-of-the-art luxury.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
                    {rooms.map((room, index) => (
                        <motion.div
                            key={room.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.8 }}
                            className="group cursor-pointer"
                        >
                            <div className="relative overflow-hidden aspect-[16/10] mb-6">
                                <img
                                    src={room.image}
                                    alt={room.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale-[10%] group-hover:grayscale-0"
                                />
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />
                                <motion.button
                                    className="absolute bottom-6 right-6 premium-btn text-xs py-2 px-6 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500"
                                >
                                    Book Now
                                </motion.button>
                            </div>
                            <div className="flex justify-between items-start">
                                <div className="space-y-2">
                                    <h3 className="text-2xl font-serif group-hover:text-accent transition-colors">{room.title}</h3>
                                    <p className="text-background/50 font-light max-w-sm line-clamp-2">{room.description}</p>
                                </div>
                                <span className="text-accent font-serif text-lg">{room.price}</span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Rooms;
