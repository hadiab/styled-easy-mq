import facepaint from "facepaint";
import * as CSS from "csstype";
interface CSSProperties extends CSS.Properties<string | number> {
}
declare type StyleObject = {
    [K in keyof CSSProperties]?: CSSProperties[K] | Array<CSSProperties[K]>;
};
export declare const createMediaQuery: (breakpoints?: number[]) => (style: TemplateStringsArray | StyleObject, ...args: any[]) => facepaint.DynamicStyle[];
export declare const createCss: (css: (...args: any[]) => string, breakpoints?: number[]) => (style: TemplateStringsArray | StyleObject, ...args: any[]) => string;
declare const _default: {
    createMediaQuery: (breakpoints?: number[]) => (style: StyleObject | TemplateStringsArray, ...args: any[]) => facepaint.DynamicStyle[];
    createCss: (css: (...args: any[]) => string, breakpoints?: number[]) => (style: StyleObject | TemplateStringsArray, ...args: any[]) => string;
};
export default _default;
