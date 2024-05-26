import run from '@ds/esbuild-config'
import pkg from './themes/package.json' assert { type: 'json' }
import { vanillaExtractPlugin } from '@vanilla-extract/esbuild-plugin'

const config = {
	plugins: [
		vanillaExtractPlugin(),
	],
}

run({
	pkg,
	config
})