import React from 'react'
import { projects } from '../data/portfolio'
export default function Portfolio({ t }:{ t:any }){
  return (<section className="py-8 container">
    <div className="mb-6"><h1 className="h2">{t.portfolio.title}</h1><p className="lead mt-2">{t.portfolio.note}</p></div>
    <div className="grid grid-cols-12 gap-4">
      {projects.map(p=> (<figure key={p.id} className="col-span-12 md:col-span-6 xl:col-span-4 overflow-hidden surface rounded-2xl">
        <img src={p.img} alt={`${p.title} — ${p.tag}`} loading="lazy" className="w-full h-[240px] object-cover opacity-95"/>
        <figcaption className="p-4 flex items-center justify-between">
          <div><div className="font-medium">{p.title}</div><div className="text-xs text-[var(--subtext)]">{p.tag}</div></div>
          <a className="text-sm underline underline-offset-4" href="#" onClick={e=>e.preventDefault()}>Details</a>
        </figcaption>
      </figure>))}
    </div>
  </section>)
}
