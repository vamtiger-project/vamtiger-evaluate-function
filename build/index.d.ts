declare const _default: (params: Params) => Promise<{
    formula: {
        raw: string;
        substituted: string;
        simplified: any;
    };
    value: any;
}>;
export default _default;
export interface Params {
    formula: string;
    x: string | number;
}
export interface Result {
    formula: Formula;
    value: any;
}
export interface Formula {
    raw: string;
    substituted: string;
    simplified: any;
}
