import i18nConfig from '/config/i18n'

import defaultLocaleData from './locales/en'

const defaultLocale = i18nConfig.defaultLocale

const defaultLocaleKey = 'en' as const

type I18n = Readonly<Record<keyof typeof defaultLocaleData, string>>

export default I18n

export {
	defaultLocale,
	defaultLocaleKey,
}
