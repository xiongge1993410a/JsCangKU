> 今日任务:
>
> 定位
>
> 元素隐藏

## 定位

场景:a 盒子与盒子重叠  b 很怪异的位置

基本思想:通过坐标的方式灵活设置元素的位置

回顾标准流、浮动位置特性: 元素显示出来的位置由元素在html文档中的顺序决定，不能灵活改变

### 定位设置

```html
设置定位类型
position:static|relative|absolute|fixed|sticky  对所有元素有效，没有继承性

设置定位元素的坐标，仅当position为relative|absolute|fixed|sticky时有效
left:像素|百分比
top:像素|百分比
right:像素|百分比
bottom:像素|百分比

注意:left和right同时设置时left优先，top和bottom同时设置时,top优先
```

### 不同类型定位比较:

| 类型     | 参考系                                     | 是否脱标                               | 注意                                                   |
| -------- | ------------------------------------------ | -------------------------------------- | ------------------------------------------------------ |
| relative | 自身的默认位置                             | 否                                     | 通常用作绝对定位的父级                                 |
| absolute | 最近的外层定位元素或文档(外层无定位元素时) | 是，可直接设置宽高，不会产生margin合并 | 要加坐标，通常放在相对定位元素的子级，会跟随滚动条滚动 |
| fixed    | 浏览器可视区                               | 是，可直接设置宽高，不会产生margin合并 | 要加坐标，不会跟随滚动条滚动                           |
| sticky   | 浏览器可视区                               | 滚动到指定位置之后脱标                 | 了解即可，兼容性问题严重                               |

绝对&固定定位元素（以下简称定位元素） 和 浮动比较：

- 浮动元素不会压住文字，而定位元素会压住
- 浮动元素不能撑开父级高度，可通过清除浮动解决；定位元素也不能撑开，且无法清除
- 浮动元素不能直接通过margin:auto  text-align:center实现盒子居中，定位元素也不能

### 定位应用

#### 利用绝对定位实现居中

```html
 .outer {
        /* position: relative; */
        position: absolute;
        left: 50%;
        margin-left: -200px;
        top: 50%;
        margin-top: -200px;
        width: 400px;
        height: 400px;
        background-color: pink;
      }
.inner {
        position: absolute;
        /* 方法1 */
        /* left: 50%;
        margin-left: -50px;
        top: 50%;
        margin-top: -50px; */

        /* 方法2 */
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
        margin: auto;
        width: 100px;
        height: 100px;
        background-color: purple;
	  }

<div class="outer">
    <div class="inner"></div>
</div>
```

#### 淘宝轮播图案例

```html
* {
margin: 0;
padding: 0;
}
a {
text-decoration: none;
}
li {
list-style: none;
}
.box {
position: relative;
width: 520px;
height: 280px;
margin: 100px auto;
}
.box > img {
/* 设置图片宽高和盒子宽高一致 */
width: 100%;
height: 100%;
}
.prev,
.next {
position: absolute;
/* 盒子垂直居中 */
top: 50%;
margin-top: -15px;
width: 20px;
height: 30px;
background-color: rgba(0, 0, 0, 0.3);
color: #fff;
text-align: center;
/* 文字垂直居中 */
line-height: 30px;
}
.prev {
/* 靠左 */
left: 0;
border-top-right-radius: 15px;
border-bottom-right-radius: 15px;
}
.next {
/* 靠右 */
right: 0;
border-top-left-radius: 15px;
border-bottom-left-radius: 15px;
}
.nav {
position: absolute;
width: 70px;
height: 14px;
bottom: 15px;
/* 盒子水平居中 */
left: 50%;
margin-left: -35px;
background-color: rgba(255, 255, 255, 0.3);
border-radius: 7px;
}

.nav li {
float: left;
width: 8px;
height: 8px;
border-radius: 50%;
background-color: #fff;
margin: 3px;
}
.nav .active {
background-color: orange;
}

<div class="box">
    <img src="images/tb.jpg" alt="" />
    <a href="#" class="prev">&lt;</a>
    <a href="#" class="next">&gt;</a>
    <div class="nav">
        <ul>
            <li class="active"></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
        </ul>
    </div>
</div>
```

#### 轮播图优化(实现自适应不同个数的小圆点)

```html
 .nav {
position: absolute;
/*独占一整行，然后用text-align:center实现子元素整行范围内居中*/
width: 100%;
height: 14px;
/* 靠下 */
bottom: 15px;
text-align: center;
}
.nav ul {
display: inline-block;
height: 14px;
background-color: rgba(255, 255, 255, 0.3);
line-height: 14px;
border-radius: 7px;
font-size: 0;
}

.nav li {
/* float: left; */
display: inline-block;
width: 8px;
height: 8px;
border-radius: 50%;
background-color: #fff;
margin: 3px;
}

<div class="box">
    <img src="images/tb.jpg" alt="" />
    <a href="#" class="prev">&lt;</a>
    <a href="#" class="next">&gt;</a>
    <div class="nav">
        <ul>
            <li class="active"></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
        </ul>
    </div>
</div>
```



### 定位元素显示层级控制

解决问题：定位元素容易发生重叠，重叠时需要一种规则控制谁显示在上面

- 通过z-index属性控制元素显示层级，值越大，越显示在上面
- z-index属性值相等或均未设置时，后面的元素覆盖前面的元素
- z-index仅对定位元素(相对、绝对、固定、粘性)有效

## 元素隐藏

### 三种相关方法

- display:none;  隐藏且不占据位置  其他属性值  block(块元素显示)   inline(行内元素显示)
- visibility:hidden;  隐藏且占据位置  其他属性值  visible(可见，默认值)
- overflow:hidden  溢出隐藏  其他属性值  visible(可见)  scroll(显示滚动条) auto(溢出时显示滚动条，不溢出时不显示)

### 土豆案例代码:

```html
.box {
    position: relative;
    width: 444px;
    height: 320px;
    margin: 50px auto;
}
.box > img {
    width: 100%;
    height: 100%;
}
.box .mask {
    /* 遮罩层默认隐藏 */
    display: none;
    position: absolute;
    left: 0;
    top: 0;
    /* 注意：此处百分比是相对于参考系的宽高的 */
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.2) url(images/arr.png) no-repeat center;
}
/* 鼠标扫过.box时，.box的后代元素.mask显示 */
.box:hover .mask {
	display: block;
}
```



