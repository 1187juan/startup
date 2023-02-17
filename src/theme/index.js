import { extendTheme, withDefaultColorScheme } from '@chakra-ui/react'

import { breakpoints } from './breakpoints'
import { colors } from './colors'
import { components } from './components'
import { config } from './config'
import { fonts } from './fonts'
import { semanticTokens } from './semanticTokens'
import { styles } from './styles'

export const theme = extendTheme(
	{
		colors,
		config,
		semanticTokens,
		styles,
		breakpoints,
		fonts,
		components,
	},
	withDefaultColorScheme({
		colorScheme: 'primary',
		components: ['Switch', 'Slider'],
	})
)
