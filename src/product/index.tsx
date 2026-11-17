import { useState, useEffect } from "react";
import { saveEmail } from "./crm/database";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { Mail, ShieldCheck, Zap, Shield, Play, Mic, Languages, FileText, AlertTriangle, Lightbulb, CheckCircle2, Battery, Cable, Sparkles, MessageSquare, Headphones, Lock, Check, Clock, Globe, Cpu, Target, ClipboardCheck, Server, Key, EyeOff } from "lucide-react";
import product1 from "./image/product-1.jfif";
import product2 from "./image/product-2.png";
import productVideo from "./image/product-video.mp4";
import sec1 from "./image/sec-1.png";
import sec2 from "./image/sec-2.png";
import sec3 from "./image/sec-3.png";
import sec4 from "./image/sec-4.png";
import sec5 from "./image/sec-5.png";
import sec6 from "./image/sec-6.png";
import plugIn from "./image/plug-in.png";
import lockImg from "./image/lock.png";
import mainProduct from "./image/main-product.png";
import heroImg from "./image/hero.png";

const Product = () => {
  const [email, setEmail] = useState("");
  const [modalState, setModalState] = useState<{ isOpen: boolean, type: 'success' | 'error', message: string }>({
    isOpen: false,
    type: 'success',
    message: ''
  });
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;
    setIsSubmitting(true);
    const success = await saveEmail(email);
    setIsSubmitting(false);
    if (success) {
      setModalState({
        isOpen: true,
        type: 'success',
        message: `Thanks! We will notify you at ${email}`
      });
      setEmail("");
    } else {
      setModalState({
        isOpen: true,
        type: 'error',
        message: "You are already on the notification list or an error occurred."
      });
    }
  };

  return (
    <div className="min-h-screen bg-[#fafafa] font-sans overflow-x-hidden text-slate-900 selection:bg-blue-500/30">
      <SEOHead
        title="AI Smart Pen & Products | Cybaem Tech"
        description="Discover the World's 1st AI Smart Pen with Native Multi-Language OCR, Voice Synthesis, and seamless enterprise digitization by Cybaem Tech."
        canonical="https://www.cybaemtech.com/product"
      />
      <Navbar />

      <main className="flex-grow pt-24">

        <section className="relative pt-8 pb-16 px-4 sm:px-6 lg:px-12 bg-gradient-to-br from-white to-slate-50 overflow-hidden min-h-[85vh] flex items-center">
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center w-full gap-12">

            {/* Left Content */}
            <div className="flex-1 w-full lg:pr-8 z-10">
              <div className="inline-flex items-center bg-blue-50 text-blue-500 rounded-full px-4 py-1.5 mb-8 text-[10px] font-extrabold tracking-widest uppercase">
                COMING SOON
              </div>

              <h1 className="text-5xl lg:text-7xl font-extrabold mb-6 leading-[1.1] tracking-tight text-slate-900">
                Something <br />
                <span className="text-primary">Big</span> is Coming.
              </h1>

              <p className="text-xl lg:text-2xl font-bold mb-6 text-slate-800">
                The AI Meeting Companion<br />
                Every Business Has Been Waiting For.
              </p>

              <p className="text-slate-500 mb-10 max-w-md text-base font-medium leading-relaxed">
                Imagine a device that doesn't just<br />record meeting - t understands them.
              </p>

              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-0 max-w-md mb-12 bg-white border border-gray-200 rounded-lg overflow-hidden focus-within:border-blue-400 focus-within:ring-2 focus-within:ring-blue-100 transition-all shadow-sm">
                <div className="relative flex-1">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
                    <Mail className="w-5 h-5" />
                  </div>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    required
                    className="w-full pl-12 pr-4 py-4 bg-transparent focus:outline-none text-slate-900 placeholder-gray-400 text-sm font-medium"
                  />
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 disabled:cursor-not-allowed text-white font-semibold px-8 py-4 transition-colors whitespace-nowrap text-sm rounded-r-lg"
                >
                  {isSubmitting ? "Sending..." : "Notify Me"}
                </button>
              </form>

              {/* Feature Mini-Icons */}
              <div className="flex items-center gap-6 text-[10px] text-center text-slate-500 font-bold tracking-wider uppercase">
                <div className="flex flex-col items-center gap-3">
                  <Shield className="w-6 h-6 text-blue-500 stroke-[1.5]" />
                  Secure by Design
                </div>
                <div className="w-px h-10 bg-gray-200"></div>
                <div className="flex flex-col items-center gap-3">
                  <Mic className="w-6 h-6 text-blue-500 stroke-[1.5]" />
                  AI Powered
                </div>
                <div className="w-px h-10 bg-gray-200"></div>
                <div className="flex flex-col items-center gap-3">
                  <Lock className="w-6 h-6 text-purple-500 stroke-[1.5]" />
                  Privacy First
                </div>
              </div>
            </div>

            {/* Right Image */}
            <div className="flex-[1.2] w-full flex flex-col items-center relative mt-12 lg:mt-0 lg:-mt-12">
              <img
                src={heroImg}
                alt="AI Meeting Companion"
                className="w-full max-w-[800px] h-auto object-contain scale-[1.15] -translate-y-8 lg:-translate-y-12 drop-shadow-2xl relative z-10"
              />

              {/* Removed video watch button from here to match design closely, or can be placed elsewhere if needed */}
            </div>
          </div>
        </section>

        {/* 2. Video Showcase Banner */}
        <section className="relative my-16 w-[92%] max-w-6xl mx-auto rounded-[2.5rem] overflow-hidden shadow-[0_0_50px_rgba(37,99,235,0.4)] border border-blue-500/20 aspect-video max-h-[550px] bg-black">
          <video
            src={productVideo}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          />
        </section>

        {/* 3. Meet Less. Achieve More. Section */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white mt-12">
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
            {/* Left: Device Image */}
            <div className="flex-1 w-full flex justify-center lg:justify-start">
              <div className="relative w-full max-w-[600px] rounded-[3rem] overflow-hidden shadow-sm">
                <img src={plugIn} alt="Device Close-up" className="w-full h-auto object-contain" />
              </div>
            </div>

            {/* Right: Text & Features */}
            <div className="flex-1 w-full lg:pl-8">
              <div className="inline-flex items-center gap-1.5 bg-blue-50 text-primary rounded-full px-3 py-1 mb-6 text-[10px] font-bold tracking-widest uppercase">
                <Sparkles className="w-3 h-3" />
                AI POWERED
              </div>

              <h2 className="text-4xl lg:text-5xl font-extrabold mb-2 text-slate-900 tracking-tight">Meet Less.</h2>
              <h2 className="text-4xl lg:text-5xl font-extrabold mb-10 text-primary tracking-tight">Achieve More.</h2>

              <ul className="space-y-6 text-sm font-bold text-slate-800">
                <li className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center border border-slate-100 shadow-sm">
                    <Clock className="w-5 h-5 text-slate-600 stroke-[1.5]" />
                  </div>
                  <span>AI Minutes Automatically Generated</span>
                </li>
                <li className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center border border-slate-100 shadow-sm">
                    <Languages className="w-5 h-5 text-slate-600 stroke-[1.5]" />
                  </div>
                  <span>Real-time Translation In Any Language</span>
                </li>
                <li className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center border border-slate-100 shadow-sm">
                    <AlertTriangle className="w-5 h-5 text-slate-600 stroke-[1.5]" />
                  </div>
                  <span>Identifies Business Pain Points</span>
                </li>
                <li className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center border border-slate-100 shadow-sm">
                    <Lightbulb className="w-5 h-5 text-slate-600 stroke-[1.5]" />
                  </div>
                  <span>Summarizes Solutions Discussed</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* 4. Everything You Need Grid */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#fafafa]">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-block bg-gray-100 text-gray-500 rounded-full px-3 py-1 mb-6 text-[10px] font-bold tracking-widest uppercase">
                BUILT FOR BUSINESS
              </div>
              <h2 className="text-3xl lg:text-4xl font-extrabold mb-2 text-slate-900 tracking-tight">Everything You Need.</h2>
              <h2 className="text-3xl lg:text-4xl font-extrabold text-primary tracking-tight">Nothing You Don't.</h2>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-6 gap-4">
              <FeatureCard
                imgSrc={sec1}
                title="Captures every conversation"
                desc="360° high fidelity audio capture."
              />
              <FeatureCard
                imgSrc={sec2}
                title="Translates any language"
                desc="Real-time translation to English."
              />
              <FeatureCard
                imgSrc={sec3}
                title="Generates AI-powered minutes of meeting"
                desc="Automatic MOM with key insights & points."
              />
              <FeatureCard
                imgSrc={sec4}
                title="Identifies business pain points"
                desc="Detects challenges and critical issues."
              />
              <FeatureCard
                imgSrc={sec5}
                title="Summarizes solutions discussed"
                desc="Captures proposed solutions & ideas."
              />
              <FeatureCard
                imgSrc={sec6}
                title="Creates action items automatically"
                desc="List of action items with owners & deadlines."
              />
            </div>
          </div>
        </section>



        {/* 6. Always Private Banner */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#fafafa]">
          <div className="max-w-7xl mx-auto rounded-[3rem] bg-gradient-to-r from-gray-100 to-slate-300 overflow-hidden flex flex-col lg:flex-row items-center relative shadow-inner">
            {/* Left Text */}
            <div className="flex-1 p-12 lg:p-20 z-10">
              <div className="inline-block bg-white/50 text-slate-600 rounded-full px-3 py-1 mb-6 text-[9px] font-bold tracking-widest uppercase backdrop-blur-sm border border-white/40">
                PRIVATE BY DESIGN
              </div>
              <h2 className="text-3xl lg:text-4xl font-extrabold mb-1 text-slate-900 tracking-tight">Your Conversations.</h2>
              <h2 className="text-3xl lg:text-4xl font-extrabold mb-6 text-primary tracking-tight">Always Private.</h2>
              <p className="text-slate-600 text-sm font-medium mb-12 max-w-xs">
                Enterprise-grade security ensures your meetings and data are always safe, secure and in your control.
              </p>

              <div className="flex gap-8">
                <div className="flex flex-col gap-2">
                  <Server className="w-5 h-5 text-primary stroke-[1.5]" />
                  <span className="text-[10px] font-bold text-slate-700">Local Processing</span>
                </div>
                <div className="flex flex-col gap-2">
                  <Key className="w-5 h-5 text-primary stroke-[1.5]" />
                  <span className="text-[10px] font-bold text-slate-700">Encrypted Storage</span>
                </div>
                <div className="flex flex-col gap-2">
                  <EyeOff className="w-5 h-5 text-primary stroke-[1.5]" />
                  <span className="text-[10px] font-bold text-slate-700">No Data Sharing</span>
                </div>
              </div>
            </div>

            {/* Right Image */}
            <div className="flex-1 relative w-full h-[300px] lg:h-[450px] flex items-center justify-center p-8 lg:p-0">
              <img src={lockImg} alt="Secure Device" className="w-full h-full object-contain relative z-10 drop-shadow-2xl scale-110 lg:scale-[1.3] -translate-x-8 lg:-translate-x-16 transform-origin-center transition-transform" />
            </div>
          </div>
        </section>

        {/* 7. Bottom CTA Block */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-16">

            {/* Left Image */}
            <div className="flex-1 w-full flex justify-center">
              <img src={mainProduct} alt="Product" className="w-full max-w-[500px] object-contain drop-shadow-xl rounded-2xl" />
            </div>

            {/* Right Content */}
            <div className="flex-1 w-full">
              <h2 className="text-4xl lg:text-5xl font-extrabold mb-2 text-slate-900 tracking-tight">
                Be Among the First to
              </h2>
              <h2 className="text-4xl lg:text-5xl font-extrabold mb-8 text-primary tracking-tight">
                Experience the Future.
              </h2>

              <ul className="space-y-3 text-sm font-bold text-slate-700 mb-10">
                <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-blue-500" /> Priority launch access</li>
                <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-blue-500" /> Beta invitations</li>
                <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-blue-500" /> Exclusive launch offers</li>
                <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-blue-500" /> Product updates</li>
              </ul>

              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-0 w-full bg-white border border-gray-200 rounded-lg overflow-hidden focus-within:border-blue-400 focus-within:ring-2 focus-within:ring-blue-100 transition-all shadow-sm">
                <div className="relative flex-1">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
                    <Mail className="w-5 h-5" />
                  </div>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    required
                    className="w-full pl-12 pr-4 py-4 bg-transparent focus:outline-none text-slate-900 placeholder-gray-400 text-sm font-medium"
                  />
                </div>
                <button
                  type="submit"
                  className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 transition-colors whitespace-nowrap text-sm rounded-r-lg"
                >
                  Notify Me
                </button>
              </form>
              <div className="flex items-center gap-2 mt-4 text-[10px] font-bold uppercase tracking-wider text-gray-400">
                <Lock className="w-3 h-3" /> We respect your privacy. No spam, ever.
              </div>
            </div>

          </div>
        </section>

      </main>

      {/* Video Modal Popup */}
      {isVideoOpen && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm">
          <div className="relative w-full max-w-5xl rounded-2xl overflow-hidden bg-black border border-white/10 shadow-2xl">
            <button
              onClick={() => setIsVideoOpen(false)}
              className="absolute top-4 right-4 z-10 w-10 h-10 bg-black/50 hover:bg-black/80 rounded-full flex items-center justify-center text-white transition-colors"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <video
              src={productVideo}
              controls
              autoPlay
              className="w-full h-auto aspect-video object-cover"
            />
          </div>
        </div>
      )}

      {/* Premium Notifications Modal */}
      {modalState.isOpen && (
        <div className="fixed inset-0 z-[70] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-md animate-in fade-in duration-300">
          <div className="bg-white/90 backdrop-blur-xl border border-white/50 p-10 rounded-[2.5rem] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3)] max-w-sm w-full text-center transform animate-in zoom-in-95 slide-in-from-bottom-4 duration-300 relative overflow-hidden">
            {/* Decorative background glow */}
            <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-full h-1/2 opacity-20 blur-3xl rounded-full ${modalState.type === 'success' ? 'bg-blue-500' : 'bg-red-500'} pointer-events-none`}></div>

            <div className={`w-20 h-20 rounded-3xl flex items-center justify-center mx-auto mb-6 relative z-10 shadow-sm border ${modalState.type === 'success' ? 'bg-gradient-to-br from-blue-50 to-white text-primary border-blue-100' : 'bg-gradient-to-br from-red-50 to-white text-red-500 border-red-100'}`}>
              {modalState.type === 'success' ? (
                <svg className="w-10 h-10 drop-shadow-sm" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                </svg>
              ) : (
                <svg className="w-10 h-10 drop-shadow-sm" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              )}
            </div>

            <h3 className="text-2xl font-extrabold text-slate-900 mb-3 tracking-tight relative z-10">
              {modalState.type === 'success' ? "You're on the list!" : 'Oops!'}
            </h3>

            <p className="text-sm text-slate-600 mb-8 leading-relaxed relative z-10 font-medium px-2">
              {modalState.type === 'success'
                ? 'Your email has been added. We will notify you as soon as we launch.'
                : modalState.message}
            </p>

            <button
              onClick={() => setModalState({ ...modalState, isOpen: false })}
              className={`w-full py-4 rounded-2xl font-bold text-sm tracking-wide uppercase transition-all relative z-10 shadow-lg hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 ${modalState.type === 'success'
                  ? 'bg-blue-600 hover:bg-blue-700 text-white shadow-blue-600/30'
                  : 'bg-red-600 hover:bg-red-700 text-white shadow-red-600/30'
                }`}
            >
              Continue
            </button>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

// Subcomponent for the 6-card features grid
const FeatureCard = ({ imgSrc, title, desc }: { imgSrc: string, title: string, desc: string }) => (
  <div className="bg-white border border-gray-100 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow flex flex-col items-center text-center pb-6">
    <div className="w-full mb-6">
      <img src={imgSrc} alt={title} className="w-full h-auto object-cover" />
    </div>
    <h3 className="font-bold text-slate-900 mb-2 px-4 text-xs leading-tight h-8">{title}</h3>
    <p className="text-[10px] text-slate-500 font-medium px-6 leading-relaxed">{desc}</p>
  </div>
);

export default Product;
