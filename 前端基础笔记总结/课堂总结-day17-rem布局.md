> 今日内容:
>
> rem
>
> rem布局
>
> 媒体查询
>
> less

## rem

- 是一种相对单位，相对于html的font-size,如html 的font-size为50px，则 1rem就是50px
- 与之接近的还有em,也是一种相对单位，但相对的是父级的font-size

## rem布局

### 基本思想

```html
让html font-size 等于屏幕宽度的一个固定百分比(即具体像素值会随不同屏宽的变化而变化),然后让所有盒子的尺寸都用 rem来表示,则盒子在不同屏幕下宽高均会等比例缩放
```

### 具体做法

第一步:让html的font-size为屏宽的某个百分比(该百分比自己灵活设定，1/10  1/15   1/20均可)，则该尺寸(随不同屏幕动态变化)即为1rem的大小。

第二步:为各个盒子写样式时，盒子尺寸均用rem表示，具体为 设计稿(宽度通常为750 640等典型尺寸)测量尺寸/设计稿1rem基准尺寸(即设计稿宽度乘以第一步中的百分比)

关键问题:如何实现第一步?

### 设置html font-size随不同屏幕变化而变化的方法

- 媒体查询 针对主流屏幕宽度 分别 设置html的 font-size （繁琐，不够灵活）
- js动态获取屏幕宽度乘以固定百分比 设置为 html的font-size(推荐)

## 媒体查询

### 核心思想

```css
针对不同条件的设备写样式，让我们的样式仅在该条件下才生效
```

### 基本使用

```css
@media screen and (max-width: 1500px) {/*可简写为 @media (max-width: 1500px),下同*/
    body {
        /*屏宽小于或等于1500时，背景色紫色*/
        /*因为css层叠性，实际效果为屏宽在1200到1500之间时，背景色紫色*/
        background-color: purple;
    }
}
@media screen and (max-width: 1200px) {
    body {
        /*屏宽小于或等于1200时，背景色红色*/
        /*因为css层叠性，实际效果为屏宽在900到1200之间时，背景色红色*/
        background-color: red;
    }
}
@media screen and (max-width: 900px) {
    body {
        /*屏宽小于或等于900时，背景色紫色*/
        background-color: green;
    }
}
```

### 注意事项

1. and两边的空格不能掉 
2. 数字后面的单位不能省 
3. 通常按屏幕宽度从小到大或从大到小的顺序书写
4. 可利用层叠性更简洁地实现 宽度区间 样式

## less

### 基本概念及使用

- less是一门流行的css预处理语言，提供很多新特性，让我们可以更高效地书写css，同类语言还有sass stylus
- less代码中仍可直接写css代码
- less语句必须以分号结尾
- less代码不能直接生效，仍需转换为css才能被浏览器解析，html中仍需引入css文件
- vscode中可安装easy-less插件，保存less代码，即可方便地将less代码转换为同文件名的css代码

### less 语法特性

```less
//变量  注意变量名不能用数字开头，不能包含特殊字符如!，严格区分大小写
@nice-blue: #5B83AD;
@light-blue: @nice-blue + #111;  /*支持算术运算*/
.header {
  color: @light-blue;
  height:88rem / 50; /*运算符两边必须有空格*/
}

//嵌套
.header {
    color: black;
    .navigation {   /*不用写后代选择器*/
        font-size: 12px;
    }
    .logo {
        width: 300px;
    }
    >span{ /*相当于.header>.span*/
        color:red;
    }
    &:hover{/*相当于.header:hover*/
        background-color:green
    }
}

//导入其他less或css文件
@import "library"; // library.less
@import "typo.css";

//补充：混入
.bordered() {
  border-top: dotted 1px black;
  border-bottom: solid 2px black;
}/*定义时也可加上(),如.bordered(){...},此时生成的css文件中看不到混入的原始样式*/
.menu a {
  color: #111;
  .bordered;  /*直接通过.bordered或.bordered()引入上面的样式*/
}
.post a {
  color: red;
  .bordered();
}
```

