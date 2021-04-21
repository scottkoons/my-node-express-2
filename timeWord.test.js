// timeWord tests

const timeWord = require('./timeWord');

describe('#timeword', () => {
  test('it is a function', () => {
    expect(typeof timeWord).toBe('function');
  });

  test('returns midnight for 00:00', () => {
    expect(timeWord('00:00')).toEqual('midnight');
  });

  test('returns noon for 12:00', () => {
    expect(timeWord('12:00')).toEqual('noon');
  });

  test('returns correct time when all digits in use', () => {
    expect(timeWord('11:11')).toEqual(`eleven eleven am`);
    expect(timeWord('23:11')).toEqual(`eleven eleven pm`);
  });

  test('has oclock on the hour', () => {
    expect(timeWord('11:00')).toEqual(`eleven o'clock am`);
    expect(timeWord('23:00')).toEqual(`eleven o'clock pm`);
  });

  test('has oh when minutes are less than 10', () => {
    expect(timeWord('11:01')).toEqual(`eleven oh one am`);
    expect(timeWord('23:01')).toEqual(`eleven oh one pm`);
  });

  test('has correct teen words', () => {
    expect(timeWord('12:15')).toEqual(`twelve fifteen pm`);
  });

  test('has no single minutes when equal to zero', () => {
    expect(timeWord('12:30')).toEqual(`twelve thirty pm`);
  });

});