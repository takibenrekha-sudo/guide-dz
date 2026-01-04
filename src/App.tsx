import React, { useState, useMemo } from "react";
import {
  ShoppingCart,
  CheckCircle,
  Clock,
  BookOpen,
  MapPin,
  ChevronLeft,
  ChevronRight,
  ShieldCheck,
  Package,
  ArrowRight,
  Truck,
  Building2,
  Home,
  Printer,
  FileText,
  Edit3,
  Send,
  Star,
  Info,
  Check,
  Users,
  AlertTriangle,
} from "lucide-react";
import { WILAYAS, IMAGES, BOOK_PRICE, getShippingPrice } from "./constants";

const FORMSPREE_ID = "xgovnlwy";

const Navbar = () => (
  <nav className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-md z-50 border-b border-slate-100 print:hidden">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between items-center h-14">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 bg-green-600 rounded flex items-center justify-center text-white font-bold shadow-sm">
            G
          </div>
          <span className="font-bold text-slate-900 tracking-tight text-sm">
            Guide Médicaments DZ
          </span>
        </div>
        <div className="flex items-center gap-3">
          <a
            href="#gallery"
            className="text-xs font-semibold text-slate-500 hover:text-green-600 transition-colors hidden sm:block"
          >
            Extraits
          </a>
          <a
            href="#order"
            className="bg-green-600 hover:bg-green-700 text-white px-4 py-1.5 rounded-full text-xs font-bold transition-all flex items-center gap-2 shadow-sm active:scale-95"
          >
            <ShoppingCart size={14} />
            Commander
          </a>
        </div>
      </div>
    </div>
  </nav>
);

