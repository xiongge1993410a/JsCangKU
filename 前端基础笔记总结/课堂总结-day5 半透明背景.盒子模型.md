> 今日内容:
>
> 半透明背景
>
> 三大特性
>
> 盒子模型

## 半透明背景

```html
颜色的另外一种表示方式  rgba(0,0,0,0.5)  /*半透明的黑色*/
最后一个值为0-1之间的数，0表示完全透明，1表示完全不透明
background-color:rgba(0,0,0,0.5)
```

## 三大特性

*写任何样式时均需考虑的通用性问题*

### 层叠性

相同选择器，重复定义了相同的某个样式，后面的覆盖前面的。

### 继承性

部份样式(文字相关的，如font-  text-  line-)会继承自父标签，让样式代码更简洁

特例:

- h1-6不能通过继承设置文字大小
- a不能通过继承设置颜色

### 优先级

#### 基础选择器(含!important  行内)

!important>行内>id>class>标签>通配符以及继承

| 类型          | 权重                   | 备注 |
| ------------- | ---------------------- | ---- |
| !important    | 无穷大                 |      |
| 行内          | 1,0,0,0  简单记成 1000 |      |
| id            | 0,1,0,0  简单记成 100  |      |
| class 及 伪类 | 0,0,1,0  简单记成 10   |      |
| 标签          | 0,0,0,1  简单记成 1    |      |
| 通配符及继承  | 0,0,0,0  简单记成 0    |      |

#### 复合选择器

大原则:越精准，权重越高

```html
div.test       权重:  10+1  11
.test1.test2   权重:  20
div .test      权重:  10+1  11
div .test  .abc  权重: 1+10+10  21
div,span,ul    权重:1(未增加精准度，不累加)

注意：权重虽然可以累加，但不能进位，即 20个标签构成的后代选择器权重 仍然小于  1个类选择器
```

补充: 默认值  适用范围



## 盒子模型

*在页面中，所有标签都是盒子，写页面其实就是码盒子*

盒子模型的构成：

- margin (也可以认为，margin不属于盒子，因为它相当于是公共部分，但要占据空间)

- border
- padding
- 内容区（重要:width和height仅指内容区宽高）

###  border

*设置盒子边框*

```html
border:border-width  border-style  border-color;/*其中border-style最关键，默认值none,常用值 solid dashed dotted*/
border:1px solid  red;/*同时设置4个边框*/
border-top:1px solid blue;/*仅设置顶部边框*/
border-top-color:green;/*仅设置顶部边框颜色*/
border-top-style:dashed;
border-width:10px 20px 30px 40px;
```

*width和height已经设定的前提下，增大border会增大盒子的总宽高*

### table 细线边框

```html
table{
	border-collapse:collapse；/*设置相邻边框合并，实现细线边框效果*/
}
table,th,td{
	border:1px solid blue;
}
```

### padding

*设置盒子边框内边缘距离内容区之间的间距*

```html
padding-top:5px;
padding-right:5px;
padding-bottom:5px;
padding-left:5px;
以上可简写成
padding:5px;

padding:10px 20px; /*上下padding 10px,左右padding 20px*/
padding:10px 20px 30px;/*上padding 10px,下padding 30px,左右padding 20px*/
padding:10px 20px 30px 40px;/*上padding 10px,右padding 20px,下padding 30px,左padding 40px*/
```

*width和height已经设定的前提下，增加padding会增大盒子的总宽高*

padding的应用：

- 实现不确定数量文字的水平居中及均匀间隙  新浪导航
- 实现多行文字的整体缩进   小米侧边栏

### 单个盒子总尺寸计算方法:

```html
水平:borderLeftWidth+paddingLeft+width+paddingRight+borderRightWidth
垂直:borderTopWidth+paddingTop+height+paddingBottom+borderBottomWidth
```

### margin

*设置盒子与盒子之间的间距*

```html
margin-top:5px;
margin-right:5px;
margin-bottom:5px;
margin-left:5px;
以上可简写成
margin:5px;

margin:10px 20px; /*margin 10px,margin 20px*/
margin:10px 20px 30px;/*上margin 10px,下margin 30px,左右margin 20px*/
margin:10px 20px 30px 40px;/*上margin 10px,右margin 20px,下margin 30px,左margin 40px*/
```

margin的应用:

- 实现块标签的水平居中   margin:0 auto;   前提:盒子设了宽度，且小于父级宽度
  - 行内及行内块元素的水平居中:在父级盒子上加 text-align:center;
- 清除默认边距  *{margin:0;padding:0}

垂直方向margin合并现象:

- 兄弟级：上面盒子的margin-bottom和下面盒子的margin-top同时设置时，最终两个盒子之间的垂直间距为margin-top及margin-bottom中较大者。故通常垂直方向只设margin-top或margin-bottom，而不会同时设置二者。

- 父子级：子级标签的margin-top会传导到父标签，而不会在父子级之间产生间距。解决方案: 
  - a 给父标签加透明1px border-top  
  - b 给父标签 加padding-top   
  - c 给父标签 加 overflow:hidden;(推荐)

## 综合案例

实现步骤:

1. 根据效果图分析结构并合理使用标签（语义化、功能、标签特性）
2. 由外到内，由整体到局部，边测量，边写样式

测量工具:

- PS
- MarkMan

## 作业检查

注意代码风格:

- 缩进  
- 注释
- 命名   见名知义  英文单词/拼音