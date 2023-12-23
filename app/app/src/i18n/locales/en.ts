const defaultLocale =
[
	'What\'s up on 2GETHER in 2024?',
	'Visit our website',
	'Join our Discord',
	'Over the next few years, 2GETHER is evolving!',
	'On the agenda:',
	'The 2GETHER bot always online!',
	'Recurring giveaways coming back!',
	'Special private or semi-private channels, called Bubbles!',
	'The possibility for members to create activities!',
	'Meet Up 2024',
	'Events agenda redesign, with a monthly schedule to better organize ourselves!',
	'Discord server overhaul to include mascots and improve ergonomics',
	'New event types managed by members or consultants, such as quiz nights',
	'Step-by-step launch of announced projects during 2MORROW',
	'An activity time calculation system, transforming your time on 2GETHER into 2GETHER money!',
	'2COINS will allow you to create activities, rent bubbles, participate in giveaways, place pixels on the place canvas, or other interactions on 2GETHER applications!',
	'In short, a lot of things are coming in the next few years!',
] as const

type Keys = typeof defaultLocale[number]
type Type = { [key in Keys]: key }

// Default locale uses the key as the value
const locale = defaultLocale
	.reduce<Type>((acc, key) =>
		{
			(acc as any)[key] = key
			return acc
		},
		{} as Type,
	)

export default locale as Readonly<typeof locale>
