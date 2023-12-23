import defaultLocale from './locales/en'

const defaultLocaleKey = 'en' as const

type I18n = Readonly<Record<keyof typeof defaultLocale, string>>

export default I18n

export { defaultLocaleKey }
