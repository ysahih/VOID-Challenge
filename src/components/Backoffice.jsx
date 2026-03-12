import { ChevronRight } from 'lucide-react';
import { FaRegCircleCheck } from 'react-icons/fa6';
import { LuQrCode, LuSettings2 } from 'react-icons/lu';
import { HiOutlineUsers, HiOutlineGift, HiOutlineBell, HiOutlineChartBar, HiOutlineUserGroup, HiOutlineAdjustments } from 'react-icons/hi';
import { HiAdjustmentsHorizontal, HiOutlineRectangleStack } from 'react-icons/hi2';
import { TbCloudDownload } from 'react-icons/tb';
import { FiSettings } from 'react-icons/fi';

const cards = [
  {
    icon: <LuQrCode className="w-6 h-6 text-[#16A34A]" />,
    title: 'Générateur QR Codes',
    desc: 'Créez et téléchargez vos QR codes uniques en masse',
  },
  {
    icon: <HiOutlineUserGroup className="w-6 h-6 text-[#16A34A]" />,
    title: 'CRM Participants',
    desc: 'Collectez et gérez vos participants avec segmentation avancée',
  },
  {
    icon: <HiOutlineAdjustments className="w-6 h-6 text-[#16A34A]" />,
    title: 'Configuration jeux',
    desc: 'Paramétrez entièrement vos jeux : règles, lots, durée, visuels',
  },
  {
    icon: <HiOutlineChartBar className="w-6 h-6 text-[#16A34A]" />,
    title: 'Analytics temps réel',
    desc: 'Suivez vos KPIs : scans, conversions, engagement, ROI',
  },
  {
    icon: <HiOutlineGift className="w-6 h-6 text-[#16A34A]" />,
    title: 'Gestion des lots',
    desc: 'Définissez vos récompenses et gérez les tirages au sort',
  },
  {
    icon: <HiOutlineBell className="w-6 h-6 text-[#16A34A]" />,
    title: 'Notifications',
    desc: 'Envoyez des push, emails et SMS à vos participants',
  },
  {
    icon: <TbCloudDownload className="w-6 h-6 text-[#16A34A]" />,
    title: 'Export données',
    desc: 'Téléchargez vos données en CSV, Excel ou via API',
  },
  {
    icon: <HiOutlineRectangleStack className="w-6 h-6 text-[#16A34A]" />,
    title: 'Multi-campagnes',
    desc: 'Gérez plusieurs campagnes simultanément',
  },
];

const Backoffice = () => {
  return (
    <section className="bg-gradient-to-b from-white to-[#F8FAFC] py-20 border-t border-[#E2E8F0] font-['Poppins']">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-24">

        {/* Section Header */}
        <div className="text-center mb-12">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-[#DCFCE7] text-[#0B6B3A] text-[14px] font-medium px-4 py-1 rounded-full mb-4">
            <FiSettings className="w-[14px] h-[14px]" />
            Backoffice tout-en-un
          </div>

          <h2 className="text-[36px] font-bold text-[#0F172A] leading-[1.2] mb-3">
            Gérez tout depuis une interface unique
          </h2>
          <p className="text-[#475569] text-[18px] leading-[1.6] max-w-[640px] mx-auto">
            Notre backoffice intuitif vous permet de créer, configurer et piloter vos
            campagnes en toute autonomie
          </p>
        </div>

        {/* 4×2 Card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {cards.map((card, i) => (
            <div
              key={i}
              className="bg-white border border-[#E2E8F0] rounded-[12px] p-6 flex flex-col gap-4 hover:shadow-md transition-shadow duration-200"
            >
              {/* Icon box */}
              <div className="w-12 h-12 rounded-[8px] bg-[#F0FDF4] flex items-center justify-center flex-shrink-0">
                {card.icon}
              </div>
              {/* Text */}
              <div>
                <p className="text-[16px] font-semibold text-[#0F172A] leading-snugs mb-1.5">{card.title}</p>
                <p className="text-[14px] text-[#475569] leading-normal">{card.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button — centered */}
        <div className="flex justify-center">
          <button className="cursor-pointer inline-flex items-center gap-2 bg-[#16A34A] hover:bg-[#15803D] transition-colors duration-200 text-white font-medium text-[16px] px-[22px] py-3 rounded-[8px] shadow-md shadow-green-200">
            Demander un accès au backoffice
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

      </div>
    </section>
  );
};

export default Backoffice;
