import { assert } from "chai";

import { draftSum } from "./solution";

describe("draftSum", () => {
	it("test", () => {
		assert.equal(draftSum(89, 1), 90, "draftSum(89, 1)");
		assert.equal(draftSum(92, 1), 93, "draftSum(92, 1)");
		assert.equal(draftSum(695, 2), 697, "draftSum(695, 2)");
		assert.equal(draftSum(46288, -8), 46280, "draftSum(46288, -8) ");
	});
});
