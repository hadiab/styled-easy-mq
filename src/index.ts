import { StyleObject } from "./types"
import facepaint from "facepaint"

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

const getFacepaint = (breakpoints: number[]) => facepaint(breakpoints.map(bp => getMedia(bp)))

const getCssObject = (style: TemplateStringsArray | StyleObject, ...args: any[]) => {
	if(Array.isArray(style)) {
		const cssStr = style.map((item, i) => item + (args[i] ? `{${i}}` : ""))
		const cssObj = cssToObject(cssStr.join(""), ...args)
		return cssObj
	}

	return style
}

export const createMediaQuery = (breakpoints: number[] = [576, 768, 992, 1200]) => {
	const mq = getFacepaint(breakpoints)

	return (style: TemplateStringsArray | StyleObject, ...args: any[]) => {
		return mq(getCssObject(style, ...args))
	}
}

export const createCss = (css: (...args: any[]) => string, breakpoints: number[] = [576, 768, 992, 1200]) => {
	const mq = getFacepaint(breakpoints)

	return (style: TemplateStringsArray | StyleObject, ...args: any[]) => {
		return css(mq(getCssObject(style, ...args)))
	}
}
