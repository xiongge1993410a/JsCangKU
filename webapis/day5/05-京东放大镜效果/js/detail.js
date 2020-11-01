// 当页面加载完成后 才来执行里面的代码 JS的引擎需要将HTML页面上面所有的内容都读到内存才会执行函数
window.addEventListener("load", function () {
  // 1.获取元素  preview_img 以及 遮罩层 mask 然后还有 big大盒子
  var preview_img = document.querySelector(".preview_img");
  var mask = document.querySelector(".mask");
  var big = document.querySelector(".big");

  // 2.当鼠标经过preview_img这个盒子里面 需要将 mask 与 big盒子显示出来
  preview_img.addEventListener("mouseover", function () {
    mask.style.display = "block";
    big.style.display = "block";
  });
  // 3. 当鼠标离开preview_img这个盒子里面 需要将 mask 与 big盒子隐藏起来
  preview_img.addEventListener("mouseout", function () {
    mask.style.display = "none";
    big.style.display = "none";
  });

  // 4. 给preview_img 这个盒子添加鼠标移动的事件
  preview_img.addEventListener("mousemove", function (e) {
    // 获取鼠标在盒子里面的坐标值
    var x = e.pageX - this.offsetLeft;
    var y = e.pageY - this.offsetTop;
    // 获取 mask盒子的宽度  offsetWidth来获取
    var maskWidth = mask.offsetWidth;

    // 控制mask盒子的移动位置  如果移动的距离 小于0 我们需要让它移动设置为0就可以
    var maskMoveX = x - maskWidth / 2;
    var maskMoveY = y - maskWidth / 2;

    // 得到 mask盒子最大的移动距离
    var maskMaxMoveX = preview_img.offsetWidth - maskWidth;
    var maskMaxMoveY = preview_img.offsetHeight - maskWidth;
    // 限制盒子移动的范围
    if (maskMoveX < 0) {
      maskMoveX = 0;
    } else if (maskMoveX > maskMaxMoveX) {
      maskMoveX = maskMaxMoveX;
    }

    if (maskMoveY < 0) {
      maskMoveY = 0;
    } else if (maskMoveY > maskMaxMoveY) {
      maskMoveY = maskMaxMoveY;
    }
    // 需要将移动距离给到 mask 因为我们要移动mask盒子
    mask.style.left = maskMoveX + "px";
    mask.style.top = maskMoveY + "px";

    // 大图片的最大移动距离  big盒子的宽度 - 图片的宽度
    var img = document.querySelector(".bigImg");
    var imgWidth = img.offsetWidth;
    var bigMoveMaxX = big.offsetWidth - imgWidth;
    var bigMoveMaxY = big.offsetHeight - imgWidth;
    // 求出大图片的移动距离
    var bigMoveX = (maskMoveX * bigMoveMaxX) / maskMaxMoveX;
    var bigMoveY = (maskMoveY * bigMoveMaxY) / maskMaxMoveY;
    // 把大图片的移动距离赋值给
    img.style.left = bigMoveX + "px";
    img.style.top = bigMoveY + "px";
  });
});
