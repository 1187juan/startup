import { ChakraProvider } from '@chakra-ui/react'

import { Home } from './pages'
import { theme } from './theme'

export const App = () => {
	return (
		<ChakraProvider theme={theme}>
			<Home />
		</ChakraProvider>
	)
}
