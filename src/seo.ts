import React from 'react'
export function ensureMeta(attr: string, value: string) {
  let el = document.querySelector(`meta[${attr}="${value}"]`)
  if (!el) { el = document.createElement('meta'); el.setAttribute(attr, value); document.head.appendChild(el) }
  return el as HTMLMetaElement
}
export function useSEO(title?: string, description?: string) {
  React.useEffect(() => {
    if (title) document.title = `${title} · Roksolana Design`
    if (description) {
      const metaDesc = (document.querySelector('meta[name="description"]') as HTMLMetaElement) || (() => {
        const m = document.createElement('meta'); m.setAttribute('name', 'description'); document.head.appendChild(m); return m
      })()
      metaDesc.setAttribute('content', description)
    }
    ensureMeta('property','og:title').setAttribute('content', title || 'Roksolana Design')
    ensureMeta('property','og:description').setAttribute('content', description || 'Design, stone, glass & wood')
  }, [title, description])
}
