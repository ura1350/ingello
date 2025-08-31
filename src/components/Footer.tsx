import React from 'react'
import { pages, PageKey } from '../routes'
export default function Footer({ t, onNav }:{ t:any; onNav:(p:PageKey)=>void }){
  return (<footer className="mt-16 border-t border-[var(--border)] bg-black/20">
    <div className="container py-10 grid grid-cols-12 gap-6">
      <div className="col-span-12 md:col-span-6">
        <div className="font-semibold tracking-tight text-lg select-none"><span className="px-2 py-1 rounded-lg bg-white text-black">ROK</span><span className="ml-1">SOLANA</span></div>
        <p className="text-[var(--subtext)] mt-2 max-w-md">European materials. Thoughtful design. Reliable delivery.</p>
        <div className="mt-4 text-xs text-[var(--subtext)]">© {new Date().getFullYear()} Roksolana Design. All rights reserved.</div>
      </div>
      <div className="col-span-6 md:col-span-3"><h4 className="font-medium mb-2">Site</h4><ul className="space-y-2 text-sm">
        <li><button onClick={()=>onNav(pages.ABOUT)} className="hover:underline">{t.nav.about}</button></li>
        <li><button onClick={()=>onNav(pages.PORTFOLIO)} className="hover:underline">{t.nav.portfolio}</button></li>
        <li><button onClick={()=>onNav(pages.SERVICES)} className="hover:underline">{t.nav.services}</button></li>
        <li><button onClick={()=>onNav(pages.MATERIALS)} className="hover:underline">{t.nav.materials}</button></li>
      </ul></div>
      <div className="col-span-6 md:col-span-3"><h4 className="font-medium mb-2">Legal</h4><ul className="space-y-2 text-sm text-[var(--subtext)]"><li>Licensing of partner assets required</li><li>Privacy policy (add)</li><li>Terms of service (add)</li></ul></div>
    </div>
  </footer>)
}
