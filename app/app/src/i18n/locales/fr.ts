import I18n from '../type'

const locale =
{
	'What\'s up on 2GETHER in 2024?': 'Quoi de neuf sur 2GETHER en 2024 ?',
	'Visit our website': 'Visite notre site web',
	'Join our Discord': 'Rejoins notre Discord',
} as const

// Static type check
export default locale satisfies Partial<I18n>
