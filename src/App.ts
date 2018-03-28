class App {

  values = [
    'twelve', 'one', 'two', 'three', 'four',
    'five', 'six', 'seven', 'eight', 'nine',
    'ten', 'eleven', 'twelve'
  ];
  hourValues = this.values.concat(this.values.slice(1, 12));

  valuesExtra = ['thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];

  otherMinuteValues = [
    '', '', 'twenty', 'thirty', 'fourty', 'fifty'
  ];

  minuteValues = this.values.concat(this.valuesExtra);

  constructor () {

  }

  inputToTime(input) {
    const inputSplit = this.splitInput(input);
    const hours = this.hoursToNumber(inputSplit[0]);
    const minutes = this.minutesToNumber(inputSplit[1]);

    return `${hours} ${minutes}`;
  }

  splitInput(time: string): Array<string> {
    if(time.indexOf(':') === -1 ){
      throw(new Error('could not split string'));
    }
    return time.split(':');
  }

  hoursToNumber(timeElement: string): string {
    const value = parseInt(timeElement);
    if (isNaN(value)) {
      throw(new Error('value was not a number'));
    }
    return this.hourValues[value];
  }

  minutesToNumber(timeElement: string): string {
    const unsplit = parseInt(timeElement);
    const split = parseInt(timeElement.substring(0, 1));
    const secondSplit = parseInt(timeElement.substring(1, timeElement.length));

    if (isNaN(split) || isNaN(secondSplit)) {
      throw(new Error('value was not a number'));
    }

    if(split === 1) {
      return this.minuteValues[unsplit];
    }
    if(split > 1 && secondSplit > 0) {
      return `${this.otherMinuteValues[split]} ${this.values[secondSplit]}`;
    }

    if(split > 1 && secondSplit === 0) {
      return this.otherMinuteValues[split];
    }
    if(unsplit > 0) {
      return this.minuteValues[unsplit];
    }

    return '';

  }

}

export default new App();
