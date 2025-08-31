import React from 'react'
import { ArrowRight, PlayCircle } from 'lucide-react'
type Props = { kicker?: string; title: string; subtitle?: string; cta?: { label: string; onClick: () => void }; secondary?: { label: string; onClick: () => void }; imageUrl?: string }
export default function HeroBanner({ kicker, title, subtitle, cta, secondary, imageUrl }: Props){
  return (<section className="relative overflow-hidden rounded-3xl border border-[var(--border)] bg-gradient-to-br from-white/[0.02] to-white/[0.01] p-6 md:p-10">
    <div className="absolute -top-40 -left-40 w-[520px] h-[520px] rounded-full blur-3xl opacity-20" style={{background: 'conic-gradient(from 180deg at 50% 50%, #2563EB40, #E11D4840, #10B98133, #2563EB40)'}} />
    <div className="grid grid-cols-12 gap-6 relative">
      <div className="col-span-12 lg:col-span-7">
        {kicker && <div className="badge mb-3">{kicker}</div>}
        <h1 className="h1">{title}</h1>
        {subtitle && <p className="lead mt-3">{subtitle}</p>}
        <div className="mt-6 flex flex-wrap gap-3">
          {cta && <button onClick={cta.onClick} className="btn btn-primary">{cta.label} <ArrowRight className="w-4 h-4"/></button>}
          {secondary && <button onClick={secondary.onClick} className="btn btn-ghost"><PlayCircle className="w-4 h-4"/>{secondary.label}</button>}
        </div>
        <div className="mt-6 grid grid-cols-12 gap-3 text-sm text-[var(--subtext)]">
          {['Kitchens','Bathrooms','Facades','Retail / Office'].map(tag => (<div key={tag} className="col-span-6 sm:col-span-3 badge">{tag}</div>))}
        </div>
      </div>
      <div className="col-span-12 lg:col-span-5">
        <div className="aspect-[16/10] rounded-2xl overflow-hidden border border-[var(--border)] bg-[#0B0F1A]">
          <img src={imageUrl || 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=1600&auto=format&fit=crop'} alt="Hero" className="w-full h-full object-cover opacity-90" loading="eager"/>
        </div>
      </div>
    </div>
  </section>)
}
