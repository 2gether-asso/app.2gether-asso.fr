const defaultLocale =
[
	'What is {0}?',
] as const

type Keys = typeof defaultLocale[number]
type Type = Record<Keys, Keys>

// Default locale uses the key as the value
const locale = defaultLocale
	.reduce<Partial<Type>>((acc, key) =>
		{
			acc[key] = key
			return acc
		},
		{},
	)

export default locale as Readonly<Type>
