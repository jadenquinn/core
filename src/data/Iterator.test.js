/* @flow */

import {
    assert,
} from "chai";
import {
    describe,
    it,
} from "mocha";

import Iterator from "./Iterator";

describe("data/Iterator", () => {
    const itr = new Iterator([
        0,
        1,
        2,
    ]);
    
    it("next -> 0", () => {
        assert.deepEqual(itr.next(), {
            done: false,
            value: 0,
        });
    });
    
    it("next -> 1", () => {
        assert.deepEqual(itr.next(), {
            done: false,
            value: 1,
        });
    });
    
    it("next -> 2", () => {
        assert.deepEqual(itr.next(), {
            done: true,
            value: 2,
        });
    });
});