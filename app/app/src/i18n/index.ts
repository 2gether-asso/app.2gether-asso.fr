import en from './en'
import fr from './fr'
import I18n from './type'

const locales = { en, fr } as const

function i18n(
	locale: keyof typeof locales,
	key: keyof I18n,
	...args: string[]
)
{
	const value = locales[locale]?.[key] ?? key
	return value.replace(/{(\d+)}/g, (match, number) =>
		typeof args[number] != 'undefined'
			? args[number]
			: match
	)
}

type Tail<T extends any[]> = ((...args: T) => any) extends (arg: any, ...tail: infer U) => any ? U : never

function i18nFactory(locale: Parameters<typeof i18n>[0])
{
	return (...args: Tail<Parameters<typeof i18n>>) => i18n(locale, ...args)
}

export default i18n

export { i18nFactory }
