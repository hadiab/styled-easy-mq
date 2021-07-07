import { CreateOptions, StyleObject } from "./types";
import * as facepaint from "facepaint";
export declare const createMediaQuery: (options?: CreateOptions) => (style: TemplateStringsArray | StyleObject, ...args: any[]) => string | facepaint.DynamicStyle[];
