import React from 'react'
import { categories } from '../data/materials'
export default function Materials({ t, onOpenLead }:{ t:any; onOpenLead:()=>void }){
  return (<section className="py-8 space-y-6 container">
    <header className="flex items-end justify-between">
      <div>
        <h1 className="h2">{t.materials.title}</h1>
        <p className="lead mt-2">Stone · Wood · Glass — curated catalogs from European partners.</p>
      </div>
      <button onClick={onOpenLead} className="btn btn-primary">{t.materials.lead}</button>
    </header>
    <div className="grid grid-cols-12 gap-4">
      {categories.map(cat=> (<article key={cat.key} className="col-span-12 md:col-span-4 card">
        <div className="aspect-[4/3] rounded-xl overflow-hidden border border-[var(--border)] bg-[#0B0F1A]">
          <img src={cat.img} alt={`${cat.title} image`} className="w-full h-full object-cover opacity-90" loading="lazy"/>
        </div>
        <h3 className="font-medium mt-4">{cat.title}</h3>
        <ul className="mt-2 text-sm text-[var(--subtext)] list-disc pl-5 space-y-1">{cat.bullets.map(b=> <li key={b}>{b}</li>)}</ul>
        <button onClick={onOpenLead} className="mt-4 btn btn-ghost">{t.materials.lead}</button>
      </article>))}
    </div>
  </section>)
}
