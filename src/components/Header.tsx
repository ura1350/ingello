import React from 'react'
import { Menu, X, Globe, CheckCircle } from 'lucide-react'
import { pages, PageKey } from '../routes'
import { dict, Lang } from '../i18n'
export default function Header({ lang, setLang, t, route, onNav, onOpenLead }:{ lang:Lang; setLang:(l:Lang)=>void; t:any; route:PageKey; onNav:(p:PageKey)=>void; onOpenLead:()=>void; }){
  const [open,setOpen]=React.useState(false)
  const navLink=(label:string,r:PageKey)=> (<button key={r} onClick={()=>{onNav(r);setOpen(false)}} className={`px-3 py-2 rounded-xl transition-colors ${route===r?'bg-white/10 text-white':'hover:bg-white/5'}`} aria-current={route===r?'page':undefined}>{label}</button>)
  return (<header className="sticky top-0 z-40 backdrop-blur border-b border-[var(--border)] bg-black/20">
    <div className="container py-3 flex items-center justify-between">
      <div className="font-semibold tracking-tight text-lg select-none"><span className="px-2 py-1 rounded-lg bg-white text-black">ROK</span><span className="ml-1 text-white">SOLANA</span></div>
      <nav className="hidden md:flex items-center gap-2">
        {navLink(t.nav.about,pages.ABOUT)}{navLink(t.nav.portfolio,pages.PORTFOLIO)}{navLink(t.nav.services,pages.SERVICES)}{navLink(t.nav.materials,pages.MATERIALS)}
      </nav>
      <div className="flex items-center gap-2">
        <button onClick={()=>setLang(lang==='ua'?'en':'ua')} className="inline-flex items-center gap-2 px-2 py-1 rounded-lg border border-[var(--border)] hover:bg-white/5" aria-label="Switch language"><Globe className="w-4 h-4"/><span className="text-sm font-medium">{dict[lang].langLabel}</span></button>
        <button onClick={onOpenLead} className="hidden sm:inline-flex items-center gap-2 px-3 py-2 rounded-xl bg-[var(--accent2)] text-white hover:opacity-90"><CheckCircle className="w-4 h-4"/> <span>{t.hero.cta}</span></button>
        <button className="md:hidden p-2" aria-label="Menu" onClick={()=>setOpen(!open)}>{open?<X/>:<Menu/>}</button>
      </div>
    </div>
    {open && (<div className="md:hidden border-t border-[var(--border)] px-3 pb-3 space-y-2">
      <div className="flex flex-wrap gap-2 mt-2">{[[t.nav.about,pages.ABOUT],[t.nav.portfolio,pages.PORTFOLIO],[t.nav.services,pages.SERVICES],[t.nav.materials,pages.MATERIALS]].map(([label,r])=> (<button key={String(r)} onClick={()=>{onNav(r as PageKey);setOpen(false)}} className="px-3 py-2 rounded-xl bg-white/5 w-full text-left">{String(label)}</button>))}</div>
    </div>)}
  </header>)
}
