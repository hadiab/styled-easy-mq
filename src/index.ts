import { StyleObject } from "./types"
import * as facepaint from "facepaint"

const cssToObject = (cssStr: string, ...args: any[]) => {
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

export const createMediaQuery = (breakpoints: number[] = [576, 768, 992, 1200]) => {
	const facepaintMQ = facepaint(breakpoints.map(bp => `@media (min-width: ${bp}px)`))

	const mq = (style: TemplateStringsArray | StyleObject, ...args: any[]) => {
		if(Array.isArray(style)) {
			const cssStr = style.map((item, i) => item + (args[i] ? `{${i}}` : ""))
			const cssObj = cssToObject(cssStr.join(""), ...args)
			return facepaintMQ(cssObj)
		}

		return facepaintMQ(style)
	}

	return mq
}
