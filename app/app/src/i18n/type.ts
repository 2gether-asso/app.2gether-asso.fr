import defaultLocale from './locales/en'

type I18n = Readonly<Record<keyof typeof defaultLocale, string>>

const defaultLocaleKey = 'en' as const

export default I18n

export { defaultLocaleKey }
