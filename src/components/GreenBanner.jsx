import { TbBolt, TbHeart, TbMoodSmile } from 'react-icons/tb';

const cards = [
  {
    icon: <TbBolt className="w-8 h-8 text-white" />,
    title: 'Engagement immédiat',
    desc: 'Chaque produit devient une opportunité de jeu',
  },
  {
    icon: <TbHeart className="w-8 h-8 text-white" />,
    title: 'Fidélisation naturelle',
    desc: 'Les clients reviennent pour compléter leur collection',
  },
  {
    icon: <TbMoodSmile className="w-8 h-8 text-white" />,
    title: 'Viralité organique',
    desc: 'Les fans partagent et échangent entre eux',
  },
];

const GreenBanner = () => {
  return (
    <section className="font-['Poppins'] bg-gradient-to-r from-[#16A34A] to-[#0B6B3A]">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-24 py-20">

        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-[32px] md:text-[36px] font-bold text-white leading-tight mb-5">
            Transformez vos ventes en expérience mémorable
          </h2>
          <p className="text-[#F0FDF4] text-[18px] max-w-[686px] mx-auto leading-[1.6] ">
            YouCanWin offre à vos clients plus qu'un produit : une expérience interactive
            complète autour du football
          </p>
        </div>

        {/* 3 Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((card, i) => (
            <div
              key={i}
              className="rounded-[16px] p-8 flex flex-col items-center text-center gap-4"
              style={{ background: 'rgba(255,255,255,0.10)' }}
            >
              {/* Icon box */}
              <div
                className="w-16 h-16 rounded-[12px] flex items-center justify-center flex-shrink-0"
                style={{ background: 'rgba(255,255,255,0.2)' }}
              >
                {card.icon}
              </div>

              {/* Text */}
              <div>
                <p className="text-[20px] font-semibold text-white leading-snug mb-2">{card.title}</p>
                <p className="text-[16px] text-white leading-normal">{card.desc}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default GreenBanner;
