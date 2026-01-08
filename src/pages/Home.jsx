import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import bireyselImg from '../assets/images/bireysel.png';
import ciftImg from '../assets/images/cift.png';
import ebeveynImg from '../assets/images/ebeveyn.png';
import profileImg from '../assets/images/profile.jpg';

const Home = () => {
    const styles = {
        hero: {
            backgroundColor: '#F8F5F2', // Light warm grey - matches cards
            padding: '6rem 0',
            minHeight: '80vh',
            display: 'flex',
            alignItems: 'center',
        },
        heroContainer: {
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '4rem',
            alignItems: 'center',
        },
        heroContent: {
            maxWidth: '600px',
        },
        heroTitle: {
            fontSize: '3.5rem',
            marginBottom: '1.5rem',
            color: 'var(--color-primary-dark)',
            lineHeight: '1.1',
        },
        heroSubtitle: {
            fontSize: '1.25rem',
            color: 'var(--color-text-light)',
            marginBottom: '2.5rem',
            lineHeight: '1.8',
        },
        heroImageWrapper: {
            position: 'relative',
            maxWidth: '420px', // Limit image size
            borderRadius: 'var(--radius-lg)',
            overflow: 'hidden',
            boxShadow: 'var(--shadow-lg)',
            border: '8px solid white',
            transform: 'rotate(2deg)', // Aesthetic touch
            transition: 'transform 0.3s ease',
        },
        heroImage: {
            width: '100%',
            height: 'auto',
            display: 'block',
            filter: 'sepia(0.15) saturate(0.9) contrast(1.1)', // Aesthetic warm filter
            transition: 'filter 0.3s ease',
        },
        features: {
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2rem',
            marginTop: '4rem',
        },
        featureCard: {
            backgroundColor: '#F8F5F2', // Light warm grey instead of pure white
            padding: '2rem',
            borderRadius: 'var(--radius-lg)', // More rounded corners
            boxShadow: '0 10px 30px rgba(0, 0, 0, 0.15)', // Stronger shadow for more depth
            border: '2px solid #E6DCD5', // More prominent warm border
            textAlign: 'center',
            transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        },
        imageWrapper: {
            width: '100%',
            height: '200px',
            marginBottom: '1.5rem',
            overflow: 'hidden',
            borderRadius: 'var(--radius-md)',
        },
        featureImage: {
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'top', // Fix for images being cut off at the top
        },
        sectionTitle: {
            textAlign: 'center',
            marginBottom: '3rem',
        }
    };

    return (
        <div className="animate-fade-in">
            {/* Hero Section */}
            <section style={styles.hero}>
                <div className="container" style={styles.heroContainer}>
                    <div style={styles.heroContent}>
                        <h1 style={styles.heroTitle}></h1>
                        <p style={styles.heroSubtitle}>
                            Hayatta bazı dönemlerde ilişkiler karmaşıklaşabilir, duygular yoğunlaşabilir ve bildiğimiz baş etme yolları yeterli gelmeyebilir. Psikolojik danışmanlık süreci, bu yaşantıların acele edilmeden ele alındığı; kişinin kendini, ilişkilerini ve tekrar eden örüntülerini daha yakından fark edebileceği bir alan sunar. Bu çalışma, hazır çözümlerden çok, yaşantıyı anlamaya ve ona eşlik etmeye odaklanır.
                        </p>
                        <div>
                            <Link to="/about" className="btn btn-outline">
                                Nasıl Çalışıyorum?
                            </Link>
                        </div>
                    </div>
                    {/* Hero Image */}
                    <div style={styles.heroImageWrapper}>
                        <img src={profileImg} alt="Selin Ayas" style={styles.heroImage} />
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="section" style={{ backgroundColor: 'var(--color-bg)' }}>
                <div className="container">
                    <h2 style={styles.sectionTitle}>Çalışma Alanları</h2>
                    <div style={styles.features}>
                        <div style={styles.featureCard}>
                            <div style={styles.imageWrapper}>
                                <img src={bireyselImg} alt="Bireysel Danışmanlık" style={styles.featureImage} />
                            </div>
                            <h3>Bireysel Danışmanlık</h3>
                            <p>Bireyin kendini ve zorluklarını daha iyi tanıması, zorlayıcı duygularla temas edebilmesi ve kazandığı iç görülerin hayata geçirilmesi odaktadır.</p>
                        </div>
                        <div style={styles.featureCard}>
                            <div style={styles.imageWrapper}>
                                <img src={ciftImg} alt="Çift Danışmanlığı" style={styles.featureImage} />
                            </div>
                            <h3>Çift Danışmanlığı</h3>
                            <p>Romantik ilişkilerdeki zorlanmaların ele alındığı görüşmelerden oluşur. Çiftlerin birbiriyle kurdukları bağ ve iletişimin güçlendirilmesi hedeflenir.</p>
                        </div>
                        <div style={styles.featureCard}>
                            <div style={styles.imageWrapper}>
                                <img src={ebeveynImg} alt="Ebeveyn Danışmanlığı" style={styles.featureImage} />
                            </div>
                            <h3>Ebeveyn Danışmanlığı</h3>
                            <p>Her yaştan çocuğunuzun internet kullanımı ile ilgili endişeleriniz, bu alandaki çatışmalar ve çözümleri ile ilgili danışmanlık alabilirsiniz.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="section" style={{ backgroundColor: 'var(--color-secondary)', color: 'var(--color-primary-dark)' }}>
                <div className="container text-center">
                    <h2 style={{ marginBottom: '1.5rem' }}>Başlamadan önce...</h2>
                    <p style={{ maxWidth: '600px', margin: '0 auto 2.5rem', fontSize: '1.1rem' }}>
                        Psikolojik danışmanlık sürecine başlamadan önce, sürecin yapısı ve karşılıklı beklentiler üzerine kısa bir ön görüşme yapılabilir.
                        Bu görüşme, sürecin sizin için uygunluğunu değerlendirmeye yöneliktir.
                        Ön görüşmeler yaklaşık 15 dakika sürmektedir ve ücretlendirilmez.
                    </p>
                    <Link to="/contact" className="btn btn-primary" style={{ backgroundColor: 'var(--color-primary-dark)', color: 'white' }}>
                        İletişime Geçin <ArrowRight size={16} style={{ marginLeft: '0.5rem', verticalAlign: 'middle' }} />
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default Home;
