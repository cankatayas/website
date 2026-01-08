import React, { useEffect } from 'react';

const Booking = () => {
    useEffect(() => {
        const head = document.querySelector('head');
        const script = document.createElement('script');
        script.setAttribute('src', 'https://assets.calendly.com/assets/external/widget.js');
        head.appendChild(script);

        return () => {
            // Cleanup script if needed, though usually fine to leave for single page apps
            // head.removeChild(script); 
        };
    }, []);

    return (
        <div className="animate-fade-in" style={{ paddingTop: '6rem', minHeight: '100vh' }}>
            <section className="section">
                <div className="container text-center">
                    <h1 style={{ marginBottom: '1rem' }}>Randevunuzu Planlayın</h1>
                    <p style={{ maxWidth: '600px', margin: '0 auto 3rem', fontSize: '1.1rem', color: 'var(--color-text-light)' }}>
                        Sizin için en uygun zamanı aşağıdan seçin. Doğrudan 50 dakikalık görüşme planlamak isterseniz uygun tarih ve saatler için bana e-mail ile ulaşabilirsiniz.
                    </p>

                    {/* Calendly Inline Widget */}
                    <div
                        className="calendly-inline-widget"
                        data-url="https://calendly.com/drselinayas/30min"
                        style={{ minWidth: '320px', height: '700px' }}
                    />
                </div>
            </section>
        </div>
    );
};

export default Booking;
