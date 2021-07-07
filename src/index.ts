import { CreateOptions, StyleObject } from "./types"
import * as facepaint from "facepaint"

const cssToObject = (cssStr: string, ...args: any[]): StyleObject => {
	const regex = /([\w-]*)\s*:\s*([^;]*)/g;
	let match: any = null
	let properties: any = {}
	let argsCounter = 0

	// eslint-disable-next-line no-cond-assign
	while(match = regex.exec(cssStr)) {
		let value = match[2].trim()

		if(value === `{${argsCounter}}`) {
			value = args[argsCounter]
			argsCounter++
		}

		properties[match[1]] = value
	}

	return properties
}

const getMedia = (bp: number | string) => {
	const value = (typeof bp === "string") ? bp : `${bp}px`
	return `@media (min-width: ${value})`
}

const initOptions: CreateOptions = { breakpoints: [576, 768, 992, 1200] }

export const createMediaQuery = (options: CreateOptions = initOptions) => {
	const { breakpoints = [576, 768, 992, 1200] } = options

	const facepaintMQ = facepaint(breakpoints.map(bp => getMedia(bp)))

	const makeStyle = (style: TemplateStringsArray | StyleObject) => {
		const css = initOptions.css

		if(css && typeof css === "function") {
			return css(facepaintMQ(style))
		}

		return facepaintMQ(style)
	}

	const mq = (style: TemplateStringsArray | StyleObject, ...args: any[]) => {
		if(Array.isArray(style)) {
			const cssStr = style.map((item, i) => item + (args[i] ? `{${i}}` : ""))
			const cssObj = cssToObject(cssStr.join(""), ...args)
			return makeStyle(cssObj)
		}

		return makeStyle(style)
	}

	return mq
}
