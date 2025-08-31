import React from 'react'
import HeroBanner from '../components/Hero'
export default function Services({ t, onOpenLead }:{ t:any; onOpenLead:()=>void }){
  return (<section className="py-8 space-y-8 container">
    <HeroBanner
      kicker="Architectural Design"
      title={t.services.heroTitle}
      subtitle="Concept → Spec → Supply. We bridge design and materials with European partners and exact specs."
      cta={{ label: t.hero.cta, onClick: onOpenLead }}
      secondary={{ label: 'View portfolio', onClick: () => window.dispatchEvent(new CustomEvent('nav:portfolio')) }}
    />
    <section className="grid grid-cols-12 gap-4">
      {['Kitchens','Bathrooms','Facades','Retail / Office'].map(cat=> (<article key={cat} className="col-span-12 md:col-span-6 xl:col-span-3 card">
        <h4 className="font-medium">{cat}</h4>
        <p className="text-sm text-[var(--subtext)] mt-2">Concept · Material palette · Detailing · Bill of quantities</p>
      </article>))}
    </section>
  </section>)
}
