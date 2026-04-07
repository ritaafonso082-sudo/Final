import { useEffect } from 'react';
import { useTranslation, Trans } from 'react-i18next';
import BrandName from '../components/BrandName';

export default function PrivacyPage() {
  const { t, i18n } = useTranslation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const lastUpdated = new Date().toLocaleDateString(i18n.language === 'pt' ? 'pt-PT' : 'en-US');

  return (
    <div className="pt-24 pb-16 min-h-screen">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="text-4xl md:text-5xl font-black text-white mb-8 tracking-tight uppercase">{t('privacy.title')}</h1>
        
        <div className="prose prose-invert max-w-none text-gray-300 space-y-6">
          <p className="text-sm text-gray-400">{t('privacy.lastUpdated')}: {lastUpdated}</p>
          
          <section>
            <h2 className="text-2xl font-bold text-white mt-8 mb-4">1. {t('privacy.sections.intro.title')}</h2>
            <p>
              <Trans i18nKey="privacy.sections.intro.p1" components={{ brand: <BrandName withAcademy /> }} />
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mt-8 mb-4">2. {t('privacy.sections.controller.title')}</h2>
            <p>
              <Trans i18nKey="privacy.sections.controller.p1" components={{ brand: <BrandName withAcademy /> }} />
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mt-8 mb-4">3. {t('privacy.sections.dataCollect.title')}</h2>
            <p>
              {t('privacy.sections.dataCollect.p1')}
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li><strong>{t('privacy.sections.dataCollect.items.id.label')}:</strong> {t('privacy.sections.dataCollect.items.id.value')}</li>
              <li><strong>{t('privacy.sections.dataCollect.items.contact.label')}:</strong> {t('privacy.sections.dataCollect.items.contact.value')}</li>
              <li><strong>{t('privacy.sections.dataCollect.items.professional.label')}:</strong> {t('privacy.sections.dataCollect.items.professional.value')}</li>
              <li><strong>{t('privacy.sections.dataCollect.items.navigation.label')}:</strong> {t('privacy.sections.dataCollect.items.navigation.value')}</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mt-8 mb-4">4. {t('privacy.sections.purposes.title')}</h2>
            <p>
              {t('privacy.sections.purposes.p1')}
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li><strong>{t('privacy.sections.purposes.items.enrollment.label')}:</strong> {t('privacy.sections.purposes.items.enrollment.value')}</li>
              <li><strong>{t('privacy.sections.purposes.items.communication.label')}:</strong> {t('privacy.sections.purposes.items.communication.value')}</li>
              <li><strong>{t('privacy.sections.purposes.items.improvement.label')}:</strong> {t('privacy.sections.purposes.items.improvement.value')}</li>
              <li><strong>{t('privacy.sections.purposes.items.legal.label')}:</strong> {t('privacy.sections.purposes.items.legal.value')}</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mt-8 mb-4">5. {t('privacy.sections.sharing.title')}</h2>
            <p>
              {t('privacy.sections.sharing.p1')}
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>{t('privacy.sections.sharing.items.providers')}</li>
              <li>{t('privacy.sections.sharing.items.authorities')}</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mt-8 mb-4">6. {t('privacy.sections.retention.title')}</h2>
            <p>
              {t('privacy.sections.retention.p1')}
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mt-8 mb-4">7. {t('privacy.sections.rights.title')}</h2>
            <p>
              {t('privacy.sections.rights.p1')}
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>{t('privacy.sections.rights.items.access')}</li>
              <li>{t('privacy.sections.rights.items.rectification')}</li>
              <li>{t('privacy.sections.rights.items.erasure')}</li>
              <li>{t('privacy.sections.rights.items.restriction')}</li>
              <li>{t('privacy.sections.rights.items.object')}</li>
              <li>{t('privacy.sections.rights.items.portability')}</li>
              <li>{t('privacy.sections.rights.items.withdraw')}</li>
            </ul>
            <p className="mt-4">
              {t('privacy.sections.rights.p2')}
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mt-8 mb-4">8. {t('privacy.sections.security.title')}</h2>
            <p>
              {t('privacy.sections.security.p1')}
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mt-8 mb-4">9. {t('privacy.sections.changes.title')}</h2>
            <p>
              {t('privacy.sections.changes.p1')}
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
