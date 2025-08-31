export const pages = { ABOUT:'about', PORTFOLIO:'portfolio', SERVICES:'services', MATERIALS:'materials', NOTFOUND:'404' } as const
export type PageKey = typeof pages[keyof typeof pages]
