import { useState } from 'react';
import { Globe, ChevronDown } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

export default function LanguageSwitcher() {
  const [isOpen, setIsOpen] = useState(false);
  const { language, setLanguage } = useLanguage();

  const languages = [
    { code: 'en', label: 'EN', name: 'English' },
    { code: 'pt', label: 'PT', name: 'Português' },
    { code: 'hi', label: 'HI', name: 'हिन्दी' }
  ] as const;

  const currentLangLabel = languages.find(l => l.code === language)?.label || 'EN';

  const changeLanguage = (langCode: 'en' | 'pt' | 'hi') => {
    setLanguage(langCode);
    setIsOpen(false);
  };

  return (
    <div className="relative notranslate" translate="no">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1 text-gray-300 hover:text-white transition-colors text-xs font-semibold px-2 py-1 rounded-md"
      >
        <Globe size={16} />
        <span className="hidden sm:inline">{currentLangLabel}</span>
        <ChevronDown size={14} className={`transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute top-full right-0 mt-2 w-32 bg-[#111315] border border-white/10 rounded-md shadow-lg overflow-hidden z-50">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => changeLanguage(lang.code)}
              className={`w-full text-left px-4 py-2 text-xs font-semibold hover:bg-white/5 transition-colors notranslate ${
                language === lang.code ? 'text-[#FFB800]' : 'text-gray-300'
              }`}
              translate="no"
            >
              {lang.name}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
