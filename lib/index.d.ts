import { StyleObject } from "./types";
import facepaint from "facepaint";
export declare const createMediaQuery: (breakpoints?: number[]) => (style: TemplateStringsArray | StyleObject, ...args: any[]) => facepaint.DynamicStyle[];
export declare const createCss: (css: (...args: any[]) => string, breakpoints?: number[]) => (style: TemplateStringsArray | StyleObject, ...args: any[]) => string;
