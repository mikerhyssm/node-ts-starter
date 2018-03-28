import { assert } from 'chai';
import  App  from "./App";


describe('input', () => {
  it('should throw error if input is undefined or null', () => {
    assert.throws(() => {App.splitInput(undefined)});
    assert.throws(() => {App.splitInput(null)});
  });

  it('should throw error if input cannot be split', () => {
    assert.throws(() => {App.splitInput('1234')});
  });

  it('should split input', () => {
    const time = "08:30";

    const output = App.splitInput(time);

    assert.lengthOf(output, 2, 'array has hour and second elements');
  });

  it('should split inputs correctly into hours and minutes', () => {
    const time = "08:30";

    const output = App.splitInput(time);

    assert.equal(output[0], "08");
    assert.equal(output[1], "30");
  });
});

describe('hours to string', () => {
  it('should throw error if input is undefined or null', () => {
    assert.throws(() => {App.hoursToNumber(undefined)});
    assert.throws(() => {App.hoursToNumber(null)});

  });

  it('should throw error if input is not string representation of number', () => {
    assert.throws(() => {App.hoursToNumber('hello')});
  });

  it('should convert number to its string representation', () => {
    const number = "01";

    const output = App.hoursToNumber(number);

    assert.equal(output, 'one');
  });

  it('should convert 00 to 12', () => {
    const number = '00';

    const output = App.hoursToNumber(number);

    assert.equal(output, 'twelve');
  });

  it('should convert 12 hours to its string representation', () => {
    let number = "01";

    let output = App.hoursToNumber(number);

    assert.equal(output, 'one');

    number = "02";

    output = App.hoursToNumber(number);

    assert.equal(output, 'two');

    number = "03";

    output = App.hoursToNumber(number);

    assert.equal(output, 'three');

    number = "04";

    output = App.hoursToNumber(number);

    assert.equal(output, 'four');

    number = "05";

    output = App.hoursToNumber(number);

    assert.equal(output, 'five');

    number = "06";

    output = App.hoursToNumber(number);

    assert.equal(output, 'six');

    number = "07";

    output = App.hoursToNumber(number);

    assert.equal(output, 'seven');

    number = "08";

    output = App.hoursToNumber(number);

    assert.equal(output, 'eight');

    number = "09";

    output = App.hoursToNumber(number);

    assert.equal(output, 'nine');

    number = "10";

    output = App.hoursToNumber(number);

    assert.equal(output, 'ten');

    number = "11";

    output = App.hoursToNumber(number);

    assert.equal(output, 'eleven');

    number = "12";

    output = App.hoursToNumber(number);

    assert.equal(output, 'twelve');
  });

  it('should convert 24 hours to its string representation', () => {
    let number = "13";

    let output = App.hoursToNumber(number);

    assert.equal(output, 'one');

    number = "14";

    output = App.hoursToNumber(number);

    assert.equal(output, 'two');

    number = "15";

    output = App.hoursToNumber(number);

    assert.equal(output, 'three');

    number = "16";

    output = App.hoursToNumber(number);

    assert.equal(output, 'four');

    number = "17";

    output = App.hoursToNumber(number);

    assert.equal(output, 'five');

    number = "18";

    output = App.hoursToNumber(number);

    assert.equal(output, 'six');

    number = "19";

    output = App.hoursToNumber(number);

    assert.equal(output, 'seven');

    number = "20";

    output = App.hoursToNumber(number);

    assert.equal(output, 'eight');

    number = "21";

    output = App.hoursToNumber(number);

    assert.equal(output, 'nine');

    number = "22";

    output = App.hoursToNumber(number);

    assert.equal(output, 'ten');

    number = "23";

    output = App.hoursToNumber(number);

    assert.equal(output, 'eleven');

  });
});

describe('minutes to string', () => {

  it('should throw error if input is undefined or null', () => {
    assert.throws(() => {App.minutesToNumber(undefined)});
    assert.throws(() => {App.minutesToNumber(null)});

  });

  it('should throw error if input is not string representation of number', () => {
    assert.throws(() => {App.minutesToNumber('hello')});
  });

  it('should convert number to its string representation', () => {
    const number = "01";

    const output = App.minutesToNumber(number);

    assert.equal(output, 'one');
  });

  it('should convert 12 hours to its string representation', () => {
    let number = "01";

    let output = App.minutesToNumber(number);

    assert.equal(output, 'one');

    number = "12";

    output = App.minutesToNumber(number);

    assert.equal(output, 'twelve');

    number = "13";

    output = App.minutesToNumber(number);

    assert.equal(output, 'thirteen');

    number = "14";

    output = App.minutesToNumber(number);

    assert.equal(output, 'fourteen');

    number = "15";

    output = App.minutesToNumber(number);

    assert.equal(output, 'fifteen');

    number = "23";

    output = App.minutesToNumber(number);

    assert.equal(output, 'twenty three');

    number = "24";

    output = App.minutesToNumber(number);

    assert.equal(output, 'twenty four');

    number = "45";

    output = App.minutesToNumber(number);

    assert.equal(output, 'fourty five');

    number = "59";

    output = App.minutesToNumber(number);

    assert.equal(output, 'fifty nine');

    number = "30"

    output = App.minutesToNumber(number);

    assert.equal(output, "thirty");

  });

  describe('input to time', () => {
    it('should convert input to time', () => {
      const input = '08:30';

      const output = App.inputToTime(input);

      assert.equal(output, 'eight thirty');
    });

    it('should convert 24Hr input to time', () => {
      const input = '13:30';

      const output = App.inputToTime(input);

      assert.equal(output, 'one thirty');
    });

    it('should convert midnight input to time', () => {
      const input = '00:00';

      const output = App.inputToTime(input);

      assert.equal(output.trim(), 'twelve');
    });


  });

});
