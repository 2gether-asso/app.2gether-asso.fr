import en from './en'
import fr from './fr'

const locales = { en, fr } as const

function i18n(locale: keyof typeof locales, key: string, ...args: any[]): string
{
  	return locales[locale]?.[key]
		?.replace(/{(\d+)}/g, (match, number) =>
			typeof args[number] != 'undefined'
				? args[number]
				: match
		)
		?? key
}

export default i18n
