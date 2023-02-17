import { inputAnatomy } from '@chakra-ui/anatomy'
import { createMultiStyleConfigHelpers } from '@chakra-ui/react'

const { definePartsStyle, defineMultiStyleConfig } =
	createMultiStyleConfigHelpers(inputAnatomy.keys)

const baseStyle = definePartsStyle({
	field: {
		'&::placeholder': { color: 'onSurfaceMedium' },
	},
})

export const Input = defineMultiStyleConfig({ baseStyle })
