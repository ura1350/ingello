import React from 'react'
export default function About({ t }:{ t:any }){
  return (
    <section className="py-10 container grid grid-cols-12 gap-6">
      <div className="col-span-12 lg:col-span-6">
        <h1 className="h2">{t.about.title}</h1>
        <p className="lead mt-4">{t.about.body}</p>
        <ul className="mt-6 space-y-2 text-sm text-[var(--subtext)] list-disc pl-5">
          <li>Sintered stone, natural stone, engineered stone</li>
          <li>Glass partitions, doors, railings</li>
          <li>Wood panels and veneers</li>
        </ul>
      </div>
      <div className="col-span-12 lg:col-span-6 grid grid-cols-12 gap-4">
        {[1,2,3,4].map(n=> (
          <div key={n} className="col-span-6 aspect-square rounded-2xl overflow-hidden border border-[var(--border)] bg-[var(--panel)]">
            <img src={`https://picsum.photos/seed/about-${n}/600/600`} alt="About image" className="w-full h-full object-cover opacity-90" loading="lazy"/>
          </div>
        ))}
      </div>
    </section>
  )
}
