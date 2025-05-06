// unit.test.js

import {
  isDate,
  isEmail,
  isHexColor,
  isPhoneNumber,
  isStrongPassword,
} from '../code-to-unit-test/unit-test-me';

test('valid phone number (123-456-7890)', () => {
  expect(isPhoneNumber('123-456-7890')).toBe(true);
});

test('valid phone number (555-555-5555)', () => {
  expect(isPhoneNumber('555-555-5555')).toBe(true);
});

test('invalid phone number (123)', () => {
  expect(isPhoneNumber('123')).toBe(false);
});

test('invalid phone number (no dashes)', () => {
  expect(isPhoneNumber('1234567890')).toBe(false);
});

test('valid email (test@example.com)', () => {
  expect(isEmail('test@example.com')).toBe(true);
});

test('valid email (hello@ucsd.edu)', () => {
  expect(isEmail('hello@ucsd.edu')).toBe(true);
});

test('invalid email (missing @)', () => {
  expect(isEmail('testexample.com')).toBe(false);
});

test('invalid email (missing domain)', () => {
  expect(isEmail('test@')).toBe(false);
});

test('valid strong password (Abcd1234)', () => {
  expect(isStrongPassword('Abcd1234')).toBe(true);
});

test('valid strong password (goodPass1)', () => {
  expect(isStrongPassword('goodPass1')).toBe(true);
});

test('invalid strong password (123)', () => {
  expect(isStrongPassword('123')).toBe(false);
});

test('invalid strong password (starts with number)', () => {
  expect(isStrongPassword('1password')).toBe(false);
});

test('valid date (11/30/2023)', () => {
  expect(isDate('11/30/2023')).toBe(true);
});

test('valid date (01/01/2000)', () => {
  expect(isDate('01/01/2000')).toBe(true);
});

test('invalid date (no slashes)', () => {
  expect(isDate('2000-01-01')).toBe(false);
});

test('invalid date (letters instead of numbers)', () => {
  expect(isDate('Jan/01/2020')).toBe(false);
});

test('valid hex color (#FFF)', () => {
  expect(isHexColor('#FFF')).toBe(true);
});

test('valid hex color (#123ABC)', () => {
  expect(isHexColor('#123ABC')).toBe(true);
});

test('invalid hex color (12345)', () => {
  expect(isHexColor('12345')).toBe(false);
});

test('invalid hex color (not a hex)', () => {
  expect(isHexColor('blue')).toBe(false);
});
