import ArrayBufferConverter from '../app.js';

const arrBufConv = new ArrayBufferConverter();

test('test load data', () => {
  const result = arrBufConv.load('Hello');
  expect(result.byteLength).toBe(10);
});

test('test data to string', () => {
  const result = arrBufConv.toString();
  expect(result).toBe('Hello');
});
