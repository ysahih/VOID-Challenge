import { CalendarDays } from 'lucide-react';
import { FaRegCircleCheck } from 'react-icons/fa6';
import { LuSmartphone } from 'react-icons/lu';
import { HiOutlineRectangleStack } from 'react-icons/hi2';
import { HiOutlineChartBar, HiOutlineGift } from 'react-icons/hi';
import { PiCalendarDotBold } from 'react-icons/pi';

const features = [
  {
    icon: <LuSmartphone className="w-5 h-5 text-[#16A34A]" />,
    title: 'Activation instantanée',
    desc: 'QR codes uniques sur chaque produit',
  },
  {
    icon: <HiOutlineRectangleStack className="w-5 h-5 text-[#16A34A]" />,
    title: 'Collection digitale',
    desc: 'Cartes de joueurs, raretés, échanges',
  },
  {
    icon: <HiOutlineGift className="w-5 h-5 text-[#16A34A]" />,
    title: 'Récompenses exclusives',
    desc: 'Tirages au sort, lots partenaires, expériences VIP',
  },
  {
    icon: <HiOutlineChartBar className="w-5 h-5 text-[#16A34A]" />,
    title: 'Analytics avancés',
    desc: 'Dashboard temps réel, insights consommateurs',
  },
];

const Features = () => {
  return (
    <section className="bg-[#F8FAFC] py-20 border border-t border-[#E2E8F0] font-['Poppins']">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-[166px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-centers ">

          {/* ── Left: Image ── */}
          <div className="shadow-2xl w-full h-full min-h-[480px] max-h-[597px] max-w-[448px] rounded-2xl overflow-hidden ">
            <img
              src="/football.png"
              alt="Football player standing on ball"
              className="w-full h-full object-cover rounded-2xl"
              style={{ minHeight: 480, minWidth: 448 }}
            />
          </div>

          {/* ── Right: Content ── */}
          <div className="flex flex-col gap-6 p-2 py-4 lg:w-[666px]">

            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-[#DCFCE7] text-[#0B6B3A] text-[14px] font-medium px-4 py-1 rounded-full w-fit">
              <FaRegCircleCheck className="w-4 h-4" />
              Solution complète
            </div>

            {/* Headline */}
            <h2 className="text-[36px] font-bold text-[#0F172A] leading-none">
              Le terrain de jeu digital de votre marque
            </h2>

            {/* Subtext */}
            <p className="text-[#475569] text-[18px] leading-[1.3]">
              YouCanWin transforme vos produits en expériences interactives.
              Chaque achat devient une opportunité d'engagement avec vos consommateurs.
            </p>

            {/* Feature list */}
            <div className="flex flex-col gap-5 mt-2">
              {features.map((f, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="flex-shrink-0 ">
                    <div className='flex items-center justify-center w-10 h-10 bg-[#F0FDF4]'>
                      {f.icon}
                    </div>
                  </div>
                  <div>
                    <p className="text-[16px] font-semibold text-[#0F172A] leading-snug">{f.title}</p>
                    <p className="text-[14px] text-[#475569] mt-0.5">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="mt-1">
              <button className="cursor-pointer inline-flex items-center gap-2 bg-[#DC2626] hover:bg-[#c31f1f] transition-colors duration-200 text-white font-medium text-[16px] px-6 h-[48px] rounded-lg shadow-md shadow-red-200">
                Planifier une démo
                <PiCalendarDotBold className="w-5 h-5" />
              </button>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
