import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import typescript2 from 'rollup-plugin-typescript2';

export default [{
    input: './src/2.ts',
    output: [
        {
            format: 'es',
            file: 'dist/2.js'
        }
    ],

    plugins: [
        commonjs(),
        resolve({browser: true}),
        typescript2(),
    ],
}]
