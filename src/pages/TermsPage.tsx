import { useEffect } from 'react';
import { useTranslation, Trans } from 'react-i18next';
import BrandName from '../components/BrandName';

export default function TermsPage() {
  const { t, i18n } = useTranslation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const lastUpdated = new Date().toLocaleDateString(i18n.language === 'pt' ? 'pt-PT' : 'en-US');

  return (
    <div className="pt-24 pb-16 min-h-screen">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="text-4xl md:text-5xl font-black text-white mb-8 tracking-tight uppercase">{t('terms.title')}</h1>
        
        <div className="prose prose-invert max-w-none text-gray-300 space-y-6">
          <p className="text-sm text-gray-400">{t('terms.lastUpdated')}: {lastUpdated}</p>
          
          <section>
            <h2 className="text-2xl font-bold text-white mt-8 mb-4">1. {t('terms.sections.intro.title')}</h2>
            <p>
              <Trans i18nKey="terms.sections.intro.p1" components={{ brand: <BrandName withAcademy /> }} />
            </p>
            <p>
              {t('terms.sections.intro.p2')}
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mt-8 mb-4">2. {t('terms.sections.services.title')}</h2>
            <p>
              <Trans i18nKey="terms.sections.services.p1" components={{ brand: <BrandName withAcademy /> }} />
            </p>
            <p>
              {t('terms.sections.services.p2')}
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mt-8 mb-4">3. {t('terms.sections.payments.title')}</h2>
            <p>
              {t('terms.sections.payments.p1')}
            </p>
            <p>
              {t('terms.sections.payments.p2')}
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mt-8 mb-4">4. {t('terms.sections.intellectual.title')}</h2>
            <p>
              <Trans i18nKey="terms.sections.intellectual.p1" components={{ brand: <BrandName withAcademy /> }} />
            </p>
            <p>
              {t('terms.sections.intellectual.p2')}
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mt-8 mb-4">5. {t('terms.sections.data.title')}</h2>
            <p>
              {t('terms.sections.data.p1')}
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mt-8 mb-4">6. {t('terms.sections.liability.title')}</h2>
            <p>
              <Trans i18nKey="terms.sections.liability.p1" components={{ brand: <BrandName withAcademy /> }} />
            </p>
            <p>
              <Trans i18nKey="terms.sections.liability.p2" components={{ brand: <BrandName withAcademy /> }} />
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mt-8 mb-4">7. {t('terms.sections.changes.title')}</h2>
            <p>
              {t('terms.sections.changes.p1')}
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mt-8 mb-4">8. {t('terms.sections.law.title')}</h2>
            <p>
              {t('terms.sections.law.p1')}
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mt-8 mb-4">9. {t('terms.sections.contacts.title')}</h2>
            <p>
              {t('terms.sections.contacts.p1')}
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>{t('terms.sections.contacts.phone')}: +351 939 996 924</li>
              <li>{t('terms.sections.contacts.address')}: Avenida Mateus Teixeira Azevedo 55, Tavira, Portugal</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}
