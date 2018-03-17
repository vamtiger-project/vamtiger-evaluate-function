import { PythonVersion } from '../enum';

export interface MainParams {
    formula: string;
    x: string | number;
    python?: boolean;
    keepAlive?: boolean;
}

export interface GetValueParams {
    formula: MainParams['formula'];
}

export interface GetPythonParams {
    python?: PythonVersion
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