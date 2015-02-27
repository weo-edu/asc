function invertStr(str) {
  return str.split('').map(function(c) {
    return 0xffff - c.charCodeAt();
  });
}

function invertNum(num) {
  return num * -1;
}

function invert(val) {
  // Coerce dates to timestamps for comparison purposes
  if(val instanceof Date)
    val = +val;

  return 'string' === typeof val
    ? invertStr(val)
    : invertNum(val);
}

module.exports = function(dir, fn) {
  return dir === -1
    ? function(item) { return invert(fn(item)); }
    : fn;
};