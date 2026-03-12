import { HiOutlineCalendar, HiOutlineMail } from 'react-icons/hi';

const RedCTA = () => {
  return (
    <section
      className="py-20 font-['Poppins']"
      style={{ background: 'linear-gradient(to left, #B01219, #DC2626)' }}
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-24 flex flex-col items-center text-center gap-8">

        {/* Text */}
        <div className="flex flex-col gap-3">
          <h2 className="text-[38px] md:text-[36px] font-bold text-white leading-tight">
            Prêt à transformer votre marketing ?
          </h2>
          <p className="text-[#FEF2F2] text-[18px] ">
            Rejoignez les marques qui engagent leurs fans avec YouCanWin
          </p>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <button className="cursor-pointer inline-flex items-center gap-2 bg-white text-[#B01219] font-medium text-[16px] px-8 py-4.5 rounded-[8px] hover:bg-red-50 transition-colors duration-200 shadow-md">
            <HiOutlineCalendar className="w-5 h-5 flex-shrink-0" />
            Planifier une démo gratuite
          </button>
          <button
            className="cursor-pointer inline-flex items-center gap-2 text-white font-medium text-[16px] px-8 py-4.5 rounded-[8px] transition-colors duration-200"
            style={{ border: '1.5px solid rgba(255,255,255,0.3)', background: 'rgba(255,255,255,0.1)' }}
            onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,0.2)'}
            onMouseLeave={e => e.currentTarget.style.background = 'rgba(255,255,255,0.1)'}
          >
            <HiOutlineMail className="w-5 h-5 flex-shrink-0" />
            Nous contacter
          </button>
        </div>

      </div>
    </section>
  );
};

export default RedCTA;
