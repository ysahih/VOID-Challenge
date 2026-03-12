import { TbTrendingUp, TbBallFootball } from 'react-icons/tb';
import { HiOutlineStar, HiOutlineUserGroup } from 'react-icons/hi';

const stats = [
  {
    icon: <TbTrendingUp className="w-8 h-8 text-[#16A34A]" />,
    value: '500K+',
    label: 'Interactions mensuelles',
  },
  {
    icon: <HiOutlineUserGroup className="w-8 h-8 text-[#16A34A]" />,
    value: '50+',
    label: 'Marques partenaires',
  },
  {
    icon: <HiOutlineStar className="w-8 h-8 text-[#16A34A]" />,
    value: '98%',
    label: 'Taux de satisfaction',
  },
  {
    icon: <TbBallFootball className="w-8 h-8 text-[#16A34A]" />,
    value: '24/7',
    label: 'Support technique',
  },
];

const BottomStats = () => {
  return (
    <section className="bg-white border-t border-[#E2E8F0] py-16 font-['Poppins']">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-24">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s, i) => (
            <div key={i} className="flex flex-col items-center text-center">
              {s.icon}
              <p className="text-[30px] font-bold text-[#0F172A] mt-1">{s.value}</p>
              <p className="text-[14px] text-[#475569] leading-[1.01]">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BottomStats;
