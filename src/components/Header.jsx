import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        setIsMobileMenuOpen(false);
    }, [location]);

    const navLinks = [
        { name: 'Anasayfa', path: '/' },
        { name: 'Hakkımda', path: '/about' },
        { name: 'Akademik', path: '/digital-wellbeing' },
        { name: 'S.S.S.', path: '/faq' },
        { name: 'İletişim', path: '/contact' },
    ];

    const styles = {
        header: {
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            zIndex: 1000,
            transition: 'all 0.3s ease',
            backgroundColor: isScrolled ? 'rgba(255, 255, 255, 0.95)' : 'transparent',
            backdropFilter: isScrolled ? 'blur(10px)' : 'none',
            boxShadow: isScrolled ? 'var(--shadow-sm)' : 'none',
            padding: isScrolled ? '1rem 0' : '1.5rem 0',
        },
        nav: {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
        },
        logo: {
            fontFamily: 'var(--font-heading)',
            fontSize: '1.5rem',
            fontWeight: 'bold',
            color: 'var(--color-primary-dark)',
        },
        desktopMenu: {
            display: 'flex',
            gap: '2rem',
        },
        link: {
            fontWeight: 500,
            color: 'var(--color-text)',
            position: 'relative',
        },
        activeLink: {
            color: 'var(--color-primary)',
        },
        mobileToggle: {
            display: 'none', // Hidden by default, shown in media query via CSS
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            color: 'var(--color-text)',
        },
        mobileMenu: {
            position: 'fixed',
            top: '0',
            right: '0',
            bottom: '0',
            width: '70%',
            backgroundColor: 'var(--color-surface)',
            boxShadow: 'var(--shadow-lg)',
            padding: '2rem',
            transform: isMobileMenuOpen ? 'translateX(0)' : 'translateX(100%)',
            transition: 'transform 0.3s ease-in-out',
            display: 'flex',
            flexDirection: 'column',
            gap: '2rem',
            zIndex: 1001,
        },
        overlay: {
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0,0,0,0.5)',
            opacity: isMobileMenuOpen ? 1 : 0,
            pointerEvents: isMobileMenuOpen ? 'auto' : 'none',
            transition: 'opacity 0.3s ease',
            zIndex: 1000,
        }
    };

    return (
        <>
            <header style={styles.header}>
                <div className="container" style={styles.nav}>
                    <Link to="/" style={styles.logo}>
                        Psk. Dan. Dr. Selin Ayas
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="desktop-nav" style={styles.desktopMenu}>
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                style={{
                                    ...styles.link,
                                    ...(location.pathname === link.path ? styles.activeLink : {}),
                                }}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <Link to="/booking" className="btn btn-primary" style={{ padding: '0.5rem 1.25rem', fontSize: '0.9rem' }}>
                            Randevu Al
                        </Link>
                    </nav>

                    {/* Mobile Toggle */}
                    <button
                        className="mobile-toggle"
                        onClick={() => setIsMobileMenuOpen(true)}
                        aria-label="Open menu"
                    >
                        <Menu size={24} />
                    </button>
                </div>
            </header>

            {/* Mobile Menu Overlay */}
            <div style={styles.overlay} onClick={() => setIsMobileMenuOpen(false)} />

            {/* Mobile Menu */}
            <div style={styles.mobileMenu}>
                <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                    <button onClick={() => setIsMobileMenuOpen(false)} style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
                        <X size={24} />
                    </button>
                </div>
                <nav style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.path}
                            style={{
                                ...styles.link,
                                fontSize: '1.25rem',
                                ...(location.pathname === link.path ? styles.activeLink : {}),
                            }}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Link to="/booking" className="btn btn-primary" style={{ textAlign: 'center' }}>
                        Randevu Al
                    </Link>
                </nav>
            </div>

            {/* CSS for responsive hiding */}
            <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-toggle { display: block !important; }
        }
        @media (min-width: 769px) {
          .mobile-toggle { display: none !important; }
        }
      `}</style>
        </>
    );
};

export default Header;
