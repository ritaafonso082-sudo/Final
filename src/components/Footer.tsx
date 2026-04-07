import { Link } from 'react-router-dom';
import { Phone, MapPin } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import BrandName from './BrandName';

export default function Footer() {
  const { t } = useTranslation();
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <footer className="bg-[#0a0a0a] py-12 md:py-16 border-t border-white/10 text-gray-500 text-sm">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-12">
          {/* Brand */}
          <div className="flex flex-col items-start">
            <Link 
              to="/"
              onClick={scrollToTop}
              className="cursor-pointer mb-4"
            >
              <img 
                src="https://lh3.googleusercontent.com/d/1JcDlCqhCcECmb6aCnMHr_G_Qj-FeGBHn" 
                alt="Real Builder Logo" 
                className="h-20 w-auto object-contain"
                referrerPolicy="no-referrer"
              />
            </Link>
            <p className="text-gray-400 mt-2 max-w-xs">
              {t('footer.description')}
            </p>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col gap-4">
            <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-2">{t('footer.contact.title')}</h4>
            <div className="flex items-center gap-3">
              <Phone size={16} className="text-[#FFB800]" />
              <span className="text-gray-300">+351 939 996 924</span>
            </div>
            <div className="flex items-center gap-3">
              <MapPin size={16} className="text-[#FFB800]" />
              <span className="text-gray-300">Avenida Mateus Teixeira Azevedo 55, Tavira</span>
            </div>
          </div>

          {/* Links */}
          <div className="flex flex-col gap-4">
            <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-2">{t('footer.legal.title')}</h4>
            <Link to="/faq" onClick={scrollToTop} className="hover:text-white transition-colors w-fit">{t('footer.legal.faq')}</Link>
            <Link to="/terms" onClick={scrollToTop} className="hover:text-white transition-colors w-fit">{t('footer.legal.terms')}</Link>
            <Link to="/privacy" onClick={scrollToTop} className="hover:text-white transition-colors w-fit">{t('footer.legal.privacy')}</Link>
            <a href="https://livroreclamacoes.pt/inicio/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors w-fit">{t('footer.legal.complaints')}</a>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-start text-xs gap-2 md:gap-4">
          <p>© {new Date().getFullYear()} <BrandName withAcademy />. {t('footer.rights')}</p>
          <span className="hidden md:inline text-gray-700">•</span>
          <p>
            {t('footer.developedBy')} <a href="https://agencia-vela.com" target="_blank" rel="noopener noreferrer" className="text-[#FFB800] hover:underline">Agência Vela</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
