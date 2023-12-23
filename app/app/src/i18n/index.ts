import i18nConfig from '/config/i18n'

import en from './locales/en'
import fr from './locales/fr'
import I18n, { defaultLocaleKey } from './type'

const defaultLocale = i18nConfig.defaultLocale

const locales = { en, fr } as const

function i18n(
	locale: keyof typeof locales,
	key: keyof I18n,
	...args: string[]
)
{
	const value = (locales[locale][key] ?? key) as I18n[keyof I18n]

	if (typeof value !== 'string')
	{
		return value
	}

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

function getLocaleByPath(path: string): string | undefined
{
	for (const locale of i18nConfig.locales)
	{
		if (typeof locale !== 'string')
		{
			if (locale.path === path)
			{
				const code = locale.codes.at(0)
				return code
			}
		}
		else if (locale === path)
		{
			return locale
		}
	}

	return undefined
}

function getLocaleByUrl(url: URL | string): string | undefined
{
	const urlParts = typeof url === 'string' ? url.split('/') : url.pathname.split('/')
	for (const part of urlParts)
	{
		const locale = getLocaleByPath(part)
		if (locale)
		{
			return locale
		}
	}

	return undefined
}

function getUrlWithoutLocale(url: URL | string): string | undefined
{
	const urlPathnames = []
	const urlParts = typeof url === 'string' ? url.split('/') : url.pathname.split('/')

	let i = 0
	while (i < urlParts.length)
	{
		const locale = getLocaleByPath(urlParts[i])
		if (locale)
		{
			i++
			continue
		}

		urlPathnames.push(urlParts[i])
		i++
	}
	while (i < urlParts.length)
	{
		urlPathnames.push(urlParts[i])
		i++
	}

	return urlPathnames.join('/')
}

export default i18n

export {
	defaultLocale,
	defaultLocaleKey,
	i18nFactory,
	getLocaleByPath,
	getLocaleByUrl,
	getUrlWithoutLocale,
}
