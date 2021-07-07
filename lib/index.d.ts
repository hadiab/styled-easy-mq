import { CreateOptions, StyleObject } from "./types";
import * as facepaint from "facepaint";
declare type ReturnType<T> = T extends undefined ? (style: TemplateStringsArray | StyleObject, ...args: any[]) => facepaint.DynamicStyle[] : (style: TemplateStringsArray | StyleObject, ...args: any[]) => string;
export declare const createMediaQuery: (options?: CreateOptions | undefined) => (style: TemplateStringsArray | StyleObject, ...args: any[]) => string;
export {};
