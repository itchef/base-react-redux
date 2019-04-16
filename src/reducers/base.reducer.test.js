import baseReducer from './base.reducer';

describe('Base Reducer', () => {
  it('should provide count as zero for default state', () => {
    expect(baseReducer().count).toEqual(0);
  });
});
