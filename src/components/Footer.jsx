import React from 'react';

import { MapPin, Mail, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
    const styles = {
        footer: {
            backgroundColor: 'var(--color-primary-dark)',
            color: 'white',
            padding: '4rem 0 2rem',
            marginTop: 'auto',
        },
        grid: {
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '3rem',
            marginBottom: '3rem',
        },
        column: {
            display: 'flex',
            flexDirection: 'column',
            gap: '1.5rem',
        },
        heading: {
            color: 'var(--color-secondary)',
            fontSize: '1.25rem',
            marginBottom: '0.5rem',
            fontFamily: 'var(--font-heading)',
        },
        text: {
            color: '#E0E0E0',
            fontSize: '0.95rem',
            lineHeight: '1.8',
        },
        link: {
            color: '#E0E0E0',
            textDecoration: 'none',
            transition: 'color 0.3s ease',
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem',
        },
        social: {
            display: 'flex',
            gap: '1rem',
        },
        copyright: {
            borderTop: '1px solid rgba(255,255,255,0.1)',
            paddingTop: '2rem',
            textAlign: 'center',
            fontSize: '0.9rem',
            color: '#aaa',
        }
    };

    return (
        <footer style={styles.footer}>
            <div className="container">
                <div style={styles.grid}>
                    {/* About Column */}
                    <div style={styles.column}>
                        <h3 style={styles.heading}>Selin Ayas</h3>
                        <p style={styles.text}>
                            Bireysel, çift ve ebeveyn danışmanlığı<br />
                            Dijital iyi oluş seminer, eğitim ve atölyeleri
                        </p>
                        <div style={styles.social}>
                            <a href="https://www.instagram.com/drselinayas/" target="_blank" rel="noopener noreferrer" style={{ color: 'white' }}><Instagram size={20} /></a>
                            <a href="https://www.linkedin.com/in/selin-ayas-4461864a/" target="_blank" rel="noopener noreferrer" style={{ color: 'white' }}><Linkedin size={20} /></a>
                        </div>
                    </div>



                    {/* Contact Info */}
                    <div style={styles.column}>
                        <h3 style={styles.heading}>İletişim</h3>
                        <div style={styles.link}>
                            <MapPin size={18} color="var(--color-secondary)" />
                            <span>Ankara, Türkiye</span>
                        </div>

                        <a href="mailto:hello@selinayas.com" style={styles.link}>
                            <Mail size={18} color="var(--color-secondary)" />
                            <span>drselinayas@gmail.com</span>
                        </a>
                    </div>
                </div>

                <div style={styles.copyright}>
                    &copy; {new Date().getFullYear()} Selin Ayas. Tüm hakları saklıdır.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
