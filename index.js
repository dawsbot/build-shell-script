'use strict';
function alias(prefix, suffix) {
  return `alias ${prefix}="${suffix}"`;
}

function fn(prefix, suffix) {
  if (Array.isArray(suffix)) {
    suffix = suffix.reduce((a, b) => {
      return `${a}\n  ${b}`;
    });
  }

  return `${prefix}() {
  ${suffix}
}`;
}

module.exports = {
  alias,
  fn
};
