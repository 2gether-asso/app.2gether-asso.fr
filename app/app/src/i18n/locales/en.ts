const defaultLocale =
[
	'What\'s up on 2GETHER in 2024?',
	'Visit our website',
	'Join our Discord',
] as const

type Keys = typeof defaultLocale[number]
type Type = { [key in Keys]: key }

// Default locale uses the key as the value
const locale = defaultLocale
	.reduce((acc, key) =>
		{
			acc[key] = key
			return acc
		},
		{},
	) as Type

export default locale as Readonly<typeof locale>
