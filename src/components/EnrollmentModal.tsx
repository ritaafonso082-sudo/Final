import { X, GraduationCap, Upload, HelpCircle, Clock, Mail } from 'lucide-react';
import React, { useState, useEffect } from 'react';

interface EnrollmentModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function EnrollmentModal({ isOpen, onClose }: EnrollmentModalProps) {
  const [mounted, setMounted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    formData.append('course', selectedCourse);
    
    try {
      await fetch('https://formspree.io/f/xwvwwaoa', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });
      setIsSubmitting(false);
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        onClose();
      }, 3000);
    } catch (error) {
      console.error('Error submitting form:', error);
      setIsSubmitting(false);
      alert('There was an error submitting the form. Please try again.');
    }
  };

  useEffect(() => {
    setMounted(true);
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!mounted || !isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      ></div>

      {/* Modal Content */}
      <div className="relative w-full max-w-2xl bg-[#15181b] rounded-2xl shadow-2xl border border-white/10 max-h-[90vh] flex flex-col overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        
        {/* Header (Fixed) */}
        <div className="p-6 border-b border-white/10 flex-shrink-0">
          <button 
            onClick={onClose}
            className="absolute top-6 right-6 text-gray-400 hover:text-white transition-colors"
          >
            <X size={20} />
          </button>
          
          <h2 className="text-2xl font-bold text-white mb-2">Enroll in REAL BUILDER Academy</h2>
          <p className="text-gray-400 text-sm mb-6">Fill out the form below to start your journey as a certified builder.</p>
          
          <div className="flex justify-between items-center mb-2">
            <span className="text-gray-400 text-xs font-semibold">Form completion</span>
            <span className="text-[#FFB800] text-xs font-bold">0%</span>
          </div>
          <div className="w-full h-1.5 bg-[#111315] rounded-full overflow-hidden">
            <div className="h-full bg-[#FFB800] w-0 rounded-full"></div>
          </div>
        </div>

        {/* Scrollable Body */}
        <form onSubmit={handleSubmit} className="p-6 overflow-y-auto flex-1 scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent space-y-8">
          
          {isSubmitted ? (
            <div className="text-center py-12">
              <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <GraduationCap className="text-green-500" size={40} />
              </div>
              <h3 className="text-2xl font-black text-white mb-4 tracking-tight uppercase">
                Application Received!
              </h3>
              <p className="text-gray-400">
                Thank you for your interest. We will notify you when enrollment opens.
              </p>
            </div>
          ) : (
            <>
              {/* PERSONAL INFORMATION */}
              <section>
                <h3 className="text-[#FFB800] text-xs font-bold tracking-widest uppercase mb-4">PERSONAL INFORMATION</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-white text-sm font-semibold mb-2">First Name *</label>
                    <input type="text" name="firstName" required placeholder="João" className="w-full bg-[#111315] border border-white/10 rounded-lg p-3 text-white focus:border-[#FFB800] outline-none transition-colors text-sm" />
                  </div>
                  <div>
                    <label className="block text-white text-sm font-semibold mb-2">Last Name *</label>
                    <input type="text" name="lastName" required placeholder="Silva" className="w-full bg-[#111315] border border-white/10 rounded-lg p-3 text-white focus:border-[#FFB800] outline-none transition-colors text-sm" />
                  </div>
                  <div className="sm:col-span-2">
                    <label className="block text-white text-sm font-semibold mb-2">Email *</label>
                    <input type="email" name="email" required placeholder="joao@email.com" className="w-full bg-[#111315] border border-white/10 rounded-lg p-3 text-white focus:border-[#FFB800] outline-none transition-colors text-sm" />
                  </div>
                  <div>
                    <label className="block text-white text-sm font-semibold mb-2">Phone *</label>
                    <input type="tel" name="phone" required placeholder="+351 900 000 000" className="w-full bg-[#111315] border border-white/10 rounded-lg p-3 text-white focus:border-[#FFB800] outline-none transition-colors text-sm" />
                  </div>
                  <div>
                    <label className="block text-white text-sm font-semibold mb-2">City *</label>
                    <input type="text" name="city" required placeholder="Lisboa" className="w-full bg-[#111315] border border-white/10 rounded-lg p-3 text-white focus:border-[#FFB800] outline-none transition-colors text-sm" />
                  </div>
                </div>
              </section>

              {/* SELECT YOUR COURSE */}
              <section>
                <h3 className="text-[#FFB800] text-xs font-bold tracking-widest uppercase mb-2">SELECT YOUR COURSE *</h3>
                <p className="text-gray-400 text-xs mb-4">Choose which upcoming course you'd like to enroll in</p>
                
                <div className="space-y-3">
                  {/* Course Option 1 */}
                  <div onClick={() => setSelectedCourse('pladur')} className={`bg-[#111315] border ${selectedCourse === 'pladur' ? 'border-[#FFB800]' : 'border-white/10'} rounded-xl p-4 flex gap-4 cursor-pointer hover:border-[#FFB800]/50 transition-colors group`}>
                    <div className="w-10 h-10 rounded-lg bg-[#1a1d21] border border-white/5 flex items-center justify-center flex-shrink-0 group-hover:border-[#FFB800]/30">
                      <GraduationCap size={20} className="text-[#FFB800]" />
                    </div>
                    <div>
                      <h4 className="text-white font-bold text-sm">Pladur & Drywall Fundamentals</h4>
                      <p className="text-gray-400 text-xs mb-2">Pladur / Drywall</p>
                      <div className="flex items-center gap-2 text-xs">
                        <span className="text-[#FFB800] font-bold">15 spots left</span>
                        <span className="text-gray-500">• PT/EN</span>
                      </div>
                    </div>
                  </div>

                  {/* Course Option 2 */}
                  <div onClick={() => setSelectedCourse('tiles')} className={`bg-[#111315] border ${selectedCourse === 'tiles' ? 'border-[#FFB800]' : 'border-white/10'} rounded-xl p-4 flex gap-4 cursor-pointer hover:border-[#FFB800]/50 transition-colors group`}>
                    <div className="w-10 h-10 rounded-lg bg-[#1a1d21] border border-white/5 flex items-center justify-center flex-shrink-0 group-hover:border-[#FFB800]/30">
                      <GraduationCap size={20} className="text-[#FFB800]" />
                    </div>
                    <div>
                      <h4 className="text-white font-bold text-sm">Professional Tile Installation</h4>
                      <p className="text-gray-400 text-xs mb-2">Tiles & Tiling</p>
                      <div className="flex items-center gap-2 text-xs">
                        <span className="text-[#FFB800] font-bold">15 spots left</span>
                        <span className="text-gray-500">• PT/EN</span>
                      </div>
                    </div>
                  </div>

                  {/* Course Option 3 */}
                  <div onClick={() => setSelectedCourse('heating')} className={`bg-[#111315] border ${selectedCourse === 'heating' ? 'border-[#FFB800]' : 'border-white/10'} rounded-xl p-4 flex gap-4 cursor-pointer hover:border-[#FFB800]/50 transition-colors group`}>
                    <div className="w-10 h-10 rounded-lg bg-[#1a1d21] border border-white/5 flex items-center justify-center flex-shrink-0 group-hover:border-[#FFB800]/30">
                      <GraduationCap size={20} className="text-[#FFB800]" />
                    </div>
                    <div>
                      <h4 className="text-white font-bold text-sm">Underfloor Heating Installation</h4>
                      <p className="text-gray-400 text-xs mb-2">Floor Heating</p>
                      <div className="flex items-center gap-2 text-xs">
                        <span className="text-[#FFB800] font-bold">15 spots left</span>
                        <span className="text-gray-500">• PT/EN</span>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* SKILLS ASSESSMENT */}
              <section>
                <h3 className="text-[#FFB800] text-xs font-bold tracking-widest uppercase mb-4">SKILLS ASSESSMENT</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-white text-sm font-semibold mb-2">Reading Skills *</label>
                    <select name="readingSkills" required defaultValue="" className="w-full bg-[#111315] border border-white/10 rounded-lg p-3 text-white focus:border-[#FFB800] outline-none transition-colors text-sm appearance-none cursor-pointer">
                      <option value="" disabled>Select your reading level</option>
                      <option value="basic">Basic</option>
                      <option value="intermediate">Intermediate</option>
                      <option value="advanced">Advanced</option>
                    </select>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-white text-sm font-semibold mb-2">Portuguese Level *</label>
                      <select name="portugueseLevel" required defaultValue="" className="w-full bg-[#111315] border border-white/10 rounded-lg p-3 text-white focus:border-[#FFB800] outline-none transition-colors text-sm appearance-none cursor-pointer">
                        <option value="" disabled>Select level</option>
                        <option value="none">None</option>
                        <option value="basic">Basic (A1-A2)</option>
                        <option value="intermediate">Intermediate (B1-B2)</option>
                        <option value="fluent">Fluent (C1-C2)</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-white text-sm font-semibold mb-2">English Level *</label>
                      <select name="englishLevel" required defaultValue="" className="w-full bg-[#111315] border border-white/10 rounded-lg p-3 text-white focus:border-[#FFB800] outline-none transition-colors text-sm appearance-none cursor-pointer">
                        <option value="" disabled>Select level</option>
                        <option value="none">None</option>
                        <option value="basic">Basic (A1-A2)</option>
                        <option value="intermediate">Intermediate (B1-B2)</option>
                        <option value="fluent">Fluent (C1-C2)</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="block text-white text-sm font-semibold mb-2">Digital Skills *</label>
                    <select name="digitalSkills" required defaultValue="" className="w-full bg-[#111315] border border-white/10 rounded-lg p-3 text-white focus:border-[#FFB800] outline-none transition-colors text-sm appearance-none cursor-pointer">
                      <option value="" disabled>Select your digital skills level</option>
                      <option value="basic">Basic (Can use smartphone apps)</option>
                      <option value="intermediate">Intermediate (Can use email, basic software)</option>
                      <option value="advanced">Advanced (Comfortable with new software)</option>
                    </select>
                  </div>
                </div>
              </section>

              {/* CONSTRUCTION EXPERIENCE */}
              <section>
                <h3 className="text-[#FFB800] text-xs font-bold tracking-widest uppercase mb-4">CONSTRUCTION EXPERIENCE</h3>
                
                <div className="mb-6">
                  <label className="flex items-start gap-3 cursor-pointer group">
                    <input type="checkbox" name="experience" className="accent-[#FFB800] w-5 h-5 mt-0.5" />
                    <div>
                      <span className="text-white text-sm font-bold block mb-1">I have 1+ year of construction experience</span>
                      <span className="text-gray-400 text-xs">Prior experience in construction, renovation, or related trades</span>
                    </div>
                  </label>
                </div>

                <div>
                  <label className="block text-white text-sm font-semibold mb-2">Upload Experience Documentation (optional)</label>
                  <div className="relative">
                    <input type="file" name="documentation" accept=".pdf,.doc,.docx,.jpg,.png" className="absolute inset-0 w-full h-full opacity-0 cursor-pointer" />
                    <div className="border border-dashed border-white/20 rounded-xl p-8 text-center hover:border-[#FFB800]/50 transition-colors cursor-pointer bg-[#111315]/50">
                      <Upload size={20} className="text-gray-400 mx-auto mb-3" />
                      <p className="text-gray-400 text-sm">Click to upload CV, certificates, or work references</p>
                    </div>
                  </div>
                  <p className="text-gray-500 text-[10px] mt-2">PDF, DOC, DOCX, JPG, or PNG (max 10MB)</p>
                </div>
              </section>

              {/* NEED ASSISTANCE? */}
              <section>
                <div className="flex items-center gap-2 mb-4">
                  <HelpCircle size={16} className="text-[#FFB800]" />
                  <h3 className="text-[#FFB800] text-xs font-bold tracking-widest uppercase">NEED ASSISTANCE?</h3>
                </div>
                
                <div className="bg-[#FFB800]/5 border border-[#FFB800]/20 rounded-xl p-4">
                  <label className="flex items-start gap-3 cursor-pointer group">
                    <input type="checkbox" name="assistance" className="accent-[#FFB800] w-5 h-5 mt-0.5" />
                    <div>
                      <span className="text-white text-sm font-bold block mb-1">I'm missing some requirements and need assistance</span>
                      <span className="text-gray-400 text-xs leading-relaxed block">Don't worry! We can help you improve your skills before the program. If you don't have the required documentation, you'll complete a practical test on location.</span>
                    </div>
                  </label>
                </div>
              </section>

              {/* COMMITMENT */}
              <section>
                <h3 className="text-[#FFB800] text-xs font-bold tracking-widest uppercase mb-4">COMMITMENT</h3>
                
                <div className="bg-[#111315] border border-white/10 rounded-xl p-4">
                  <label className="flex items-start gap-3 cursor-pointer group">
                    <input type="checkbox" name="mindset" required className="accent-[#FFB800] w-5 h-5 mt-0.5" />
                    <div>
                      <span className="text-white text-sm font-bold block mb-1">I have the mindset to change my life *</span>
                      <span className="text-gray-400 text-xs leading-relaxed block">I am committed to learning, growing, and building a successful career as a certified REAL BUILDER</span>
                    </div>
                  </label>
                </div>
              </section>

              {/* Closed Warning */}
              <div className="bg-[#FFB800]/10 border border-[#FFB800]/30 rounded-xl p-5">
                <div className="flex items-center gap-2 text-[#FFB800] font-bold mb-2">
                  <Clock size={18} />
                  Applications Currently Closed
                </div>
                <p className="text-gray-400 text-sm mb-4">
                  Thank you for your interest! Applications for new courses will open soon. Leave your details below and we'll notify you when enrollment opens.
                </p>
                <button type="submit" disabled={isSubmitting} className="w-full bg-gradient-to-r from-[#FFB800] to-[#FF9500] text-black font-bold py-3 rounded-lg flex items-center justify-center gap-2 hover:opacity-90 transition-opacity text-sm disabled:opacity-70 disabled:cursor-not-allowed">
                  <Mail size={16} />
                  {isSubmitting ? 'PROCESSING...' : 'REMIND ME WHEN APPLICATIONS OPEN'}
                </button>
              </div>
            </>
          )}
        </form>

        {/* Footer (Fixed) */}
        <div className="p-4 border-t border-white/10 bg-[#111315] flex-shrink-0">
          <button 
            onClick={onClose}
            className="w-full border border-white/20 text-[#FFB800] font-bold py-3 rounded-lg hover:bg-white/5 transition-colors text-sm"
          >
            CANCEL
          </button>
        </div>

      </div>
    </div>
  );
}
