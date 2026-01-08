import React from 'react';
import digitalImg from '../assets/images/dijital.png';

const DigitalWellBeing = () => {
    const styles = {
        credentialList: {
            marginTop: '2rem',
            paddingLeft: '1.5rem',
        },
        credentialItem: {
            marginBottom: '0.5rem',
            color: 'var(--color-text)',
        },
        imageWrapper: {
            width: '300px',
            float: 'right',
            marginLeft: '2rem',
            marginTop: '0', // Reset margin
            marginBottom: '1rem',
            borderRadius: 'var(--radius-md)',
            overflow: 'hidden',
            boxShadow: 'var(--shadow-lg)',
        },
        profileImage: {
            width: '100%',
            height: 'auto',
            display: 'block',
        },
        clearfix: {
            clear: 'both',
        }
    };

    return (
        <div className="animate-fade-in" style={{ paddingTop: '6rem' }}>
            <section className="section">
                <div className="container">

                    <h1 style={{ marginBottom: '1.5rem' }}>Akademik Çalışmalarım</h1>

                    <div style={{ marginTop: '3rem' }}>
                        <div style={styles.imageWrapper}>
                            <img src={digitalImg} alt="Dijital İyi Oluş" style={styles.profileImage} />
                        </div>
                        <p style={{ marginBottom: '1rem' }}>
                            Dijital teknolojiler, gündelik yaşamın ayrılmaz bir parçası hâline gelirken, bireylerin psikolojik iyi oluşu ve ilişkileri üzerinde de belirleyici bir rol oynamaktadır. Dijital iyi oluş, teknolojiyi dışlamak değil; bireyin ihtiyaçlarını, sınırlarını ve ilişkisel bağlamını gözeterek dijital dünyayla daha dengeli bir ilişki kurabilmesini ifade eder.
                        </p>
                        <p style={{ marginBottom: '1.5rem' }}>
                            Bugüne kadar yaptığım akademik çalışmalar, dijital ortamların duygusal deneyimler, ilişkisel örüntüler ve gelişimsel süreçler üzerindeki etkilerini ele almaktadır. Akademik üretimin yalnızca akademik çevrelerle sınırlı kalmaması; klinik uygulama, ebeveynlik pratikleri ve eğitim ortamlarında karşılık bulmasını önemsiyorum. Özellikle dijital çağda ebeveynlik odağında, okul ve aile temelli önleyici ve güçlendirici yaklaşımlara zemin oluşturmayı hedeflemekteyim.Bu konu ile ilgili seminer, eğitim ve atölyeler için benimle iletişime geçebilirsiniz.
                        </p>

                        <h3 style={{ marginTop: '2rem', marginBottom: '1rem' }}>Kitap Bölümü</h3>
                        <ul style={styles.credentialList}>
                            <li style={styles.credentialItem}>
                                Ayas, S. (2025). Parenting in the digital society. İçinde Research handbook on cyberpsychology. M.F. Wright (Ed). (pp. 332-354). Edward Elgar Publishing.
                            </li>
                            <li style={styles.credentialItem}>
                                Ayas, S. (2021). Çocuk Ve Ergenle Psikolojik Danışmanın Dünya'da Ve Türkiye'de Tarihi Ve Kültürel Geçmişi. İçinde (B. Serim-Yıldız ve S. B. Özgülük-Üçok Eds.) Çocuk ve Ergenlerle Psikolojik Danışma Teknikleri. Nobel Yayıncılık.
                            </li>
                        </ul>

                        <h3 style={{ marginTop: '2rem', marginBottom: '1rem' }}>Konferans Bildirileri ve Posterler</h3>
                        <ul style={styles.credentialList}>
                            <li style={styles.credentialItem}>
                                Capa-Aydın, Y., Erer, S., Uzuntiryaki-Kondakci, E., Vardal-Ocaklı, Ş., Gezer, E. T., Mısır, S. (Eylül, 2021). University and department belonging of students in a newly established university: A case study. European Conference on Educational Research – ECER 2021.
                            </li>
                            <li style={styles.credentialItem}>
                                Mısır, S., Demir, A. (Temmuz, 2021). Defining the problem: Parental concerns beyond screen time. BPS Cyberpsychology Section Virtual Conference.
                            </li>
                            <li style={styles.credentialItem}>
                                Mısır, S. Çapa – Aydın, Y. (Kasım, 2018). Çevrimiçi iletişimde disinhibisyon etkisi: Pilot çalışmanın bulguları. 20. Ulusal Psikoloji Kongresi, Ankara, Türkiye.
                            </li>
                            <li style={styles.credentialItem}>
                                Mısır, S., Mercan, M. N., ve Koydemir, S. (Haziran, 2018). More tweets more wellbeing? A one week microblogging intervention study. 9. Avrupa Pozitif Psikoloji Konferansı, Budapeşte, Macaristan.
                            </li>
                            <li style={styles.credentialItem}>
                                Mısır, S., Koydemir, S., Durhan, S. (Haziran, 2016). Unraveling the relationship between religion and life satisfaction: A cross-cultural study. 8. Avrupa Pozitif Psikoloji Konferansı, Angers, Fransa.
                            </li>
                            <li style={styles.credentialItem}>
                                Mısır, S., Ceylan, M., Doğan, H., Altan-Atalay, A. (Nisan 2014). Belirsizliğe tahammülsüzlük ve fonksiyonel olmayan tutumların depresyon ve anksiyete arasındaki ayırt edici rolü. 18. Ulusal Psikoloji Kongresi, Bursa, Türkiye.
                            </li>
                            <li style={styles.credentialItem}>
                                Koydemir, S., ve Mısır, S. (Eylül, 2013). Bağımsız benlik ve duyguları ifade mutluluğu teşvik ediyor. 12. Ulusal PDR Kongresi, İstanbul, Türkiye.
                            </li>
                            <li style={styles.credentialItem}>
                                Koydemir, S., Schütz, A., & Mısır, S. (Temmuz, 2013). Happy and satisfied: Basic psychological needs, the Big Five and well-being. 13. Avrupa Psikoloji Kongresi, Stockholm, İsveç.
                            </li>
                        </ul>
                    </div>
                    <div style={styles.clearfix}></div>
                </div>
            </section>
        </div>
    );
};

export default DigitalWellBeing;
