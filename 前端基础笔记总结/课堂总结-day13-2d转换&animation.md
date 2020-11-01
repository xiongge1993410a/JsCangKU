今日内容：

> 转换 transform
>
> 动画 animation



## transform

###  transform特性

- transform不影响布局,不会影响其他盒子
- transform对部份行内标签无效
- 属性值有4种  translate()   rotate()   scale()    skew()

### 平移 translate

```html
.test1 {
width: 100px;
height: 100px;
background-color: red;
/* transition: all 0.5s; */
}
.test1:hover {
/*鼠标划过时向右向下 各平移 100px*/
 transform: translate(100px, 100px);
/*transform: translateX(100px);
transform: translateY(100px); */
}

.outer {
position: relative;
width: 300px;
height: 300px;
background-color: green;
margin-top: 50px;
}
.inner {
position: absolute;
left: 50%;
top: 50%;
width: 100px;
height: 100px;
background-color: purple;
/* 向左向上平移自身宽度的一半 */
transform: translate(-50%, -50%);
}
<div class="test1"></div>
 <!-- 利用translate实现居中 -->
<div class="outer">
    <div class="inner"></div>
</div>
```

### 旋转 rotate

```html
div{
	width:100px;
	height:100px;
	background:red;
	transform:rotate(45deg)
}
<div></div>
```

### 设置transform基准点  transform-origin

```html
div{
	width:100px;
	height:100px;
	background:red;
	transform-origin:right bottom;
	transform-origin:100px 100px;
	transform-origin:50% 50%;/*默认值，表示中心点*/
	transform:rotate(45deg)
}
<div></div>
```

### 缩放 scale

```html
div{
	width:100px;
	height:100px;
	background:red;
	transform-origin:right bottom;
	transform-origin:100px 100px;
	transform-origin:50% 50%;/*默认值，表示中心点*/
	/*transform:scale(2,2)*/
	transform:scale(0.5,0.5)
}
<div></div>
```

###  补充：拉伸 skew

```html
.skew {
width: 100px;
height: 100px;
background-color: green;
transform: skew(80deg);
}
<div class="skew"></div>  
```



### 一次性作多种2d转换

```html
div{
	width:100px;
	height:100px;
	background:red;
	transform-origin:right bottom;
	transform-origin:100px 100px;
	transform-origin:50% 50%;/*默认值，表示中心点*/
	/*transform:scale(2,2)*/
	transform:translate(100px,100px) rotate(45deg) scale(0.5,0.5);
	/*注意:一次性作多种转换时，不同种类转换的先后顺序会影响最终结果，通常最先写translate*/
}
<div></div>
```



## animation 

### 基本用法

```html
定义 + 使用
 /* 定义动画,也可放在使用动画代码的后面 */
@keyframes abc {
/* n%指占动画时间animation-duration的百分比*/
0% {
transform: translateX(0);
width: 100px;
}
100% {
transform: translateX(500px);
width: 100px;
}
}

/* 使用动画 */
.animate {
width: 100px;
height: 100px;
background-color: green;
/* 使用动画 */
animation:abc 2s,efg 3s;
}
```

### animation属性

- animation-name  动画名  自己取
- animation-duration  动画时间    2s 0.5s  .5s
- animation-timing-function 动画速度曲线   ease  linear(匀速)  steps(n)让动画分n步完成
- animation-delay  动画延迟时间  2s
- animation-iteration-count  动画重复次数  1  infinite
- animation-direction  动画执行方向   normal 表示从0%->100%   alternate  0%->100%->0%
- animation-fill-mode  动画停止时的状态  backwards(返回初始位置)  forwards(停在结束位置)
- animation-play-state  动画运行/停止   通常和hover一起使用 可以让动画停止  paused  running
- 综合属性 animation:name duration timing-function delay  iteration-count direction fill-mode  注意：不含play-state