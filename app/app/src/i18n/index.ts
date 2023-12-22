import en from './en'
import fr from './fr'

const locales = { en, fr } as const

function i18n(
	locale: keyof typeof locales,
	key: keyof typeof locales[typeof locale],
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

export default i18n
