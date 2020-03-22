export function unifiedToNative(unified) {
  var unicodes = unified.split('-'),
    codePoints = unicodes.map((u) => `0x${u}`)
  try {
    return String.fromCodePoint(...codePoints);
  } catch (e) {
    return '';
  }
}