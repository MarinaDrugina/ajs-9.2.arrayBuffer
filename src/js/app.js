export default class ArrayBufferConverter {
  constructor() {
    this.phrase = undefined;
  }

  load(data) {
    const buffer = new ArrayBuffer(data.length * 2);
    const bufferView = new Uint16Array(buffer);
    for (let i = 0; i < data.length; i++) {
      bufferView[i] = data.charCodeAt(i);
    }
    this.phrase = bufferView;
    return this.phrase;
  }

  toString() {
    let result = '';
    for (let i = 0; i < this.phrase.length; i++) {
      result += String.fromCharCode(this.phrase[i]);
    }
    return result;
  }
}
