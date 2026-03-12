import { ChevronRight } from 'lucide-react';

const games = [
  {
    image: '/image1.png',
    badge: { text: 'STAR', position: 'top-right', bg: 'bg-gradient-to-r from-accent-green to-primary-green' },
    title: 'Album Digital 2025',
    desc: 'Collection de cartes avec échanges et défis.',
    link: 'Découvrir',
  },
  {
    image: '/image2.png',
    badge: { text: 'BIENTÔT', position: 'top-right', bg: 'bg-[#475569]' },
    title: 'Quiz Football',
    desc: "Questions sur l'actualité et l'histoire du foot.",
    link: null,
  },
  {
    image: '/image3.png',
    badge: null,
    title: 'Tombola digitale',
    desc: 'Tirages au sort avec lots sponsorisés.',
    link: null,
  },
  {
    image: '/image4.png',
    badge: null,
    title: 'Pronostics',
    desc: 'Prédictions de matchs et classements.',
    link: null,
  },
];

const Catalogue = () => {
  return (
    <section id="jeux" className="bg-gradient-to-b from-white to-[#F8FAFC] py-20 font-['Poppins']">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-24">

        {/* Header */}
        <div className="text-center mb-13">
          <h2 className="text-[36px] font-bold text-[#0F172A] leading-tight mb-4">
            Catalogue de jeux
          </h2>
          <p className="text-[#475569] text-[18px]">
            Des mécaniques éprouvées pour engager vos audiences
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {games.map((game, i) => (
            <div
              key={i}
              className="group bg-white rounded-[16px] border border-[#E2E8F0] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col"
            >
              {/* Image with optional badge */}
              <div className="relative w-full h-[219px] flex-shrink-0 overflow-hidden">
                <img
                  src={game.image}
                  alt={game.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {game.badge && (
                  <span
                    className={`absolute -top-1 -right-1 text-white text-[12px] font-semibold px-3 py-1 rounded-bl-xl uppercase tracking-wide ${game.badge.bg}`}
                  >
                    {game.badge.text}
                  </span>
                )}
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col gap-2 flex-1">
                <p className="text-[16px] font-semibold text-[#0F172A] leading-snug">{game.title}</p>
                <p className="text-[14px] text-[#475569] leading-normal flex-1 pr-2">{game.desc}</p>
                {game.link && (
                  <a
                    href="#"
                    className="inline-flex items-center gap-1 text-[14px] font-medium text-[#16A34A] mt-2 hover:text-[#15803D] transition-colors"
                  >
                    {game.link}
                    <ChevronRight className="w-4 h-4" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Catalogue;
