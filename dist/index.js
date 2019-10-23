"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
async function timeIt(label, fn, log = true) {
    const start = Date.now();
    const returnVal = await fn();
    const ms = Date.now() - start;
    const asString = `${(ms / 1000).toFixed(3)}s`;
    if (log) {
        console.log(`${label}: ${asString}`);
    }
    return {
        returnVal,
        ms,
        asString
    };
}
exports.default = timeIt;
//# sourceMappingURL=index.js.map