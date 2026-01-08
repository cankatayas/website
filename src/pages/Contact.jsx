import React from 'react';
import planeImg from '../assets/images/ucak.png';


const Contact = () => {
    const styles = {
        grid: {
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
            gap: '4rem',
            marginTop: '3rem',
        },

        form: {
            backgroundColor: 'white',
            padding: '2rem',
            borderRadius: 'var(--radius-md)',
            boxShadow: 'var(--shadow-md)',
        },
        formGroup: {
            marginBottom: '1.5rem',
        },
        label: {
            display: 'block',
            marginBottom: '0.5rem',
            fontWeight: '600',
            fontSize: '0.9rem',
        },
        input: {
            width: '100%',
            padding: '0.75rem',
            borderRadius: 'var(--radius-sm)',
            border: '1px solid #ddd',
            fontFamily: 'var(--font-body)',
            fontSize: '1rem',
        },
        textarea: {
            width: '100%',
            padding: '0.75rem',
            borderRadius: 'var(--radius-sm)',
            border: '1px solid #ddd',
            fontFamily: 'var(--font-body)',
            fontSize: '1rem',
            minHeight: '150px',
            resize: 'vertical',
        },


    };

    return (
        <div className="animate-fade-in" style={{ paddingTop: '6rem' }}>
            <section className="section">
                <div className="container">
                    <div className="text-center" style={{ maxWidth: '800px', margin: '0 auto' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', justifyContent: 'center', marginBottom: '1rem' }}>
                            <img
                                src={planeImg}
                                alt=""
                                style={{
                                    height: '210px',
                                    width: 'auto',
                                    mixBlendMode: 'multiply'
                                }}
                            />
                            <h1 style={{ marginBottom: 0 }}>İletişime Geçin</h1>
                        </div>
                        <p>
                            Psikolojik danışmanlık sürecini planlamak veya seminer, eğitim ve atölye çalışmalarıyla ilgili talepleriniz için aşağıdaki iletişim formunu kullanabilirsiniz.
                        </p>
                    </div>



                    <div style={{ ...styles.grid, display: 'flex', justifyContent: 'center' }}>
                        {/* Contact Info */}


                        {/* Contact Form */}
                        <div style={{ ...styles.form, width: '100%', maxWidth: '600px' }}>
                            <form action="https://formsubmit.co/drselinayas@gmail.com" method="POST">
                                {/* FormSubmit Configuration */}
                                <input type="hidden" name="_subject" value="Yeni İletişim Formu Mesajı" />
                                <input type="hidden" name="_captcha" value="false" />
                                <input type="hidden" name="_template" value="table" />

                                <div style={styles.formGroup}>
                                    <label style={styles.label} htmlFor="name">Ad Soyad <span style={{ color: 'red' }}>*</span></label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        style={styles.input}
                                        required
                                    />
                                </div>

                                <div style={styles.formGroup}>
                                    <label style={styles.label} htmlFor="email">E-posta Adresi <span style={{ color: 'red' }}>*</span></label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        style={styles.input}
                                        required
                                    />
                                </div>

                                <div style={styles.formGroup}>
                                    <label style={styles.label} htmlFor="phone">Telefon Numarası (İsteğe Bağlı)</label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        style={styles.input}
                                    />
                                </div>

                                <div style={styles.formGroup}>
                                    <label style={styles.label} htmlFor="message">Mesajınız <span style={{ color: 'red' }}>*</span></label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        style={styles.textarea}
                                        placeholder="Kısaca ne konuda yardım aradığınızdan bahsedin..."
                                        required
                                    ></textarea>
                                </div>

                                <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
                                    Mesaj Gönder
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
