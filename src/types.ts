import * as CSS from "csstype"

interface CSSProperties extends CSS.Properties<string | number> {}

export type StyleObject = {
	[K in keyof CSSProperties]?: CSSProperties[K] | Array<CSSProperties[K]>
}