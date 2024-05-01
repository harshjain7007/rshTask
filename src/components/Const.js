export function isObjectEmpty(obj) {
  if (obj !== null && obj !== undefined) {
    if (obj.email) return true;
  } else {
    return false;
  }
}
