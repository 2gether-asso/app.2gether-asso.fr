import type { I18n, Diff } from '../type'

const locale =
{
	'What\'s up on 2GETHER in 2024?': 'Quoi de neuf sur 2GETHER en 2024 ?',
	'Visit our website': 'Visite notre site web',
	'Join our Discord': 'Rejoins notre Discord',
	'Over the next few years, 2GETHER is evolving!': 'Au cours des prochaines années, 2GETHER évolue !',
	'On the agenda:': 'Au programme :',
	'The 2GETHER bot always online!': 'Le bot 2GETHER toujours en ligne !',
	'Recurring giveaways coming back!': 'Le retour des Giveaways régulier !',
	'Special private or semi-private channels, called Bubbles!': 'Des channels spéciaux privés ou semi privés, nommés Bulles !',
	'The possibility for members to create activities!': 'La possibilités pour les membres de créer des activités !',
	'Meet Up 2024': 'Meet Up 2024',
	'Events agenda redesign, with a monthly schedule to better organize ourselves!': 'Refonte de la programmation des événements, avec un planning mensuel pour mieux s\'organiser !',
	'Discord server overhaul to include mascots and improve ergonomics': 'Refonte du serveur Discord pour inclure les mascottes et améliorer l\'ergonomie',
	'New event types managed by members or consultants, such as quiz nights': 'De nouveaux types d\'événements gérés par des membres ou des consultants, tels que des soirées QVGDM',
	'Step-by-step launch of announced projects during 2MORROW': 'Le lancement progressif des projets annoncés lors de 2MORROW',
	'An activity time calculation system, transforming your time on 2GETHER into 2GETHER money!': 'Un système de calcul d\'activité, transformant votre temps sur 2GETHER en argent 2GETHER !',
	'2COINS will allow you to create activities, rent bubbles, participate in giveaways, place pixels on the place canvas, or other interactions on 2GETHER applications!': 'Les 2COINS vous permettrons de créer des activités, louer des bulles, participer au giveaways, placer des pixels sur le place, ou d\'autres intéractions sur les applications 2GETHER !',
	'In short, a lot of things are coming in the next few years!': 'En bref, beaucoup de choses arrivent ces prochaines années !',
} as const

// Static type check
export default locale satisfies
	// Check for missing keys:
	Readonly<Record<Diff<keyof I18n, keyof typeof locale>, string>> &
	// Check for extra keys:
	Readonly<Record<Diff<keyof typeof locale, keyof I18n>, never>>
