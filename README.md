Use `npm run rollup1`, `npm run rollup2` and `npm run rollup3` to compile all 3 source files.

1.ts fails for me because:
`[!] (rpt2 plugin) Error: /home/luca/Dokumente/jssha/src/1.ts(1,8): semantic error TS1192 Module '"/home/luca/Dokumente/jssha/node_modules/js-sha256/index"' has no default export.`

2.ts fails for me because:
`[!] Error: 'sha256' is not exported by node_modules/js-sha256/src/sha256.js`

3.ts bundels fine:
Opening index.html in a browser now shows a working 3.js in the console output.


Now run tsc (`npm run tsc`) on all three files directly (without the bundler).

1.ts fails for me because:
`src/1.ts:1:8 - error TS1192: Module '"/home/luca/Dokumente/jssha/node_modules/js-sha256/index"' has no default export.` (same as above)

2.ts transpiles fine:
Running node shows a working 2.js in the output.

3.ts transpiles fine:
Running node fails with `TypeError: sha.default is not a function`.