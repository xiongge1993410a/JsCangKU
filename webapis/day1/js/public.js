// 封装一个函数 用于获取一个HTML对象
function $(selector) {
  return document.querySelector(selector);
}
// 封装一个函数 用于获取多个HTML对象
function $$(selector) {
  return document.querySelectorAll(selector);
}
