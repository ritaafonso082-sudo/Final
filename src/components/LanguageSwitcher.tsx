import { useState, useEffect } from 'react';
import { Globe, ChevronDown } from 'lucide-react';

export default function LanguageSwitcher() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState('EN');

  const languages = [
    { code: 'en', label: 'EN', name: 'English' },
    { code: 'pt', label: 'PT', name: 'Português' },
    { code: 'hi', label: 'HI', name: 'हिन्दी' }
  ];

  useEffect(() => {
    // Check if there's a saved language in cookies
    const match = document.cookie.match(/(^|;) ?googtrans=([^;]*)(;|$)/);
    if (match) {
      const langCode = match[2].split('/')[2];
      if (langCode === 'pt') setCurrentLang('PT');
      else if (langCode === 'hi') setCurrentLang('HI');
      else setCurrentLang('EN');
    }
  }, []);

  const changeLanguage = (langCode: string, label: string) => {
    setCurrentLang(label);
    setIsOpen(false);
    
    if (langCode === 'en') {
      // To revert to English, clear cookies and reload
      document.cookie = `googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
      document.cookie = `googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=${window.location.hostname};`;
      window.location.reload();
      return;
    }

    // Trigger Google Translate dropdown for other languages
    const triggerTranslate = () => {
      const select = document.querySelector('.goog-te-combo') as HTMLSelectElement;
      if (select) {
        select.value = langCode;
        select.dispatchEvent(new Event('change'));
      }
    };

    triggerTranslate();
    // Try again in case the widget hasn't fully loaded
    setTimeout(triggerTranslate, 500);
    setTimeout(triggerTranslate, 1000);
  };

  return (
    <div className="relative">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1 text-gray-300 hover:text-white transition-colors text-xs font-semibold px-2 py-1 rounded-md"
      >
        <Globe size={16} />
        <span className="hidden sm:inline">{currentLang}</span>
        <ChevronDown size={14} className={`transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute top-full right-0 mt-2 w-32 bg-[#111315] border border-white/10 rounded-md shadow-lg overflow-hidden z-50">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => changeLanguage(lang.code, lang.label)}
              className={`w-full text-left px-4 py-2 text-xs font-semibold hover:bg-white/5 transition-colors ${
                currentLang === lang.label ? 'text-[#FFB800]' : 'text-gray-300'
              }`}
            >
              {lang.name}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
