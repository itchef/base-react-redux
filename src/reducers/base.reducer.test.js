import baseReducer from "./base.reducer";

describe('Base Reducer', function () {
    it('should provide count as zero for default state', function () {
        expect(baseReducer().count).toEqual(0);
    });
});
