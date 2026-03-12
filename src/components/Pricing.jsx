import { TbBolt, TbTrendingUp } from 'react-icons/tb';
import { LuEarth, LuCheck } from 'react-icons/lu';
import { PiCheckBold } from 'react-icons/pi';

const CheckItem = ({ text }) => (
  <li className="flex items-start gap-2.5 text-[14px] text-[#475569] leading-[1.6]">
    <PiCheckBold className="w-4 h-4 text-[#16A34A] mt-0.5 flex-shrink-0" />
    {text}
  </li>
);

const plans = [
  {
    id: 'starter',
    icon: <TbBolt className="w-6 h-6 text-[#16A34A]" />,
    iconBg: '#F0FDF4',
    name: 'Starter',
    tagline: 'Campagne locale',
    desc: 'Idéal pour tester sur un marché',
    pricing: 'Tarification sur mesure selon vos volumes',
    border: '#E2E8F0',
    popular: false,
    features: [
      "Jusqu'à 1 000 utilisateurs",
      "Jusqu'à 10K QR codes",
      '1 pays / région',
      'Album standard (équipe nationale)',
      'Hébergement Cloud sécurisé',
      'Backoffice simplifié',
      'Support par email',
      '1 marque',
    ],
    btn: {
      label: 'Demander un devis',
      style: 'outline',
    },
  },
  {
    id: 'scale',
    icon: <TbTrendingUp className="w-6 h-6 text-[#EF4444]" />,
    iconBg: '#FEF2F2',
    name: 'Scale',
    tagline: 'Expansion nationale',
    desc: "Pour des campagnes d'envergure",
    pricing: 'Tarification sur mesure selon vos volumes',
    border: '#FECACA',
    popular: true,
    features: [
      "Jusqu'à 50 000 utilisateurs",
      'QR codes illimités',
      "Multi-pays (jusqu'à 5)",
      'Album complet (toutes les équipes)',
      'Cloud ou On-Premise',
      'Backoffice avancé avec analytics',
      'Support prioritaire 24/7',
      "Jusqu'à 3 marques",
      'API REST disponible',
    ],
    btn: {
      label: 'Planifier une démo',
      style: 'red',
    },
  },
  {
    id: 'enterprise',
    icon: <LuEarth className="w-6 h-6 text-[#16A34A]" />,
    iconBg: '#F0FDF4',
    name: 'Enterprise',
    tagline: 'Solution globale',
    desc: 'Pour les groupes internationaux',
    pricing: 'Tarification sur mesure selon vos volumes',
    border: '#E2E8F0',
    popular: false,
    features: [
      'Utilisateurs illimités',
      'QR codes illimités',
      'Déploiement mondial',
      'Albums personnalisés par région',
      'Infrastructure dédiée (On-Premise)',
      'Multi-marques illimité',
      'Développements sur-mesure',
      'Account manager dédié',
      'SLA garanti 99.9%',
      'Formation et onboarding complet',
    ],
    btn: {
      label: 'Contactez-nous',
      style: 'outline',
    },
  },
];

const Pricing = () => {
  return (
    <section className="bg-white py-[74px] border-[#E2E8F0] font-['Poppins']">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-24">

        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-[35px] font-bold text-[#0F172A] leading-normal mb-3">
            Des formules adaptées à votre échelle
          </h2>
          <p className="text-[#475569] text-[18px]">
            Choisissez la solution qui correspond à vos besoins et votre ambition
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan) => (
            <div key={plan.id} className="relative">

              {/* Popular badge — floats above the card */}
              {plan.popular && (
                <div className="flex justify-center relative z-10">
                  <span
                    className="shadow-lg text-white text-[14px] font-semibold px-5 py-1.5 rounded-full uppercase tracking-wide absolute -top-4"
                    style={{ background: 'linear-gradient(to right, #DC2626, #B01219)' }}
                  >
                    Populaire
                  </span>
                </div>
              )}

              {/* Card */}
              <div
                className={`bg-white rounded-[16px] border p-8 flex flex-col gap-4 h-[706px] hover:shadow-lg transition-all duration-300 ${plan.popular ? 'shadow-xl' : ''}`}
                style={{ borderColor: plan.border}}
              >
                {/* Icon */}
                <div
                  className="w-12 h-12 rounded-[10px] flex items-center justify-center flex-shrink-0"
                  style={{ background: plan.iconBg }}
                >
                  {plan.icon}
                </div>

                {/* Name + tagline + desc */}
                <div>
                  <p className="text-[20px] font-semibold text-[#0F172A] leading-tight">{plan.name}</p>
                  <p className="text-[14px] font-medium text-[#16A34A] mt-0.5">{plan.tagline}</p>
                  <p className="text-[16px] text-[#475569] mt-4">{plan.desc}</p>
                </div>

                {/* Pricing note with top + bottom border */}
                <p className="mt-2 text-[14px] text-[#64748B] leading-snug border-t border-b border-[#F1F5F9] py-4">{plan.pricing}</p>

                {/* Feature list */}
                <ul className="flex flex-col gap-2.5 py-2">
                  {plan.features.map((f, i) => (
                    <CheckItem key={i} text={f} />
                  ))}
                </ul>

                {/* CTA */}
                <div className="">
                  {plan.btn.style === 'red' ? (
                    <button className="cursor-pointer w-full bg-[#DC2626] hover:bg-[#B01219] text-white font-medium text-[16px] py-2.5 rounded-[8px] transition-colors duration-200 flex items-center justify-center gap-2">
                      {plan.btn.label}
                    </button>
                  ) : (
                    <button className="cursor-pointer w-full bg-white border border-[#D1D5DB] hover:border-[#9CA3AF] hover:bg-slate-50 text-[#0F172A] font-medium text-[16px] py-2.5 rounded-[8px] transition-colors duration-200">
                      {plan.btn.label}
                    </button>
                  )}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Pricing;
