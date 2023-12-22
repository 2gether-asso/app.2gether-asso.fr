import I18n from './type'

const locale =
{
	'What is {0}?': 'Qu\'est-ce que {0} ?',
	'Visit our website': 'Visite notre site web',
	'Join our Discord': 'Rejoins notre Discord',
} as const

// Static type check
export default locale satisfies Partial<I18n>
