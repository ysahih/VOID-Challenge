
import { HiOutlineGift, HiOutlinePuzzle } from 'react-icons/hi';
import { HiOutlineRectangleStack } from 'react-icons/hi2';
import { LuQrCode } from 'react-icons/lu';
import { TbShoppingCart } from 'react-icons/tb';

const steps = [
  {
    icon: <TbShoppingCart className="w-6 h-6 text-[#16A34A]" />,
    number: 1,
    red: false,
    title: 'Achat produit',
    desc: 'Le client achète votre produit en magasin',
  },
  {
    icon: <LuQrCode className="w-6 h-6 text-[#16A34A]" />,
    number: 2,
    red: false,
    title: 'Scan QR Code',
    desc: 'Il scanne le code sur l\'emballage',
  },
  {
    icon: <HiOutlineRectangleStack className="w-6 h-6 text-[#16A34A]" />,
    number: 3,
    red: false,
    title: 'Déblocage carte',
    desc: 'Une carte digitale est débloquée',
  },
  {
    icon: <HiOutlinePuzzle className="w-6 h-6 text-[#EF4444]" />,
    number: 4,
    red: true,
    title: 'Collection',
    desc: 'Il complète sa collection',
  },
  {
    icon: <HiOutlineGift className="w-6 h-6 text-[#EF4444]" />,
    number: 5,
    red: true,
    title: 'Récompenses',
    desc: 'Participe aux tirages',
  },
];

const Steps = () => {
  return (
    <section className="bg-white py-20 border-t border-[#E2E8F0] font-['Poppins']">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-24">

        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-[36px] font-bold text-[#0F172A] leading-tight mb-3">
            Un parcours client simple et engageant
          </h2>
          <p className="text-[#475569] text-[18px]">
            De l'achat du produit à la récompense, en 5 étapes
          </p>
        </div>

        {/* 5 Steps Row */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          {steps.map((step) => (
            <div key={step.number} className="flex flex-col items-center text-center gap-4">

              {/* Icon box with badge */}
              <div className="relative">
                <div
                  className="w-16 h-16 rounded-2xl border-2 shadow-lg flex items-center justify-center"
                  style={{
                    borderColor: step.red ? '#FECACA' : '#BBF7D0',
                  }}
                >
                  {step.icon}
                </div>
                {/* Step number badge */}
                <div
                  className="absolute w-7 h-7 rounded-full flex items-center justify-center text-white text-[12px] font-bold -top-2 -right-3 lg:-right-22"
                  style={{ background: step.red ? '#DC2626' : '#16A34A' }}
                >
                  {step.number}
                </div>
              </div>

              {/* Text */}
              <div className='px-4'>
                <p className="text-[16px] font-semibold text-[#0F172A] leading-snug">{step.title}</p>
                <p className="text-[14px] text-[#475569] mt-1 leading-snug">{step.desc}</p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Steps;
