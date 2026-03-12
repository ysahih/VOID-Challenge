import { LuQrCode, LuEarth } from 'react-icons/lu';
import { HiOutlineCloud, HiOutlineUserGroup } from 'react-icons/hi';
import { HiOutlineRectangleStack } from 'react-icons/hi2';

const stats = [
  {
    icon: <HiOutlineUserGroup className="w-6 h-6 text-[#16A34A]" />,
    title: 'Utilisateurs',
    desc: 'De 1K à illimité',
  },
  {
    icon: <LuQrCode className="w-6 h-6 text-[#16A34A]" />,
    title: 'QR Codes',
    desc: 'Volume adapté',
  },
  {
    icon: <LuEarth className="w-6 h-6 text-[#16A34A]" />,
    title: 'Couverture',
    desc: 'Local à mondial',
  },
  {
    icon: <HiOutlineRectangleStack className="w-6 h-6 text-[#16A34A]" />,
    title: 'Albums',
    desc: 'Standard ou custom',
  },
  {
    icon: <HiOutlineCloud className="w-6 h-6 text-[#16A34A]" />,
    title: 'Infrastructure',
    desc: 'Cloud ou On-Premise',
  },
];

const StatsBar = () => {
  return (
    <section className="bg-white border-t border-[#E2E8F0] py-12 font-['Poppins']">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-24">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          {stats.map((s, i) => (
            <div key={i} className="flex flex-col items-center text-center gap-3">
              <div className="w-12 h-12 rounded-[8px] bg-[#F0FDF4] flex items-center justify-center">
                {s.icon}
              </div>
              <div>
                <p className="text-[16px] font-semibold text-[#0F172A] leading-normal">{s.title}</p>
                <p className="text-[12px] text-[#475569] mt-0.5">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsBar;
