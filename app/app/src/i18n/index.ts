const locales = {}

function i18n(locale: string, key: string, ...args: any[]): string
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
