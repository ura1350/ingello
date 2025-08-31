import React from 'react'
import { X, ArrowRight } from 'lucide-react'
export default function LeadModal({ open, setOpen, t }:{ open:boolean; setOpen:(v:boolean)=>void; t:any }){
  const [step,setStep]=React.useState(0); const [done,setDone]=React.useState(false)
  const steps = [
    { name:'type', label:'Тип проєкту / Project type', options:['Kitchen','Bathroom','Facade','Office / Retail','Other'] },
    { name:'material', label:'Матеріал / Material', options:['Sintered stone','Porcelain slab','Quartzite','Marble','Glass partitions','Wood panels'] },
    { name:'style', label:'Стиль / Style', options:['Minimal','Classic','Industrial','Scandinavian','Other'] },
    { name:'budget', label:'Бюджет / Budget', options:['$','$$','$$$','Custom'] },
    { name:'contact', label:'Контакт / Contact', form:true },
  ] as const
  const [data,setData]=React.useState<any>({})
  const onChoose=(v:string)=>{ setData({ ...data, [steps[step].name]: v }); setStep(step+1) }
  const onSubmit=(e:React.FormEvent)=>{ e.preventDefault(); console.log('Lead:',data); setDone(true); setTimeout(()=>setOpen(false),1200) }
  if(!open) return null
  return (<div role="dialog" aria-modal className="fixed inset-0 z-50 grid place-items-center p-4">
    <div className="absolute inset-0 bg-black/60" onClick={()=>setOpen(false)} />
    <div className="relative w-full max-w-xl rounded-2xl surface p-6">
      <button className="absolute right-3 top-3 p-2" aria-label="Close" onClick={()=>setOpen(false)}><X/></button>
      <h3 className="text-lg font-semibold">{t.lead.title}</h3>
      <p className="text-sm text-[var(--subtext)]">{t.lead.subtitle}</p>
      {!done ? (<div className="mt-4">
        {step < steps.length-1 ? (<div>
          <div className="text-sm text-[var(--subtext)] mb-2">{steps[step].label}</div>
          <div className="flex flex-wrap gap-2">{steps[step].options?.map(opt=> (<button key={opt} onClick={()=>onChoose(opt)} className="btn btn-ghost">{opt}</button>))}</div>
          <div className="mt-4 text-xs text-[var(--subtext)]">{step+1}/5</div>
        </div>) : (<form onSubmit={onSubmit} className="grid grid-cols-12 gap-3">
          <label className="col-span-12 sm:col-span-6"><span className="text-sm">Name</span><input required className="mt-1 w-full rounded-xl border border-[var(--border)] bg-transparent px-3 py-2" onChange={e=>setData({...data,name:(e.target as HTMLInputElement).value})} /></label>
          <label className="col-span-12 sm:col-span-6"><span className="text-sm">Email</span><input type="email" required className="mt-1 w-full rounded-xl border border-[var(--border)] bg-transparent px-3 py-2" onChange={e=>setData({...data,email:(e.target as HTMLInputElement).value})} /></label>
          <label className="col-span-12"><span className="text-sm">Notes</span><textarea rows={3} className="mt-1 w-full rounded-xl border border-[var(--border)] bg-transparent px-3 py-2" onChange={e=>setData({...data,notes:(e.target as HTMLTextAreaElement).value})} /></label>
          <div className="col-span-12 flex items-center justify-between"><button type="button" onClick={()=>setStep(step-1)} className="btn btn-ghost">{t.lead.start}</button>
            <button type="submit" className="btn btn-primary">{t.lead.done} <ArrowRight className="w-4 h-4"/></button></div>
        </form>)}
      </div>) : (<div className="mt-6 p-4 rounded-xl bg-green-900/30 border border-green-800 text-green-300">Дякуємо! Ми зв'яжемося найближчим часом.</div>)}
    </div>
  </div>)
}
