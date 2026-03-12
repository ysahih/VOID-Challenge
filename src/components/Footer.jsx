import { FaXTwitter, FaInstagram } from 'react-icons/fa6'
import { FaTrophy } from 'react-icons/fa'
import { HiOutlineShieldCheck } from 'react-icons/hi'
import { GrFacebookOption } from 'react-icons/gr'
import { BiLogoLinkedin } from 'react-icons/bi'

const Footer = () => {
  return (
    <footer className="bg-[#F8FAFC] border-t border-[#E2E8F0] font-sans">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-10">

          {/* Column 1 — Brand (full width on mobile, half on desktop) */}
          <div className="md:col-span-2 flex flex-col gap-2">
            {/* Logo — same as Navbar but slightly smaller */}
            <div className="flex items-center gap-2 cursor-pointer">
              <div className="bg-gradient-to-br from-[#16A34A] to-[#0B6B3A] w-8 h-8 rounded-[10px] flex items-center justify-center shadow-md shadow-primary-green/20">
                <FaTrophy className="text-white w-4 h-4 fill-white" />
              </div>
              <div className="flex items-center text-[18px] font-bold tracking-tight">
                <span className="text-[#DC2626]">You</span>
                <span className="text-[#1F2937]">can</span>
                <span className="text-[#B01219]">win</span>
              </div>
            </div>

            {/* Description */}
            <p className="text-[#475569] text-sm leading-relaxed ">
              Plateforme de jeux digitaux pour engager vos communautés autour du football. Un service d'Agency.Africa.
            </p>

            {/* Social Icons */}
            <div className="flex gap-3 mt-1">
              {[
                { icon: <GrFacebookOption className="w-4 h-4" />, label: 'Facebook' },
                { icon: <FaXTwitter className="w-4 h-4" />, label: 'X/Twitter' },
                { icon: <FaInstagram className="w-4 h-4" />, label: 'Instagram' },
                { icon: <BiLogoLinkedin className="w-4 h-4" />, label: 'LinkedIn' },
              ].map(({ icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="w-8 h-8 flex items-center justify-center rounded-lg bg-[#E2E8F0] text-[#475569] hover:bg-accent-green hover:text-white transition-colors duration-200"
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* Column 2 — Liens rapides */}
          <div className="flex flex-col gap-2">
            <h3 className="text-[#0F172A] font-semibold text-base">Liens rapides</h3>
            <ul className="flex flex-col gap-1">
              {['Nos offres', 'Nos jeux', 'Album 2025', 'À propos'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-[#475569] text-sm hover:text-accent-green transition-colors duration-200">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 — Contact & Légal */}
          <div className="flex flex-col gap-2">
            <h3 className="text-[#0F172A] font-semibold text-base">Contact &amp; Légal</h3>
            <ul className="flex flex-col gap-1">
              <li>
                <a href="mailto:games@agency.africa" className="text-[#475569] text-sm hover:text-accent-green transition-colors duration-200">
                  games@agency.africa
                </a>
              </li>
              <li>
                <a href="#" className="text-[#475569] text-sm hover:text-accent-green transition-colors duration-200">
                  Mentions légales
                </a>
              </li>
              <li>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#475569] text-sm hover:text-accent-green transition-colors duration-200 inline-flex items-center gap-1"
                >
                  Protection des données (CNDP)
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                    <polyline points="15 3 21 3 21 9" />
                    <line x1="10" y1="14" x2="21" y2="3" />
                  </svg>
                </a>
              </li>
              <li>
                <a href="#" className="text-[#475569] text-sm hover:text-accent-green transition-colors duration-200">
                  Conditions d'utilisation
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar — constrained to max-w-7xl, not full page */}
        <div className="border-t border-[#E2E8F0] mt-8">
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
            <p className="text-[#475569] text-sm">
              © 2025 Youcanwin. Tous droits réservés.
            </p>
            <p className="text-[#475569] text-sm">
              Un service de{' '}
              <a
                href="https://agency.africa"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#0B6B3A] font-semibold hover:underline"
              >
                Agency.Africa
              </a>

              <span className='text-[#475569] font-medium text-sm'>
                {' '}— games.agency.africa
              </span>
            </p>
          </div>

          {/* CNDP Badge */}
          <div className="flex justify-center mt-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-[#BBF7D0] text-[#0B6B3A] text-sm font-medium bg-[#F0FDF4]">
              <HiOutlineShieldCheck className="w-5 h-5 text-[#16A34A]" />
              Site conforme CNDP Maroc
            </div>
          </div>
        </div>

      </div>
    </footer>
  )
}

export default Footer
