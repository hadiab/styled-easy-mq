import * as CSS from "csstype";
interface CSSProperties extends CSS.Properties<string | number> {
}
export declare type StyleObject = {
    [K in keyof CSSProperties]?: CSSProperties[K] | Array<CSSProperties[K]>;
};
export {};
