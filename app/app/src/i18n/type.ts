import defaultLocale from './locales/en'

type I18n = Readonly<Record<keyof typeof defaultLocale, string>>

export default I18n
