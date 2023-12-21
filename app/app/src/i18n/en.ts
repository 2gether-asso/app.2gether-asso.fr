const defaultLocale =
[
	'What is {0}?',
] as const

// Default locale uses the key as the value
const locale = defaultLocale
	.reduce<Record<string, string>>((acc, key) =>
		{
			acc[key] = key
			return acc
		},
		{},
	)

// Static type checking: key === value
export default locale satisfies Record<keyof typeof locale, keyof typeof locale>
