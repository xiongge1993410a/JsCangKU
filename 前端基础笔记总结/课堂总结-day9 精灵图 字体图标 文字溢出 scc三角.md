> 今日内容:
>
> 精灵图(重点)
>
> 字体图标(重点)
>
> css三角
>
> 用户界面相关样式
>
> vertical-align应用
>
> 文字溢出省略号显示
>
> margin负值应用
>
> inline-block应用

## 精灵图

 什么是精灵图:将很多小图标放在一张大图中

作用：减少浏览器向服务器发起请求的次数，降低服务器压力

原理:主要利用background-position,需要用哪个小图标，就定位到哪一块区域

做法:

1. 准备一个标签，标签的宽高和需要的小图标的宽高一致
2. 给标签添加背景图（精灵图）
3. 利用background-position 显示出具体的小图标(小图标在精灵图中的x y坐标值的负值作为background-position的 x  y坐标)



## 字体图标

字体图标相对于精灵图的优势:

1. 能很方便地改变字体图标的颜色及大小
2. 字体图标对应的文件体积很小，提高相应速度

字体图标不能完全取代精灵图，某些复杂的小图标，仍然需要精灵图来实现

使用步骤:

1. 下载字体文件并放在根目录中
2. 在自己的样式代码中 声明 字体(复制粘贴）
3. 准备一个标签，从demo中复制特殊字符 或 相关的class给标签
4. 为标签 定义 font-family

```html
 /* 第一步：引入字体文件 */
/* 第二步：声明字体，注意字体文件路径 */
@font-face {
font-family: "icomoon";
src: url("icomoon/fonts/icomoon.eot?p4ssmb");
src: url("icomoon/fonts/icomoon.eot?p4ssmb#iefix")
format("embedded-opentype"),
url("icomoon/fonts/icomoon.ttf?p4ssmb") format("truetype"),
url("icomoon/fonts/icomoon.woff?p4ssmb") format("woff"),
url("icomoon/fonts/icomoon.svg?p4ssmb#icomoon") format("svg");
font-weight: normal;
font-style: normal;
font-display: block;
}

 /* 第四步：应用字体图标 */
span {
font-family: icomoon;
font-size: 100px;
color: red;
}
.icon-apache:before {
content: "\e901";
color: #d22128;
}

 <body>
    <!-- 第三步:通过特殊字符或类在标签中加入字体图标  -->
    <span></span>
    <span></span>
    <span class="icon-apache"></span>
  </body>
```

## css实现三角形

原理:利用宽高为0的盒子的border

```html
/*以下实现尖角朝下的小三角*/
.tri {
width: 0;
height: 0;
border: 20px solid transparent;
border-top-color: blue;
}
<div class="tri"></div>
```

## 用户界面相关样式

```html
鼠标光标:
cursor:default|pointer|text|move|not-allowed
去掉input textarea默认样式
input,textarea{
	outline:none
}
textarea{
resize:none;
}
```

## vertical-align应用

- 设置inline及inline-block元素的垂直对齐(默认基线对齐)
- 解决包裹图片的div存在小缝隙问题

## 文字省略号显示

```html
单行文字:
div {
width: 130px;
height: 30px;
border: 1px solid red;
/* 1 设置不能自动换行 */
white-space: nowrap;
/* 2 溢出隐藏 */
overflow: hidden;
/* 3 文本溢出 显示省略号 */
text-overflow: ellipsis;
}

<div>有一天，停水了，此处省略一万字</div>

多行文字(了解即可):
/*1. 超出的部分隐藏 */
overflow: hidden;
/*2. 文字用省略号替代超出的部分 */
text-overflow: ellipsis;
/* 3. 弹性伸缩盒子模型显示 */
display: -webkit-box;
/* 4. 限制在一个块元素显示的文本的行数 */
-webkit-line-clamp: 2;
/* 5. 设置或检索伸缩盒对象的子元素的排列方式 */
-webkit-box-orient: vertical;
```

## margin负值妙用

```html
利用margin负值实现细线边框
li {
float: left;
width: 98px;
height: 98px;
border: 1px solid red;
margin-left: -1px;
}

 <ul>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
    </ul>
```

## inline-block妙用

利用inline-block方便地实现多个盒子水平居中

```html
.box {
text-align: center;
}
.box a {
display: inline-block;
width: 36px;
height: 36px;
background-color: #f7f7f7;
border: 1px solid #ccc;
text-align: center;
line-height: 36px;
text-decoration: none;
color: #333;
font-size: 14px;
}

<div class="box">
    <a href="#">1</a>
    <a href="#" class="current">2</a>
    <a href="#">3</a>
    <a href="#">4</a>
    <a href="#">5</a>
    <a href="#">6</a>
</div>
```

