export function getItem(key) {
  let value = sessionStorage.getItem(key);

  try {
    return JSON.parse(value);
  } catch (e) {
    console.info(e);
  }
  return null;
}

export function setItem(key, value) {
  let string = JSON.stringify(value);
  sessionStorage.setItem(key, string);
}
