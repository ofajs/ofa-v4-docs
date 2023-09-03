export function isElementVisible(element) {
  var rect = element.getBoundingClientRect();

  var windowHeight =
    window.innerHeight || document.documentElement.clientHeight;
  var windowWidth = window.innerWidth || document.documentElement.clientWidth;

  var isVisible =
    rect.top < windowHeight &&
    rect.bottom > 0 &&
    rect.left < windowWidth &&
    rect.right > 0;

  return isVisible;
}

export function wrapSubstringWithSpan(str, substr) {
  return str.replace(
    new RegExp(substr, "gi"),
    "<span style='color:var(--active-color)'>$&</span>"
  );
}
