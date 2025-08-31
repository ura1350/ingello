import React from 'react'
export default function NotFound({ t, onBack }:{ t:any; onBack:()=>void }){
  return (<section className="py-24 text-center container">
    <h1 className="h2">{t.notfound.title}</h1>
    <button onClick={onBack} className="mt-4 btn btn-primary">{t.notfound.back}</button>
  </section>)
}
