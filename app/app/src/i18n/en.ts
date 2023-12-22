const defaultLocale =
[
	'What is {0}?',
	'Visit our website',
	'Join our Discord',
	'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus cursus magna at libero tristique, faucibus ullamcorper orci volutpat. Integer aliquet nulla ut ante porttitor faucibus. Sed faucibus consectetur pellentesque. Proin malesuada purus vel posuere sollicitudin. Donec vel efficitur magna. Nullam vel convallis tortor. Sed eu scelerisque purus, vitae iaculis felis.',
	'Donec suscipit nisi et tincidunt eleifend. Mauris sed massa et magna interdum semper a quis neque. Etiam posuere volutpat mauris, consectetur cursus justo viverra vel. Nunc hendrerit sapien nec augue porta, sed congue est ornare.',
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
