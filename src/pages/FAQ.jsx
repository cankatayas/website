import React, { useState } from 'react';
import { Plus } from 'lucide-react';

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(0);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const faqs = [
        {
            question: "Psikolojik danışmanlık nedir?",
            answer: "Psikolojik danışmanlık, alan uzmanı ve danışan arasında işbirliğine dayalı bir profesyonel bir yardım ilişkisidir. Bireyler yaşamlarının farklı evrelerinde fiziksel, duygusal, sosyal, iş veya okul yaşantılarını kapsayan problemli durumlar deneyimleyebilirler. Psikolojik danışmanlık süreci temelde, bireylerin daha etkin bir biçimde yaşayabilmeleri için sorunlarını yönetebilmelerini sağlamayı, başa çıkma ve kriz yönetme becerileri kazandırmayı, kendiliklerine dair bir iç-görü kazandırmayı, çevresiyle uyumlu ve sağlıklı bir iletişim halinde olmak için kullanılmayan veya yetersiz kullanılan kaynakları daha etkin bir biçimde geliştirmelerine yardım etmeyi amaçlar."
        },
        {
            question: "Kimler psikolojik destek alabilir?",
            answer: "Psikolojik destek almak için travmatik yaşantılara, psikiyatrik tanılar şart değildir. Her birey, iyi idare edemediğini düşündüğü durumlar, ilişkiler, duygular ve düşünceler nedeniyle psikolojik destek alabilir. Örneğin, yaşamda istenilen kadar etkin olamama, zorlayıcı durumlarla daha iyi baş edebilmek, yaşamdan ve ilişkilerden aldıkları doyumu artırmak, kendi değer ve ideallerine göre yaşayamama, kendilerini motive edecek hedefler bulmada zorlanma, ilişki, kariyer gibi alanlarda daha yapıcı adımlar atmak, hayatın çeşitli alanlarında kritik kararlar vermek gibi sebeplerle de ihtiyaç duyulursa psikolojik destek alınabilir. Bunun yanı sıra, dönemsel olarak ortaya çıkan duygusal ihtiyaçlar ve zorlanmalar (evlilik, boşanma süreci, göç, yas süreci vb.) için de destek alınabilir."
        },
        {
            question: "İlk görüşmede neler yapılır?",
            answer: "İlk görüşmede temel hedef sizi ve destek almak istediğiniz problemi etraflıca tanıyabilmektir. Dolayısıyla hem ele almak istediğiniz konuları genel çerçevede paylaşmanız hem de kendinizden ve hayatınızın farklı alanlarından bahsetmeniz istenir. İlk görüşmenin sonunda sürecin nasıl ilerleyeceğine dair bir genel bir yol haritası çizilebilir. Eğer bir yönlendirme söz konusu olacaksa (örneğin, psikiyatrist desteği veya farklı bir alan uzmanına yönlendirme), ilk görüşmede bu da değerlendirilir ve sizinle paylaşılır. Kişiyi ve problemi iyice tanıma bir görüşmeden fazla sürebilse de, bu temelin iyi atılması hedeflerin doğru belirlenmesi ve ilişkinin kurulabilmesi için çok değerlidir. Bu süreçte siz anlatırken terapistiniz de size dikkatlice dinleyerek, yeri geldiğinde durdurup sorular sorarak veya bağlantılar kurarak size en doğru şekilde anlamaya ve sizin bakış açınızdan dünyaya bakabilmeyi öğrenmeye çalışır."
        },
        {
            question: "Görüşme sıklığı ve süresi nedir?",
            answer: "En ideali haftalık düzende 50 dakikalık görüşmeleri olabildiğince aksatmadan sürdürmektir. Haftalık düzenin çeşitli sebeplerle mümkün olmaması durumunda iki haftada bir görüşme olacak şekilde de randevulaşılabilir. Sürecin verimliliği için daha seyrek veya düzensiz aralıklarla görüşmek önerilmez. Ancak seans sıklığı zaman içerisinde birlikte şekillendirilebilir. Örneğin, haftalık düzende başlayan bir danışanın görüşmeleri bir süre sonra iki haftada bir, daha sonrasında ise ayda bir devam edecek şekilde düzenlenebilir. Bu duruma danışan ve uzmanın birlikte karar vermesi önemlidir."
        },
        {
            question: "Süreç ne kadar sürer?",
            answer: "Sürecin uzunluğu ve verimliliği birbirinden bağımsız iki farklı konu olsa da bireyler ne kadar sürede çözüme, rahatlığa ulaşacaklarını merak etmesi oldukça anlaşılırdır. Bu süreyi net olarak vermek yanıltıcı olacaktır ancak sürecin gidişatını etkileyen çeşitli etkenlerden bahsedebiliriz. Bunların en temelleri arasında destek almak istenen konu/konular, danışanın yaşam olayları, sosyal destek sistemi, süreçte nelerin hedeflendiği ve ne sıklıkla görüşmelere devam edilebildiği olarak örneklendirilebilir. Süreç içerisinde hedeflerin danışan ve uzman tarafından beraber belirlenerek yol planının beraber çizildiği ve ara ara değerlendirmelerin yapıldığı bir süreç, ne kadar devam edileceğinin anlaşılması açısından oldukça sağlıklı olacaktır. Bu doğrultuda hedeflere ulaşıldığı hissedildiğinde görüşme sıklığı azaltılarak takip görüşmeleri planlanabilir veya tamamen sonlandırılabilir."
        },
        {
            question: "Hangi yöntemle çalışıyorsunuz?",
            answer: "Psikolojik danışmanlık çalışmalarım, bağlanma kuramı temelli duygu odaklı yaklaşım ve Adler’in bireysel psikoloji kuramından beslenmektedir. Aslında hangi yöntemin kullanıldığı varılan sonuç bakımından anlamlı bir farklılık yaratmamaktadır. Tüm ekollerin farklı, ancak büyük ölçüde kesişen yollardan danışanı hedeflerine ulaştırmak için bir araç olduğunu biliyoruz. Bu konuda uzmanlığını iyi değerlendirmek terapistin sorumluluğundadır. Danışanın ekol farkını hissedebileceği yerler terapistin görüşmelerde odaklandığı alanlar, kullanılan egzersizler veya danışan ile kurduğu ilişki olabilir. Odak bazı durumlarda geçmişte yoğunlaşırken, bazen düşünceler, bazen duygular ve bedensel ihtiyaçlar ön plandadır. Ancak bu, sadece yoğunlaşılan alanı ifade edebilir, diğer alanların terapinin dışında kaldığı anlamına gelmez. Her ekolde hepsi bir bütün içinde yer almaktadır."
        },
        {
            question: "Hangi konularda destek veriyorsunuz?",
            answer: "Psikolojik ve sosyal yaşantıları birbirinden keskin sınırlarla ayırmak oldukça zordur. Bu sebeple konu başlıkları belirlemek her zaman çok anlamlı olmayabilir ve başka konularla çalışılamayacağı anlamına gelmez. Yine de genel bir çerçeve çizmek gerekirse, bireysel danışmanlık süreci kapsamında, yakın ilişkilere dair zorluklar, yaşamsal süreçlere uyum (göç, evlilik, boşanma, sağlık sorunları, engel durumunun oluşması), kaygı yönetimi, erteleme davranışı, kariyer alanında zorluklar, öz-değer ve çekingenlik gibi konularda yoğun olarak destek vermekteyim. Bunun yanı sıra çift danışmanlığı ise, birlikte yaşama, evliliğe hazırlık, evlilik, ebeveynliğe hazırlık ve ayrılık gibi süreçleri kapsayabilir. Son olarak, internet kullanımı ve teknoloji ile sağlıklı ilişki kurma ve bu alandaki çatışmaları yönetebilme üzerine kurulu çalışmalarım ve tecrübem doğrultusunda, ebeveyn danışmanlığı da vermekteyim."
        },
        {
            question: "Nasıl randevu alabilirim?",
            answer: "İletişim formu doldurarak veya doğrudan drselinayas@gmail.com adresinden bana ulaşabilirsiniz. Size en geç 24 saat içinde geri dönüş sağlayacağım. Randevu almadan önce sormak istedikleriniz varsa 15 dakikalık bir ön-görüşme için randevulaşabiliriz."
        }
    ];

    const styles = {
        container: {
            paddingTop: '8rem',
            paddingBottom: '6rem',
            backgroundColor: '#F8F5F2',
            minHeight: '100vh',
        },
        innerContainer: {
            maxWidth: '900px',
            margin: '0 auto',
        },
        header: {
            textAlign: 'center',
            marginBottom: '4rem',
        },
        title: {
            fontSize: '3rem',
            marginBottom: '1rem',
            color: 'var(--color-primary-dark)',
        },
        subtitle: {
            fontSize: '1.05rem',
            color: 'var(--color-text-light)',
            maxWidth: '700px',
            margin: '0 auto',
        },
        faqList: {
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
        },
        faqItem: {
            backgroundColor: 'white',
            borderRadius: 'var(--radius-lg)',
            overflow: 'hidden',
            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)',
            transition: 'all 0.3s ease',
            border: '1px solid transparent',
        },
        faqItemOpen: {
            boxShadow: '0 8px 24px rgba(0, 0, 0, 0.12)',
            border: '1px solid var(--color-primary)',
        },
        questionButton: {
            width: '100%',
            padding: '1.5rem 2rem',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            textAlign: 'left',
            transition: 'background-color 0.2s ease',
        },
        question: {
            fontSize: '1.15rem',
            fontWeight: '600',
            color: 'var(--color-primary-dark)',
            margin: 0,
            flex: 1,
            paddingRight: '1rem',
        },
        iconWrapper: {
            width: '32px',
            height: '32px',
            borderRadius: '50%',
            backgroundColor: 'var(--color-primary)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0,
            transition: 'transform 0.3s ease',
        },
        iconWrapperOpen: {
            transform: 'rotate(180deg)',
            backgroundColor: 'var(--color-primary-dark)',
        },
        answerWrapper: {
            maxHeight: 0,
            overflow: 'hidden',
            transition: 'max-height 0.4s ease, padding 0.4s ease',
        },
        answerWrapperOpen: {
            maxHeight: '1000px',
            padding: '0 2rem 2rem 2rem',
        },
        answer: {
            lineHeight: '1.8',
            color: 'var(--color-text)',
            fontSize: '1rem',
        }
    };

    return (
        <div className="animate-fade-in" style={styles.container}>
            <div className="container">
                <div style={styles.innerContainer}>
                    <div style={styles.header}>
                        <h1 style={styles.title}>Sıkça Sorulan Sorular</h1>
                        <p style={styles.subtitle}>
                            Psikolojik danışmanlık süreci ile ilgili merak ettiğiniz bazı soruları ve cevapları aşağıda bulabilirsiniz.
                        </p>
                    </div>

                    <div style={styles.faqList}>
                        {faqs.map((faq, index) => {
                            const isOpen = openIndex === index;
                            return (
                                <div
                                    key={index}
                                    style={{
                                        ...styles.faqItem,
                                        ...(isOpen ? styles.faqItemOpen : {})
                                    }}
                                >
                                    <button
                                        onClick={() => toggleFAQ(index)}
                                        style={styles.questionButton}
                                        onMouseEnter={(e) => !isOpen && (e.currentTarget.style.backgroundColor = '#F8F5F2')}
                                        onMouseLeave={(e) => !isOpen && (e.currentTarget.style.backgroundColor = 'transparent')}
                                    >
                                        <h3 style={styles.question}>{faq.question}</h3>
                                        <div style={{
                                            ...styles.iconWrapper,
                                            ...(isOpen ? styles.iconWrapperOpen : {})
                                        }}>
                                            <Plus size={20} color="white" />
                                        </div>
                                    </button>
                                    <div style={{
                                        ...styles.answerWrapper,
                                        ...(isOpen ? styles.answerWrapperOpen : {})
                                    }}>
                                        <p style={styles.answer}>{faq.answer}</p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FAQ;