const Hero = () => (
  <section className="relative pt-20 pb-10 md:pt-24 md:pb-12 bg-gradient-to-b from-white to-slate-50 overflow-hidden print:hidden">
    <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-[400px] h-[400px] bg-green-100/30 rounded-full blur-[100px] pointer-events-none"></div>

    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div className="text-left space-y-6">
          <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-green-100 text-green-700 font-bold text-[10px] uppercase tracking-wider">
            <span className="w-1.5 h-1.5 rounded-full bg-green-600"></span>
            Édition 2025 Disponible
          </div>

          <h1 className="text-3xl md:text-5xl font-black text-slate-900 leading-tight tracking-tight">
            Guide des médicaments <br />
            <span className="text-green-600">en Algérie 🇩🇿</span>
          </h1>

          <p className="text-base md:text-lg text-slate-600 max-w-md leading-relaxed font-medium">
            <p>Auteur : DR NADINE CHABANE</p>Référence 2025 complète pour les
            professionnels et étudiants. Trouvez les génériques et dosages en un
            clin d'œil.
          </p>

          <div className="flex flex-wrap gap-3 pt-2">
            <a
              href="#order"
              className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-xl font-bold text-base shadow-lg shadow-green-100 transition-all flex items-center gap-2 group active:scale-[0.98]"
            >
              Commander maintenant
              <ArrowRight
                size={18}
                className="group-hover:translate-x-1 transition-transform"
              />
            </a>
            <a
              href="#gallery"
              className="px-6 py-3 bg-white border border-slate-200 hover:border-green-200 text-slate-800 rounded-xl font-bold text-base shadow-sm hover:shadow-md transition-all flex items-center justify-center"
            >
              Voir des extraits
            </a>
          </div>
        </div>

        <div className="relative group perspective-1000 hidden md:block">
          <div className="relative z-10 transform rotate-1 group-hover:rotate-0 transition-all duration-700 ease-out">
            <img
              src={IMAGES.couverture}
              alt="Guide Médicaments"
              className="w-full max-w-[280px] mx-auto rounded-2xl shadow-2xl border-4 border-white"
            />
            <div className="absolute -bottom-4 -right-2 bg-white p-3 rounded-xl shadow-xl border border-slate-100 animate-bounce">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center text-white">
                  <Star fill="white" size={16} />
                </div>
                <div>
                  <p className="text-[9px] font-black text-slate-400 uppercase tracking-tighter">
                    Nouveau
                  </p>
                  <p className="text-xs font-black text-slate-800">
                    Toutes les DCI
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Features = () => (
  <section className="py-8 bg-white print:hidden border-b border-slate-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm flex items-start gap-4">
          <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 shrink-0">
            <Clock size={24} />
          </div>
          <div>
            <h3 className="text-lg font-bold text-slate-900 mb-1 tracking-tight">
              Gain de temps
            </h3>
            <p className="text-slate-500 text-sm leading-snug">
              Trouvez l'information dont vous avez besoin en secondes.
            </p>
          </div>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm flex items-start gap-4">
          <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center text-green-600 shrink-0">
            <BookOpen size={24} />
          </div>
          <div>
            <h3 className="text-lg font-bold text-slate-900 mb-1 tracking-tight">
              Référence pratique
            </h3>
            <p className="text-slate-500 text-sm leading-snug">
              Informations claires sur les dosages et formes.
            </p>
          </div>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm flex items-start gap-4">
          <div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center text-red-600 shrink-0">
            <MapPin size={24} />
          </div>
          <div>
            <h3 className="text-lg font-bold text-slate-900 mb-1 tracking-tight">
              Contenu Algérien
            </h3>
            <p className="text-slate-500 text-sm leading-snug">
              Marché national 2025 à jour.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const BookDescription = () => (
  <section className="py-16 bg-white overflow-hidden print:hidden">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col md:flex-row gap-12 items-start">
        <div className="md:w-3/5 space-y-10">
          <header className="space-y-4">
            <div className="inline-flex items-center gap-2 text-green-600 bg-green-50 px-3 py-1 rounded-lg text-xs font-black uppercase tracking-widest">
              <Info size={14} />
              Découvrir l'ouvrage
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 leading-[1.15]">
              <span className="relative z-10">
                Une vision claire et structurée
              </span>
              <br />
              <span className="relative inline-block mt-2">
                <span className="absolute inset-0 bg-green-100 -rotate-1 transform scale-110"></span>
                <span className="relative text-green-600">du médicament.</span>
              </span>
            </h2>
          </header>

          <div className="text-slate-600 space-y-8">
            <p className="text-lg md:text-xl leading-relaxed font-medium">
              Le Guide des Médicaments en Algérie est un{" "}
              <b>ouvrage de référence</b> qui offre une vision claire,
              structurée et actualisée du médicament, pensé pour répondre aux{" "}
              <b>besoins réels</b> des étudiants et des professionnels de santé.
            </p>

            <div className="bg-slate-50 border-l-4 border-green-600 p-6 rounded-r-2xl italic">
              Conçu sous forme de <b>tableaux synthétiques</b>, il permet une
              consultation <b>rapide et efficace</b>, aussi bien dans le cadre
              de la révision universitaire que de la pratique quotidienne.
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-black text-slate-900">
                Une organisation experte et innovante
              </h3>
              <p className="text-base leading-relaxed">
                Le guide adopte une <b>structure hybride unique</b>, alliant un
                classement rigoureux par <b>classes thérapeutiques</b>, intégré
                au sein de <b>26 chapitres</b> organisés par spécialités
                médicales (dermatologie, ophtalmologie, toxicologie, douleur et
                anesthésie, etc.).
              </p>
              <p className="text-sm font-medium opacity-80">
                Cette double organisation facilite la compréhension
                pharmacologique, le raisonnement clinique et l’application
                pratique.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-black text-slate-900">
                Un contenu clair, visuel et standardisé
              </h3>
              <p className="text-base leading-relaxed">
                L’ensemble est structuré en <b>tableaux clairs et lisibles</b>,
                garantissant un <b>gain de temps considérable</b>. Pour chaque
                médicament, le guide présente de façon homogène : la <b>DCI</b>,
                les noms de <b>spécialités</b>, les <b>formes</b>{" "}
                pharmaceutiques, les <b>dosages</b> disponibles et le{" "}
                <b>laboratoire</b> détenteur.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-black text-slate-900">
                Une vision locale et internationale
              </h3>
              <p className="text-base leading-relaxed">
                Le guide inclut principalement les médicaments conformes à la{" "}
                <b>nomenclature algérienne</b>, mais également des DCI non
                encore commercialisées localement, afin d’offrir une vision
                globale des <b>nouveautés thérapeutiques</b> et des tendances
                internationales.
              </p>
            </div>
          </div>
        </div>

        <div className="md:w-2/5 w-full sticky top-24 space-y-6">
          <div className="bg-slate-900 p-8 rounded-[2rem] text-white shadow-2xl">
            <h3 className="text-xl font-black mb-6 flex items-center gap-2 text-green-400">
              <Users size={24} />À qui s'adresse ce guide ?
            </h3>
            <ul className="space-y-5">
              {[
                "Étudiants en pharmacie et en médecine",
                "Pharmaciens d'officine et hospitaliers",
                "Médecins et praticiens de santé",
                "Enseignants et formateurs",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="mt-1 w-5 h-5 bg-green-500/20 rounded-full flex items-center justify-center shrink-0">
                    <Check
                      size={12}
                      className="text-green-400"
                      strokeWidth={4}
                    />
                  </div>
                  <span className="text-sm font-bold opacity-90">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-xl">
            <div className="flex items-center gap-2 mb-6">
              <Star className="text-yellow-400" fill="currentColor" size={20} />
              <h3 className="text-lg font-black text-slate-900">
                Format Pratique
              </h3>
            </div>
            <p className="text-sm text-slate-500 font-medium mb-4">
              Optimisé pour une utilisation en milieu hospitalier ou en
              officine.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-3 bg-slate-50 rounded-xl">
                <p className="text-[10px] font-black text-slate-400 uppercase">
                  Taille
                </p>
                <p className="text-sm font-black text-slate-800">
                  A4 (meilleure visibilité)
                </p>
              </div>
              <div className="p-3 bg-slate-50 rounded-xl">
                <p className="text-[10px] font-black text-slate-400 uppercase">
                  Pages
                </p>
                <p className="text-sm font-black text-slate-800">
                  237 pages (recto-verso)
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Gallery = () => {
  const [current, setCurrent] = useState(0);
  const images = [
    IMAGES.couverture,
    IMAGES.page1,
    IMAGES.page2,
    IMAGES.page3,
    IMAGES.livreOuvert,
  ];

  const next = () => setCurrent((prev) => (prev + 1) % images.length);
  const prev = () =>
    setCurrent((prev) => (prev - 1 + images.length) % images.length);

  return (
    <section
      id="gallery"
      className="py-10 bg-slate-50 scroll-mt-14 print:hidden"
    >
      <div className="max-w-5xl mx-auto px-4 text-center">
        <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-3 tracking-tight">
          Aperçu du contenu
        </h2>
        <p className="text-slate-500 text-sm max-w-lg mx-auto mb-8 font-medium">
          Feuilletez quelques pages pour découvrir la qualité de l'organisation
          en tableaux.
        </p>

        <div className="relative max-w-lg mx-auto rounded-2xl overflow-hidden bg-white border border-slate-200 shadow-lg">
          <div className="aspect-[4/5] flex items-center justify-center p-4">
            {images.map((img, idx) => (
              <img
                key={idx}
                src={img}
                alt={`Page ${idx + 1}`}
                className={`absolute max-w-full max-h-[90%] object-contain transition-all duration-500 ease-in-out ${
                  idx === current
                    ? "opacity-100 translate-x-0 scale-100 rotate-0"
                    : "opacity-0 translate-x-8 scale-95 rotate-1"
                }`}
              />
            ))}
          </div>

          <button
            onClick={prev}
            className="absolute left-2 top-1/2 -translate-y-1/2 w-9 h-9 bg-white/80 backdrop-blur shadow rounded-full flex items-center justify-center text-slate-800"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={next}
            className="absolute right-2 top-1/2 -translate-y-1/2 w-9 h-9 bg-white/80 backdrop-blur shadow rounded-full flex items-center justify-center text-slate-800"
          >
            <ChevronRight size={20} />
          </button>

          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-3 bg-slate-900/90 text-white px-4 py-1.5 rounded-full backdrop-blur-md">
            <span className="text-[9px] font-black uppercase tracking-widest opacity-60">
              Extraits
            </span>
            <div className="w-px h-3 bg-white/20"></div>
            <span className="text-[10px] font-bold">
              {current + 1} / {images.length}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

const OrderForm = () => {
  const [step, setStep] = useState<"FORM" | "REVIEW" | "SUCCESS">("FORM");
  const [qty, setQty] = useState(1);
  const [loading, setLoading] = useState(false);
  const [deliveryType, setDeliveryType] = useState("Domicile");
  const [formData, setFormData] = useState({
    nom: "",
    telephone: "",
    wilaya: "",
    adresse: "",
  });

  const orderNumber = useMemo(
    () => `DZ-${Math.floor(Math.random() * 90000) + 10000}`,
    [step === "REVIEW"]
  );
  const shippingPrice = getShippingPrice(formData.wilaya, deliveryType);
  const totalItems = qty * BOOK_PRICE;

  // Si la livraison est indisponible (prix = 0), on n'affiche pas de total erroné
  const isAvailable = formData.wilaya ? shippingPrice > 0 : true;
  const totalPrice = totalItems + shippingPrice;

  const handleGenerateBon = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isAvailable) return;
    setStep("REVIEW");
    window.scrollTo({
      top: document.getElementById("order")?.offsetTop! - 60,
      behavior: "smooth",
    });
  };

  const handleConfirmOrder = async () => {
    setLoading(true);
    try {
      const response = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          order_id: orderNumber,
          quantite: qty,
          type_livraison: deliveryType,
          frais_livraison: `${shippingPrice} DA`,
          total_commande: `${totalPrice} DA`,
          societe_livraison: "Parkers",
          _subject: `📦 CONFIRMÉ ${orderNumber}: ${formData.nom} (${formData.wilaya})`,
        }),
      });
      if (response.ok) setStep("SUCCESS");
      else alert("Erreur.");
    } catch (err) {
      alert("Erreur réseau.");
    } finally {
      setLoading(false);
    }
  };

  if (step === "SUCCESS") {
    return (
      <section id="order" className="py-16 bg-green-50 scroll-mt-14">
        <div className="max-w-md mx-auto px-4 text-center py-10 bg-white rounded-2xl shadow-xl border border-green-100">
          <div className="w-14 h-14 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
            <CheckCircle size={32} />
          </div>
          <h2 className="text-2xl font-black text-slate-900 mb-2">Validé !</h2>
          <p className="text-slate-600 text-sm mb-6 px-2 font-medium">
            Merci <b>{formData.nom}</b>. Votre commande <b>#{orderNumber}</b>{" "}
            est enregistrée.
          </p>
          <button
            onClick={() => setStep("FORM")}
            className="bg-slate-900 text-white px-8 py-3 rounded-xl font-bold text-sm shadow-lg active:scale-95"
          >
            Passer une nouvelle commande
          </button>
        </div>
      </section>
    );
  }

  if (step === "REVIEW") {
    return (
      <section id="order" className="py-10 bg-slate-100 scroll-mt-14">
        <div className="max-w-xl mx-auto px-4">
          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-slate-200">
            <div className="bg-slate-900 p-6 text-white flex justify-between items-center">
              <div>
                <h3 className="text-sm font-black tracking-widest uppercase">
                  Bon de Commande
                </h3>
                <p className="text-[9px] text-white/50 font-bold uppercase mt-0.5 tracking-widest">
                  Guide Médicaments 2025
                </p>
              </div>
              <div className="px-2 py-1 bg-green-600 rounded text-[10px] font-black">
                N° {orderNumber}
              </div>
            </div>

            <div className="p-6 space-y-6">
              <div className="grid grid-cols-2 gap-4 text-xs">
                <div>
                  <h4 className="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-1">
                    Client
                  </h4>
                  <p className="font-black text-slate-800">{formData.nom}</p>
                  <p className="font-bold text-slate-500">
                    {formData.telephone}
                  </p>
                </div>
                <div className="text-right">
                  <h4 className="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-1">
                    Livraison
                  </h4>
                  <p className="font-black text-slate-800">{formData.wilaya}</p>
                  <p className="text-slate-500">{formData.adresse}</p>
                </div>
              </div>

              <div className="border-t border-slate-100 pt-4">
                <div className="flex justify-between text-xs py-1.5">
                  <span className="text-slate-600">
                    Guide Médicaments x{qty}
                  </span>
                  <span className="font-bold text-slate-800">
                    {totalItems.toLocaleString()} DA
                  </span>
                </div>
                <div className="flex justify-between text-xs py-1.5 border-b border-slate-50">
                  <span className="text-slate-600">
                    Frais Parkers ({deliveryType})
                  </span>
                  <span className="font-bold text-slate-800">
                    {shippingPrice.toLocaleString()} DA
                  </span>
                </div>
                <div className="flex justify-between items-center pt-3">
                  <span className="text-[10px] font-black text-slate-400 uppercase">
                    Total à payer
                  </span>
                  <span className="text-2xl font-black text-slate-900">
                    {totalPrice.toLocaleString()} DA
                  </span>
                </div>
              </div>

              <div className="flex flex-col gap-3 pt-2 print:hidden">
                <button
                  onClick={handleConfirmOrder}
                  disabled={loading}
                  className="w-full bg-green-600 text-white py-4 rounded-xl font-black text-base flex items-center justify-center gap-2 hover:bg-green-700 shadow-lg active:scale-[0.98] disabled:opacity-50"
                >
                  {loading ? (
                    "Confirmation..."
                  ) : (
                    <>
                      <Send size={18} /> CONFIRMER LA COMMANDE
                    </>
                  )}
                </button>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    onClick={() => setStep("FORM")}
                    className="py-2.5 rounded-lg border border-slate-200 text-slate-500 text-xs font-bold flex items-center justify-center gap-2"
                  >
                    <Edit3 size={14} /> Modifier
                  </button>
                  <button
                    onClick={() => window.print()}
                    className="py-2.5 rounded-lg bg-slate-100 text-slate-600 text-xs font-bold flex items-center justify-center gap-2"
                  >
                    <Printer size={14} /> Imprimer
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="order" className="py-12 bg-white scroll-mt-14 print:hidden">
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-white rounded-[2rem] shadow-2xl overflow-hidden flex flex-col md:flex-row border border-slate-100">
          {/* Colonne de Gauche : Récapitulatif Visuel */}
          <div className="md:w-[35%] bg-green-600 p-8 text-white flex flex-col justify-between">
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-black uppercase tracking-tight mb-6">
                  Récapitulatif
                </h2>
                <div className="space-y-4">
                  <div className="bg-white/10 p-3 rounded-xl border border-white/10 flex gap-3 items-center">
                    <Truck size={20} className="shrink-0 text-green-200" />
                    <p className="text-[10px] font-bold opacity-90 leading-tight">
                      Livraison 58 Wilayas via <b>Parkers</b>.
                    </p>
                  </div>
                  <div className="flex items-center gap-3 px-1">
                    <ShieldCheck size={16} className="text-green-200" />
                    <span className="text-xs font-bold">
                      Paiement à la livraison
                    </span>
                  </div>
                </div>
              </div>

              <div className="space-y-4 pt-10">
                <div className="flex justify-between items-center">
                  <span className="text-[10px] font-black uppercase opacity-60 tracking-widest">
                    Livre x{qty}
                  </span>
                  <span className="text-sm font-black tracking-tight">
                    {totalItems.toLocaleString()} DA
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[10px] font-black uppercase opacity-60 tracking-widest">
                    Livraison ({formData.wilaya.split(" - ")[0] || "--"})
                  </span>
                  <span
                    className={`text-sm font-black tracking-tight ${
                      formData.wilaya && shippingPrice === 0
                        ? "text-red-200"
                        : ""
                    }`}
                  >
                    {!formData.wilaya
                      ? "---"
                      : shippingPrice === 0
                      ? "Indisponible"
                      : `${shippingPrice.toLocaleString()} DA`}
                  </span>
                </div>

                <div className="relative pt-4">
                  <div className="absolute inset-x-0 top-0 h-px bg-white/20"></div>
                  <div className="flex justify-between items-end mt-4">
                    <span className="text-[10px] font-black uppercase opacity-60 tracking-widest mb-1.5">
                      Total
                    </span>
                    <span className="text-4xl font-black tracking-tighter leading-none">
                      {formData.wilaya && shippingPrice > 0 ? (
                        <>
                          {totalPrice.toLocaleString()}{" "}
                          <span className="text-lg">DA</span>
                        </>
                      ) : (
                        "---"
                      )}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <form
            onSubmit={handleGenerateBon}
            className="md:w-[65%] p-8 space-y-5"
          >
            <div className="space-y-1">
              <label className="text-[9px] font-black text-slate-400 uppercase tracking-wider ml-1">
                Nom & Prénom
              </label>
              <input
                required
                className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-transparent text-sm font-bold outline-none focus:border-green-500 focus:bg-white transition-all"
                placeholder="Nom complet *"
                value={formData.nom}
                onChange={(e) =>
                  setFormData({ ...formData, nom: e.target.value })
                }
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-1">
                <label className="text-[9px] font-black text-slate-400 uppercase tracking-wider ml-1">
                  Téléphone
                </label>
                <input
                  required
                  type="tel"
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-transparent text-sm font-bold outline-none focus:border-green-500 focus:bg-white transition-all"
                  placeholder="05/06/07..."
                  value={formData.telephone}
                  onChange={(e) =>
                    setFormData({ ...formData, telephone: e.target.value })
                  }
                />
              </div>
              <div className="space-y-1">
                <label className="text-[9px] font-black text-slate-400 uppercase tracking-wider ml-1">
                  Wilaya
                </label>
                <select
                  required
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-transparent text-sm font-bold outline-none focus:border-green-500 focus:bg-white transition-all"
                  value={formData.wilaya}
                  onChange={(e) =>
                    setFormData({ ...formData, wilaya: e.target.value })
                  }
                >
                  <option value="">Sélectionner...</option>
                  {WILAYAS.map((w) => (
                    <option key={w} value={w}>
                      {w}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[9px] font-black text-slate-400 uppercase tracking-wider ml-1">
                Mode de Réception
              </label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setDeliveryType("Domicile")}
                  className={`py-2.5 rounded-xl border text-[11px] font-black transition-all ${
                    deliveryType === "Domicile"
                      ? "bg-green-600 border-green-600 text-white"
                      : "bg-white border-slate-100 text-slate-400 hover:border-slate-200"
                  }`}
                >
                  À Domicile
                </button>
                <button
                  type="button"
                  onClick={() => setDeliveryType("Bureau")}
                  className={`py-2.5 rounded-xl border text-[11px] font-black transition-all ${
                    deliveryType === "Bureau"
                      ? "bg-green-600 border-green-600 text-white"
                      : "bg-white border-slate-100 text-slate-400 hover:border-slate-200"
                  }`}
                >
                  Stop Desk (Bureau)
                </button>
              </div>
              {formData.wilaya && shippingPrice === 0 && (
                <div className="flex items-center gap-2 text-red-500 mt-1">
                  <AlertTriangle size={14} />
                  <span className="text-[10px] font-bold">
                    Désolé, la livraison {deliveryType.toLowerCase()} est
                    indisponible pour cette wilaya.
                  </span>
                </div>
              )}
            </div>

            <div className="space-y-1">
              <label className="text-[9px] font-black text-slate-400 uppercase tracking-wider ml-1">
                Adresse Précise
              </label>
              <input
                required
                className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-transparent text-sm font-bold outline-none focus:border-green-500 focus:bg-white transition-all"
                placeholder="Cité, Rue, Commune..."
                value={formData.adresse}
                onChange={(e) =>
                  setFormData({ ...formData, adresse: e.target.value })
                }
              />
            </div>

            <div className="flex items-center justify-between p-3 bg-slate-50 rounded-xl border border-slate-100">
              <span className="text-xs font-black text-slate-700">
                Quantité de livres
              </span>
              <div className="flex items-center gap-4">
                <button
                  type="button"
                  onClick={() => setQty(Math.max(1, qty - 1))}
                  className="w-8 h-8 rounded-lg bg-white shadow-sm border border-slate-100 text-lg font-bold flex items-center justify-center"
                >
                  -
                </button>
                <span className="font-black text-lg text-slate-900">{qty}</span>
                <button
                  type="button"
                  onClick={() => setQty(Math.min(20, qty + 1))}
                  className="w-8 h-8 rounded-lg bg-white shadow-sm border border-slate-100 text-lg font-bold flex items-center justify-center"
                >
                  +
                </button>
              </div>
            </div>

            <button
              type="submit"
              disabled={!isAvailable || !formData.wilaya}
              className={`w-full py-4 rounded-xl font-black text-base shadow-lg transition-all flex items-center justify-center gap-2 active:scale-[0.98] ${
                !isAvailable || !formData.wilaya
                  ? "bg-slate-200 text-slate-400 cursor-not-allowed"
                  : "bg-green-600 hover:bg-green-700 text-white shadow-green-100"
              }`}
            >
              {!formData.wilaya
                ? "Sélectionner une Wilaya"
                : shippingPrice === 0
                ? "Livraison Indisponible"
                : "Générer le Bon"}
              <ArrowRight size={18} />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default function App() {
  return (
    <div className="min-h-screen bg-white selection:bg-green-100">
      <Navbar />
      <Hero />
      <Features />
      <BookDescription />
      <Gallery />
      <OrderForm />
      <footer className="bg-slate-950 text-slate-500 py-6 px-4 border-t border-white/5 print:hidden">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-green-600 rounded flex items-center justify-center text-white font-bold text-[10px]">
              G
            </div>
            <span className="font-black text-white text-xs tracking-tight uppercase">
              Guide Médicaments DZ
            </span>
          </div>
          <div className="text-[9px] font-black uppercase tracking-widest opacity-30 text-center md:text-right">
            &copy; 2025 • Logistique Parkers
          </div>
        </div>
      </footer>
    </div>
  );
}
