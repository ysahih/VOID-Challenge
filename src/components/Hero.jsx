import React from 'react';
import { ChevronRight, Gift, Scan, Repeat, User } from 'lucide-react';
import { FaQrcode } from 'react-icons/fa';
import { HiOutlineGift, HiOutlineLightBulb } from 'react-icons/hi';
import { LuQrCode } from 'react-icons/lu';

const Hero = () => {
  return (
    <section className="bg-white pt-16 md:pt-20 lg:pt-28 pb-16 lg:pb-24 overflow-hidden font-['Poppins']">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-24">
        <div className="grid grid-cols-1 lg:grid-cols-[2fr_1.5fr] gap-8 items-center">

          {/* ── LEFT COLUMN — untouched ── */}
          <div className="max-w-2xl">
            <h1 className="text-5xl md:text-7xl font-bold text-[#0F172A] mb-8">
              Transformez chaque{' '}
              <span className="relative inline-block bg-gradient-to-r from-[#16A34A] to-[#0B6B3A] bg-clip-text text-transparent pr-2">
                produit
                <svg className="absolute -bottom-4 left-0 w-full" viewBox="0 0 300 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 15C50 5 150 5 295 15" stroke="#16A34A" strokeWidth="4" strokeLinecap="round" />
                </svg>
              </span>{' '}
              en expérience de jeu
            </h1>

            <p className="text-[#475569] text-[24px] leading-[1.3] mb-8 max-w-xl">
              YouCanWin connecte vos marques aux fans de football à travers des mécaniques de gamification innovantes.{' '}
              <span className="font-semibold text-[#0F172A]">Codes QR, cartes digitales, défis et récompenses.</span>
            </p>

            <div className="flex flex-wrap gap-20 mb-12">
              <div>
                <div className="text-4xl font-bold text-primary-green mb-1">500K+</div>
                <div className="text-[#475569] font-medium text-sm text-nowrap">Interactions/mois</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-logo-win mb-1">50+</div>
                <div className="text-[#475569] font-medium text-sm text-nowrap">Marques actives</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary-green mb-1">x3.5</div>
                <div className="text-[#475569] font-medium text-sm text-nowrap">ROI moyen</div>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 mb-12">
              <button className="cursor-pointer group/hero-btn bg-gradient-to-r from-[#16A34A] to-[#0B6B3A] text-white px-8 h-[64px] rounded-[12px] font-medium text-lg flex items-center gap-2 transition-all duration-300 hover:shadow-xl hover:shadow-primary-green/30 shadow-md">
                Voir la démo
                <ChevronRight className="w-5 h-5 transition-transform duration-300 group-hover/hero-btn:translate-x-1.5" />
              </button>
              <button className="cursor-pointer bg-white border-2 border-[#CBD5E1] h-[64px] px-8 rounded-[12px] font-medium text-lg gap-2 text-[#334155] flex items-center hover:border-[#91a1b8] hover:bg-[#F9FAFB]">
                <HiOutlineLightBulb className="w-5 h-5" />
                Comment ça marche
              </button>
            </div>

            <div className="pt-8 border-t border-[#E2E8F0]">
              <div className="text-[#64748B] text-[12px] font-medium mb-4 uppercase">Ils nous font confiance</div>
              <div className="flex flex-wrap items-center gap-x-10 gap-y-6 text-[#94A3B8] text-[14px] font-medium">
                <span>Maroc Telecom</span>
                <span>inwi</span>
                <span>Orange</span>
                <span>Carrefour</span>
              </div>
            </div>
          </div>

          {/* ── RIGHT COLUMN — Phone Mockup ── */}
          <div className="relative flex justify-center lg:justify-start overflow-visible">

            {/* Phone shell — fixed 448px wide, relative so absolute children are contained */}
            <div className="relative flex-shrink-0" style={{ width: 448, height: 796 }}>

              {/* Dark navy outer frame */}
              <div
                className="absolute inset-0 rounded-[44px] bg-[#0F172A]"
                style={{ boxShadow: '0 40px 80px -10px rgba(15,23,42,0.3)' }}
              />

              {/* White inner screen */}
              <div className="absolute inset-[8px] rounded-[36px] bg-white overflow-hidden flex flex-col">

                {/* Green gradient header */}
                <div
                  className="text-white px-6 pt-8 pb-6 flex-shrink-0"
                  style={{ background: 'linear-gradient(to bottom, #16A34A 0%, #0B6B3A 100%)' }}
                >
                  <p className="text-[12px] font-medium uppercase mb-2">
                    Album Digital 2025
                  </p>
                  <h2 className="text-[24px] font-bold leading-snug mb-5">
                    Ma Collection
                  </h2>
                  {/* Stats: spacing only, NO dividers */}
                  <div className="flex items-end gap-4">
                    <div>
                      <p className="text-[22px] font-bold leading-none">127</p>
                      <p className="text-[11px] font-light opacity-80 mt-1">Cartes</p>
                    </div>
                    <div>
                      <p className="text-[22px] font-bold leading-none">76%</p>
                      <p className="text-[11px] font-light opacity-80 mt-1">Complet</p>
                    </div>
                    <div>
                      <p className="text-[22px] font-bold leading-none">#12</p>
                      <p className="text-[11px] font-light opacity-80 mt-1">Rang</p>
                    </div>
                  </div>
                </div>

                {/* 3×2 card grid */}
                <div className="flex-1 bg-white px-4 pt-5 pb-2 grid grid-cols-3 gap-3 content-start">
                  {[...Array(6)].map((_, i) => (
                    <div
                      key={i}
                      className="rounded-[12px]"
                      style={{ aspectRatio: '3/4', background: 'linear-gradient(135deg, #F1F5F9 0%, #E2E8F0 100%)' }}
                    />
                  ))}
                </div>

                {/* Bottom nav bar */}
                <div className="bg-white border-t border-slate-100 flex-shrink-0 px-4 pt-2 pb-4 flex items-center justify-around">
                  {/* Active: Récompense (red) */}
                  <div className="flex flex-col items-center gap-1">
                    <div className="w-4 h-4 rounded bg-red-100 flex items-center justify-center">
                    </div>
                    <span className="text-[10px] text-[#475569]">Récompense</span>
                  </div>
                  {/* Inactive: Scanner */}
                  <div className="flex flex-col items-center gap-1">
                    <div className="w-4 h-4 rounded bg-slate-200 flex items-center justify-center">
                    </div>
                    <span className="text-[10px] text-[#475569]">Scanner</span>
                  </div>
                  {/* Inactive: Échanges */}
                  <div className="flex flex-col items-center gap-1">
                    <div className="w-4 h-4 rounded bg-slate-200 flex items-center justify-center">
                    </div>
                    <span className="text-[10px] text-[#475569]">Échanges</span>
                  </div>
                  {/* Inactive: Profil */}
                  <div className="flex flex-col items-center gap-1">
                    <div className="w-4 h-4 rounded bg-slate-200 flex items-center justify-center">
                    </div>
                    <span className="text-[10px] text-[#475569]">Profil</span>
                  </div>
                </div>

              </div>{/* end inner screen */}
            </div>{/* end phone shell */}

            {/* Floating QR card — top-right overlapping */}
            <div
              className="absolute bg-white rounded-2xl flex items-center gap-3 z-20"
              style={{
                top: -20,
                right: -10,
                padding: '16px 20px 16px 16px',
                boxShadow: '0 16px 48px -8px rgba(0,0,0,0.13)',
                border: '1px solid #F1F5F9',
              }}
            >
              <div className="w-10 h-10 rounded-lg bg-[#DCFCE7] flex items-center justify-center flex-shrink-0">
                <LuQrCode className="w-5 h-5 text-[#16A34A]" />
              </div>
              <div>
                <p className="text-[14px] font-semibold text-[#0F172A] leading-tight">Scan QR Code</p>
                <p className="text-[12px] text-[#64748B] font-normal mt-0.5">Débloquer une carte</p>
              </div>
            </div>

            {/* Floating Récompense card — bottom-left overlapping */}
            <div
              className="absolute bg-white rounded-2xl flex items-center gap-3 z-20"
              style={{
                bottom: -20,
                left: -84,
                padding: '16px 24px 16px 16px',
                boxShadow: '0 16px 48px -8px rgba(0,0,0,0.11)',
                border: '1px solid #F1F5F9',
              }}
            >
              <div className="w-10 h-10 rounded-lg bg-[#FEE2E2] flex items-center justify-center flex-shrink-0">
                <HiOutlineGift className="w-5 h-5 text-[#DC2626]" />
              </div>
              <div>
                <p className="text-[14px] font-semibold text-[#0F172A] leading-tight">Récompense</p>
                <p className="text-[12px] text-[#64748B] font-normal mt-0.5">Tirage hebdomadaire</p>
              </div>
            </div>

          </div>{/* end right column */}

        </div>
      </div>
    </section>
  );
};

export default Hero;
