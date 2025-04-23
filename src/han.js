/* @license
https://github.com/lizongying/js-han
*/

import {data} from './data.js'

class Han {
    static _dataset = {};

    static _instance = null;

    constructor() {
        if (Han._instance) {
            return Han._instance;
        }

        this._initializeData();

        Han._instance = this;
    }

    _initializeData() {
        Han._dataset = data
    }

    static getInstance() {
        if (!Han._instance) {
            new Han();
        }
        return Han._instance;
    }

    _predict(idx, original, length) {
        const character = original[idx];
        if (character in Han._dataset) {
            const keys = Han._dataset[character][0];
            const current = Han._dataset[character][1];
            for (const i in keys) {
                if (current[i].length > 0) {
                    for (const arr of current[i]) {
                        const start_offset = parseInt(arr[0]);
                        const end_offset = parseInt(arr[1]);

                        const start_idx = idx + start_offset;
                        const end_idx = idx + end_offset;

                        if (start_idx < 0) continue;
                        if (end_idx > length) continue;
                        if (end_idx <= start_idx) continue;
                        if (original.slice(start_idx, end_idx) === arr[2]) {
                            return keys[i];
                        }
                    }
                } else {
                    return keys[i];
                }
            }
        }

        return original[idx];
    }

    _match(idx, original, length) {
        const character = original[idx];
        if (character in Han._dataset) {
            const arr = Han._dataset[character][0];
            return arr.length === 1 ? arr[0] : this._predict(idx, original, length);
        }
        return character;
    }

    addRule(rule) {
        const [simplified, ...rest] = rule.split(',');
        if (simplified in Han._dataset) {
            const idx = Han._dataset[simplified][0].indexOf(rest[0]);
            if (idx > -1) {
                Han._dataset[simplified][1][idx].unshift(...rest.slice(1).map(x => x.split('|')));
            }
        }
    }

    toTraditional(original) {
        const length = original.length;
        return [...original].map((char, idx) => this._match(idx, original, length)).join('');
    }
}

export default Han;
if (typeof module !== 'undefined' && module.exports) {
    module.exports = Han;
}