import React from 'react';


const About = () => {
    const styles = {

        credentialList: {
            marginTop: '2rem',
            paddingLeft: '1.5rem',
        },
        credentialItem: {
            marginBottom: '0.5rem',
            listStyleType: 'disc',
            color: 'var(--color-text)',
            fontSize: '1.1rem',
            fontFamily: 'var(--font-body)',
            fontWeight: '400',
            lineHeight: '1.6',
        },
        clearfix: {
            clear: 'both',
        }
    };

    return (
        <div className="animate-fade-in" style={{ paddingTop: '6rem' }}>
            <section className="section">
                <div className="container">


                    <h1 style={{ marginBottom: '1.5rem' }}>Hakkımda</h1>
                    <p style={{ marginBottom: '1rem', fontSize: '1.1rem' }}>
                        Psikoloji lisans eğitimimi 2013 yılında %100 burslu olarak Yeditepe Üniversitesi’nde onur derecesiyle tamamladım. Yüksek lisans ve doktora derecelerimi Orta Doğu Teknik Üniversitesi (ODTÜ) Psikolojik Danışmanlık ve Rehberlik programından aldım.
                    </p>
                    <p style={{ marginBottom: '1rem', fontSize: '1.1rem' }}>
                        Mesleki çalışmalarım, klinik uygulama ile akademik üretimin bir arada ilerlediği bir çizgide şekillendi. Farklı dönemlerde psikolog, araştırma asistanı, süpervizör, eğitimci ve mentor rollerinde görev aldım; bu süreçte hem saha deneyimi hem de araştırma temelli bir perspektif geliştirme imkânı buldum. ODTÜ, Twente Üniversitesi ve Acıbadem Üniversitesi başta olmak üzere, çeşitli üniversitelerin psikoloji ve psikolojik danışmanlık bölümlerinde dersler verdim.
                    </p>
                    <p style={{ marginBottom: '1rem', fontSize: '1.1rem' }}>
                        2017 yılından bu yana, 14 yaş ve üzeri bireylerle psikolojik danışmanlık çalışmaları yürütmekteyim. Türk Psikologlar Derneği ve Türk Psikolojik Danışmanlık ve Rehberlik Derneği üyesiyim.
                    </p>
                    <h2 style={{ marginTop: '2rem', marginBottom: '1rem' }}>Nasıl Çalışıyorum?</h2>
                    <p style={{ marginBottom: '1rem', fontSize: '1.1rem' }}>
                        Psikolojik danışmanlık çalışmalarım, bağlanma kuramı temelli duygu odaklı yaklaşım ve Adler’in bireysel psikoloji kuramından beslenmektedir. Bu çerçevede, danışanın yaşantısını yalnızca bireysel belirtiler üzerinden değil; ilişkisel ve gelişimsel bağlamı içinde ele almaya önem veririm.
                    </p>
                    <p style={{ marginBottom: '1rem', fontSize: '1.1rem' }}>
                        Psikolojik danışmanlık sürecinde amaç, önceden belirlenmiş bir yöntem uygulamak değil; danışanın başvuru nedenleri, ihtiyaçları ve sürecin seyri doğrultusunda şekillenen bir çalışma alanı oluşturmaktır. Kullanılan yaklaşım ve müdahaleler, bu çerçevede esnek biçimde belirlenir.
                    </p>
                    <p style={{ marginBottom: '1rem', fontSize: '1.1rem' }}>
                        Bu süreç, duygusal deneyimin anlaşılmasına, kişilerarası örüntülerin fark edilmesine ve bireyin kendisiyle ve çevresiyle kurduğu ilişkiye daha yakından bakabilmesine alan açan, güven ve süreklilik temelli bir çalışmadır.
                    </p>


                    <div style={{ marginTop: '2rem' }}>
                        <h2 style={{ marginBottom: '1rem' }}>Tamamladığım Bazı Mesleki Eğitimler</h2>
                        <ul style={styles.credentialList}>
                            <li style={styles.credentialItem}>Duygu Odaklı Birey, Çift ve Aile Terapileri Derneği tarafından verilen, 30 saatlik Duygu Odaklı Çift Terapisi – Temel Beceriler Eğitimini (Externship) ve 24 saatlik Duygu Odaklı Bireysel Terapi Eğitimi. Süpervizyonlar devam etmektedir.</li>
                            <li style={styles.credentialItem}>Bilişsel Davranışçı Psikoterapiler Derneği tarafından verilen 50 saatlik Bilişsel Davranışçı Terapi Kuramsal Eğitimini ve 30 saatlik Beceri Kazandırma ve Süpervizyon Eğitimi.</li>
                            <li style={styles.credentialItem}>Uluslararası Adler Yaz Okulu ve Enstitüleri Komitesi'ne (International Committee of Adlerian Summer Schools and Institutes; ICASSI) katılarak Bireysel Psikoloji alanında toplam 60 saat ders, çalışma grupları ve seminerleri.</li>
                            <li style={styles.credentialItem}>Çağdaş Drama Derneğini tarafından verilen toplam 320 saatlik Yaratıcı Drama Eğitmenliği Programı. Bitirme Projesi: "Öğretmen Adaylarının Engelliliğe Dair Farkındalığının Yaratıcı Drama Yöntemi ile Geliştirilmesi"</li>
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
