import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'The Resort', href: '/#about' },
        { name: 'Rooms', href: '/#rooms' },
        { name: 'Experiences', href: '/#experiences' },
        { name: 'Location', href: '/location' },
        { name: 'Gallery', href: '/#gallery' },
    ];

    const closeMobileMenu = () => setMobileMenuOpen(false);

    return (
        <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-700 ${isScrolled ? 'py-4 glass-nav shadow-2xl' : 'py-8 bg-transparent'}`}>
            <div className="container mx-auto px-6 flex justify-between items-center">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="flex items-center space-x-2"
                >
                    <Link to="/" onClick={closeMobileMenu} className="flex items-center space-x-2 outline-none">
                        <div className="w-10 h-10 border-2 border-accent flex items-center justify-center">
                            <span className="text-accent font-serif text-xl">M</span>
                        </div>
                        <span className={`text-2xl font-serif tracking-[0.2em] uppercase ${isScrolled ? 'text-primary' : 'text-white'}`}>
                            Mist Peaks
                        </span>
                    </Link>
                </motion.div>

                {/* Desktop Menu */}
                <div className="hidden lg:flex items-center space-x-12">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.href}
                            className={`text-sm tracking-[0.15em] uppercase font-medium hover:text-accent transition-colors ${isScrolled ? 'text-primary' : 'text-white/80 hover:text-white'}`}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <motion.button
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className={`premium-btn text-xs px-6 py-2 ${isScrolled ? '' : 'bg-white/10 text-white border border-white/20 hover:bg-accent'}`}
                    >
                        <Link to="/#booking">Book Now</Link>
                    </motion.button>
                </div>

                {/* Mobile Toggle */}
                <div className="lg:hidden">
                    <button
                        onClick={() => setMobileMenuOpen(true)}
                        className={`${isScrolled ? 'text-primary' : 'text-white'} p-2`}
                    >
                        <Menu size={28} />
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ x: '100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '100%' }}
                        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                        className="fixed inset-0 bg-primary z-[60] flex flex-col items-center justify-center space-y-8"
                    >
                        {/* Correct Close Button for Mobile Menu */}
                        <button
                            onClick={closeMobileMenu}
                            className="absolute top-8 right-8 text-background/60 hover:text-accent transition-colors p-2"
                        >
                            <X size={32} />
                        </button>

                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.href}
                                onClick={closeMobileMenu}
                                className="text-2xl font-serif text-background/80 hover:text-accent transition-colors tracking-widest uppercase"
                            >
                                {link.name}
                            </Link>
                        ))}
                        <Link
                            to="/#booking"
                            onClick={closeMobileMenu}
                            className="premium-btn text-center"
                        >
                            Book Your Stay
                        </Link>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Scroll Progress Indicator */}
            <motion.div
                className="absolute bottom-0 left-0 h-[2px] bg-accent z-50 transition-all duration-300"
                style={{ width: `${(isScrolled ? 100 : 0)}%` }}
            />
        </nav>
    );
};

export default Navbar;
