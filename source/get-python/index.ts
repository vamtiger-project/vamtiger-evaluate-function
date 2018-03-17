import { resolve as resolvePath } from 'path';
import { pythonBridge, PythonBridge } from 'python-bridge';
import getFileText from 'vamtiger-get-file-data';
import { GetPythonParams as Params } from '../types';

let Python: any;

export default async (params: Params) => {
    const python = params.python
    const options = !Python ? {} as Params : undefined;
    const getPython = !Python || !Python.connected;
    
    let pythonCode;
    let pythonCodePath;

    if (getPython) {
        pythonCodePath = resolvePath(
            __dirname,
            '../../python/index.py'
        );
        pythonCode = await getFileText(pythonCodePath, 'utf-8');

        options ? options.python = python : undefined;

        Python = pythonBridge(options);

        await Python.ex([`${pythonCode}`]);
    }

    return Python;
}