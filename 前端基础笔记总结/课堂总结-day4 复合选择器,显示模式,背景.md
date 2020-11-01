> 今日内容:
>
> emmet快捷键及格式化文档
>
> 复合选择器
>
> 显示模式
>
> 背景

## 复合选择器

### 后代

基本思想:充分利用标签之间的包含关系，更精确地选中标签

格式: 选择器1 选择器2 ... 选择器n  其中的选择器可以为任意基础选择器

```html
<style>
     /* 中国 山东 济南 蓝翔 */
      ol li a {
        color: red;  /*只会选中ol中的a*/
      }
</style>

<ol>
     变态写法
     <li>我是ol 的孩子</li>
     <li>我是ol 的孩子</li>
     <li>我是ol 的孩子</li>
     <li><a href="#">我是孙子</a></li>
</ol>
<ul>
    <li>我是ul 的孩子</li>
    <li>我是ul 的孩子</li>
    <li>我是ul 的孩子</li>
    <li><a href="#" class="black">不会变化的</a></li>
</ul>
```

### 子级

一种特殊的后代选择器，只选中子级标签

格式: 选择器1>选择器2 ... 选择器n  其中的选择器可以为任意基础选择器

```html
<style>
        .nav>a {
            color: red;/*只会选中 我是儿子*/
        }
    </style>
</head>

<body>
    <div class="nav">
        <a href="#">我是儿子</a>
        <p>
            <a href="#">我是孙子</a>
        </p>
    </div>
</body>
```

### 并集

基本思想: 方便地一次性选中多个标签

格式:选择器1，选择器2,...,选择器n

```html
 /* 会把熊大和熊二及小猪一家都改为粉色 */
        div,
        p,
        .pig li {
            color: pink;
        }

        /* 约定的语法规范,我们并集选择器喜欢竖着写 */
        /* 一定要注意,最后一个选择器 不需要加逗号 */

<body>
    <div>熊大</div>
    <p>熊二</p>
    <span>光头强</span>
    <ul class="pig">
        <li>小猪佩奇</li>
        <li>猪爸爸</li>
        <li>猪妈妈</li>
    </ul>
</body>
```

### 交集

基本思想:同时利用多个条件选出标签

格式:选择器1选择器2选择器3  注意：选择器之间没有空格   通常是类和类 或 类和标签 交集

```html
<style>
    /*只会选中以下倒第二个span*/
    span.test {
        color: blue;
    }
    /*只会选中以下第一个div*/
    div.test.abc {
        color: red;
    }
</style>
</head>
<body>
    <div class="test abc">divtest</div>
    <div class="abc">xxx</div>
    <div class="test">div</div>
    <span class="test abc">spantest</span>
    <span>span</span>
```



### 伪类

| 选择器      | 适用标签     | 功能                            | 使用频率 |
| ----------- | ------------ | ------------------------------- | -------- |
| a:link      | a            | a链接从未点击过时被选中         | 少       |
| a:visited   | a            | a链接已被访问过时被选中         | 少       |
| a:hover     | 几乎所有标签 | 鼠标光标扫过时被选中            | 多       |
| a:active    | a            | 鼠标停在a上且按下左键，未松开时 | 少       |
| input:focus | input        | input得到光标时被选中           | 少       |

```html
实际开发中对于a标签，通常作如下处理:
/*设置a的常规样式*/
a{
	color:某种颜色;
	text-decoration:none
}
/*设置鼠标扫过时,a的样式*/
a:hover{
	...
}
```



## 显示模式

### 块标签

特点:

- 独占一行
- 可以设置宽高、内外边距，默认宽度为父级宽度,默认高度为内容高度，无内容时高度默认为0
- 作为容器，里面可包括块标签和行内标签
- 注意：
  - 文字类块标签内不能放块标签
  - 如 p中不能放div及p  h1-6中不能嵌套div及p

- 常见块标签:div  h1-6 p  ul ol li  dl  dt  dd   table  form

### 行内标签

特点:

- 不会独占一行，从左往右摆放,一行占满之后自动换行
- 设置宽高无效，宽高由内容撑开，无内容时宽高为0
- 只能放文字或行内标签
- 注意：
  - a不能嵌套a
  - a可以直接嵌套块标签，但此时通常会给a转换显示模式

- 常见行内标签: span strong b em i del s ins u a  label

### 行内块标签

特点:

- 不会独占一行，从左往右摆放,一行占满之后自动换行
- 可以设置宽高及内外边距，未设置时默认由内容撑开，无内容时宽高为0(表单元素除外，有默认宽高)
- 常见行内块标签: img  td  input  select  textarea

### 显示模式转换

- display:block;  转换成块标签
- display:inline-block ;  转换成行内块标签
- display:inline;转换成行内标签

## 背景

背景（含背景色）能展示的前提是容器需要有宽高，body除外

### 背景色

```html
background-color:red;  /*默认transparent 透明*/
```

### 背景图

```html
background-image:url(路径)   /*默认 none 无背景图*/
```

### 背景平铺

```html
background-repeat:no-repeat|repeat-x|repeat-y;   /*默认 repeat 在xy方向同时平铺*/
```

### 背景位置

```html
background-position:x方向位置  y方向位置； /*默认 background-position:0 0 或 left top 默认在容器左上角展示*/

用单词描述: x:left  center  right    y:top center  bottom
background-position:right bottom;/*表示背景图在容器的右下角*/
background-position:left;/*表示背景图在容器的左边缘垂直居中*/
用具体像素值描述:
background-position:100px  20px;
background-position:100px;/*表示背景图距离容器左边缘100px,垂直居中*/
用单词和像素混合描述
background-position:100px  bottom;/*表示背景图距离容器左边缘100px,垂直靠下*/
还可以用百分比描述，初学者不建议记太多规则，直接按background-position:x坐标 y坐标 书写;即可
```

### 背景固定

```html
/*background-attachment:scroll|fixed;当值为scroll时背景图会跟着容器的滚动而滚动，当值为fixed时，会相对于浏览器窗口固定，不会跟着容器一起滚动。注意：background-attachment:fixed时 background-position会受影响*/

div {
    width: 300px;
    height: 300px;
    background-color: blue;
    background-image: url(images/logo.png);
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-position: center; /*此时背景图看不见，因为它在浏览器窗口的正中间*/
}

<div></div>
```

### 简写复合背景

```html
/*习惯性书写顺序  background:背景色 背景图  背景平铺  背景固定  背景位置;但调换位置其实也可以*/

div {
    width: 1000px;
    height: 600px;
    background-color: blue;
    background-image: url(images/logo.png);
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-position: center;
	/*以上background相关代码可简写为如下代码*/
	background:blue url(images/logo.png) no-repeat fixed center;
}
```

```html
/*也可以一次性在同一个容器中放多个背景图片,此时背景色必须设在最后一张图片上，如下:*/
div{
	background:url(images/logo.png) no-repeat center,blue url(images/icon.jpg) no-repeat top right; /*此时会同时展示两个背景图,logo.png及icon.jpg */
}
```

