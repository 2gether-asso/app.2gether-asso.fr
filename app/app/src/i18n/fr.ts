import I18n from './type'

const locale =
{
	'What is {0}?': 'Qu\'est-ce que {0} ?',
} as const

// Static type check
export default locale satisfies I18n
