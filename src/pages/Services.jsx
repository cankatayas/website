import React from 'react';
import { Check } from 'lucide-react';
import { Link } from 'react-router-dom';

const Services = () => {
    const services = [
        {
            title: "Bireysel Danışmanlık",
            description: "Bireyin kendini ve zorluklarını daha iyi tanıması, zorlayıcı duygularla temas edebilmesi ve kazandığı iç görülerin hayata geçirilmesi odaklıdır.",
            duration: "50 dk",
            price: "2500 ₺"
        },
        {
            title: "Çift Danışmanlığı",
            description: "Romantik ilişkilerdeki zorlanmaların ele alındığı görüşmelerden oluşur. Çiftlerin birbiriyle kurdukları bağ ve iletişimin güçlendirilmesi hedeflenir.",
            duration: "60 dk",
            price: "3000 ₺"
        },
        {
            title: "Ebeveyn Danışmanlığı",
            description: "Her yaştan çocuğunuzun internet kullanımı ile ilgili endişeleriniz, bu alandaki çatışmalar ve çözümleri ile ilgili danışmanlık.",
            duration: "50 dk",
            price: "2500 ₺"
        }
    ];

    const styles = {
        grid: {
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2rem',
            marginTop: '3rem',
        },
        card: {
            backgroundColor: 'white',
            borderRadius: 'var(--radius-md)',
            padding: '2.5rem',
            boxShadow: 'var(--shadow-md)',
            borderTop: '4px solid var(--color-primary)',
            display: 'flex',
            flexDirection: 'column',
        },
        cardTitle: {
            fontSize: '1.5rem',
            marginBottom: '1rem',
            color: 'var(--color-primary-dark)',
        },
        price: {
            fontSize: '1.25rem',
            fontWeight: 'bold',
            color: 'var(--color-accent)',
            marginBottom: '1.5rem',
        },
        description: {
            marginBottom: '2rem',
            flexGrow: 1,
        },
        insuranceSection: {
            marginTop: '4rem',
            backgroundColor: 'var(--color-bg)',
            padding: '3rem',
            borderRadius: 'var(--radius-md)',
        }
    };

    return (
        <div className="animate-fade-in" style={{ paddingTop: '6rem' }}>
            <section className="section">
                <div className="container">
                    <div className="text-center" style={{ maxWidth: '800px', margin: '0 auto' }}>
                        <h1>Hizmetler ve Ücretler</h1>
                        <p className="text-primary">
                            Ruh sağlığınıza yatırım yapmak, atabileceğiniz en önemli adımlardan biridir.
                        </p>
                    </div>

                    <div style={styles.grid}>
                        {services.map((service, index) => (
                            <div key={index} style={styles.card}>
                                <h3 style={styles.cardTitle}>{service.title}</h3>
                                <div style={styles.price}>{service.price} <span style={{ fontSize: '0.9rem', color: '#666', fontWeight: 'normal' }}>/ {service.duration}</span></div>
                                <p style={styles.description}>{service.description}</p>
                                <Link to="/booking" className="btn btn-outline" style={{ textAlign: 'center' }}>
                                    Randevu Al
                                </Link>
                            </div>
                        ))}
                    </div>

                    <div style={styles.insuranceSection}>
                        <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem' }}>Ödeme ve Sigorta</h2>
                        <p style={{ marginBottom: '1.5rem' }}>
                            Ödemeler genellikle seans öncesinde veya sonrasında alınır. Özel sağlık sigortanız varsa, geri ödeme alabilmeniz için gerekli faturayı (SMM) düzenleyebilirim. Lütfen sigorta şirketinizle kapsamınızı kontrol ediniz.
                        </p>
                        <h4 style={{ marginBottom: '1rem' }}>Kabul Edilen Ödeme Yöntemleri:</h4>
                        <ul style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
                            <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><Check size={16} color="var(--color-primary)" /> Kredi/Banka Kartı</li>
                            <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><Check size={16} color="var(--color-primary)" /> Havale / EFT</li>
                            <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><Check size={16} color="var(--color-primary)" /> Nakit</li>
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Services;
