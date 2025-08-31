import React from 'react'
import { dict, Lang } from './i18n'
import { pages, PageKey } from './routes'
import { useSEO } from './seo'
import Header from './components/Header'
import Footer from './components/Footer'
import LeadModal from './components/LeadModal'
import About from './pages/About'
import Services from './pages/Services'
import Materials from './pages/Materials'
import Portfolio from './pages/Portfolio'
import NotFound from './pages/NotFound'
export default function App(){
  const [lang,setLang]=React.useState<Lang>('ua')
  const t = dict[lang]
  const [route,setRoute]=React.useState<PageKey>(pages.SERVICES)
  const [leadOpen,setLeadOpen]=React.useState(false)
  useSEO({ [pages.ABOUT]: lang==='ua'?'Про нас':'About', [pages.PORTFOLIO]: lang==='ua'?'Портфоліо':'Portfolio', [pages.SERVICES]: lang==='ua'?'Архітектурний дизайн':'Architectural Design', [pages.MATERIALS]: lang==='ua'?'Оздоблювальні матеріали':'Finishing Materials', [pages.NOTFOUND]: '404', }[route], 'Design services, sintered stone, natural stone, glass systems, wood finishes')
  React.useEffect(()=>{ const tmr=setTimeout(()=>setLeadOpen(true),8000); return ()=>clearTimeout(tmr) },[])
  React.useEffect(()=>{ const handler=()=>setRoute(pages.PORTFOLIO); const evt=(e:Event)=>handler(); window.addEventListener('nav:portfolio', evt as any); return ()=>window.removeEventListener('nav:portfolio', evt as any); },[])
  return (<div className="min-h-screen">
    <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 bg-white text-black px-3 py-2 rounded-md shadow">Skip to content</a>
    <Header lang={lang} setLang={setLang} t={t} route={route} onNav={setRoute} onOpenLead={()=>setLeadOpen(true)} />
    <main id="main">
      {route===pages.ABOUT && <About t={t}/>} 
      {route===pages.SERVICES && <Services t={t} onOpenLead={()=>setLeadOpen(true)} />} 
      {route===pages.MATERIALS && <Materials t={t} onOpenLead={()=>setLeadOpen(true)} />} 
      {route===pages.PORTFOLIO && <Portfolio t={t}/>} 
      {route===pages.NOTFOUND && <NotFound t={t} onBack={()=>setRoute(pages.SERVICES)} />} 
    </main>
    <Footer t={t} onNav={setRoute} />
    <LeadModal open={leadOpen} setOpen={setLeadOpen} t={t} />
  </div>)
}
