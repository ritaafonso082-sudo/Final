import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown } from 'lucide-react';
import { useTranslation, Trans } from 'react-i18next';
import BrandName from '../components/BrandName';

export default function FAQPage() {
  const { t } = useTranslation();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = t('faq.items', { returnObjects: true }) as Array<{ question: string; answerKey: string; answerText: string }>;

  useEffect(() => {
    // SEO Enhancements
    document.title = `${t('faq.seo.title')} | Real Builder Construction Academy`;
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", t('faq.seo.description'));
    }

    // JSON-LD Structured Data for FAQ
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": faqs.map(faq => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answerText
        }
      }))
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(structuredData);
    document.head.appendChild(script);

    return () => {
      // Cleanup
      document.title = "Real Builder";
      if (metaDescription) {
        metaDescription.setAttribute("content", "Real Builder Construction Academy");
      }
      document.head.removeChild(script);
    };
  }, [t, faqs]);

  return (
    <main className="pt-20 min-h-screen bg-[#0a0a0a]">
      <section className="py-20 md:py-32 relative">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight uppercase">
              {t('faq.title')} <span className="text-[#FFB800]">{t('faq.titleHighlight')}</span>
            </h1>
            <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto">
              {t('faq.subtitle')}
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className={`border ${openIndex === index ? 'border-[#FFB800]/50 bg-[#111315]' : 'border-white/10 bg-[#111315]/50'} rounded-2xl overflow-hidden transition-colors duration-300`}
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full flex items-center justify-between p-6 md:p-8 text-left focus:outline-none"
                >
                  <span className={`font-bold text-lg md:text-xl ${openIndex === index ? 'text-[#FFB800]' : 'text-white'}`}>
                    {faq.question}
                  </span>
                  <ChevronDown 
                    className={`text-gray-400 transition-transform duration-300 flex-shrink-0 ml-4 ${openIndex === index ? 'rotate-180 text-[#FFB800]' : ''}`} 
                    size={24} 
                  />
                </button>
                
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-6 md:px-8 pb-6 md:pb-8 text-gray-400 text-base md:text-lg leading-relaxed">
                        <Trans 
                          i18nKey={`faq.items.${index}.answer`}
                          components={{ 
                            brand: <BrandName />,
                            brandNoAcademy: <BrandName withAcademy={false} />
                          }}
                        />
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
