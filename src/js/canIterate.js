export default function canIterate(input) {
  try {
    const verificationStatus = input[Symbol.iterator](); //eslint-disable-line
    return true;
  } catch (e) {
    return false;
  }
}
