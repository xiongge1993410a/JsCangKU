今日内容:

> 利用浮动特性实现图片和文字左右摆放
>
> 灵活实现各种三角形
>
> CSS初始化
>
> H5 新增标签
>
> H5新增表单特性
>
> CSS3新增选择器
>
> CSS3其他特性

## 利用浮动特性实现图片和文字左右摆放

利用浮动对后面的块元素不占据空间，但对文字仍然要占据空间的原理

## 灵活实现各种三角形

1. 三角形通过border实现,border依赖于由多个border构成的内容区宽高为0的盒子
2. 四个border宽度可灵活调整，相当于内容区（一个宽高为0的点）在盒子内部不同位置移动
3. border-style均为solid，出三角形所在border外，其他三个border颜色均为transparent

```html
/*以下实现直角在右下角，底边为50px  另一直角边高度为150的直角三角形*/

.box1 {
width: 0;
height: 0;
border-style: solid;
border-width: 150px 50px 0 0;
border-color: transparent blue transparent transparent;
}
```

##  CSS初始化

```html
/* 把我们所有标签的内外边距清零 */
* {
    margin: 0;
    padding: 0
}
/* em 和 i 斜体的文字不倾斜 */
em,
i {
    font-style: normal
}
/* 去掉li 的小圆点 */
li {
    list-style: none
}

img {
    /* border 0 照顾低版本浏览器 如果 图片外面包含了链接会有边框的问题 */
    border: 0;
    /* 取消图片底侧有空白缝隙的问题 */
    vertical-align: middle
}

button {
    /* 当我们鼠标经过button 按钮的时候，鼠标变成小手 */
    cursor: pointer
}

a {
    color: #666;
    text-decoration: none
}

a:hover {
    color: #c81623
}

button,
input {
    /* "\5B8B\4F53" 就是宋体的意思 这样浏览器兼容性比较好 */
    font-family: Microsoft YaHei, Heiti SC, tahoma, arial, Hiragino Sans GB, "\5B8B\4F53", sans-serif
}

body {
    /* CSS3 抗锯齿形 让文字显示的更加清晰 */
    -webkit-font-smoothing: antialiased;
    background-color: #fff;
    font: 12px/1.5 Microsoft YaHei, Heiti SC, tahoma, arial, Hiragino Sans GB, "\5B8B\4F53", sans-serif;
    color: #666
}

.hide,
.none {
    display: none
}
/* 清除浮动 */
.clearfix:after {
    visibility: hidden;
    clear: both;
    display: block;
    content: ".";
    height: 0
}

.clearfix {
    *zoom: 1
}
```

## H5语义化标签

更加语义化，便于搜索引擎收录，从布局的角度均类似div

- header
- nav
- article
- aside
- section
- footer
- ...

## H5多媒体标签

- video  视频  常用属性  src   autoplay  controls   loop  muted  poster   常用资源格式 .mp4
- audio  音频  常用属性  src  autoplay  controls   loop   常用资源格式  .mp3



## H5新增表单新特性

### 新增表单元素类型

| 属性  | 属性值   | 含义                                                    |
| ----- | -------- | ------------------------------------------------------- |
| type= | email    | 邮箱  提交时会验证                                      |
|       | url      | url   提交时会验证                                      |
|       | number   | 数字  不允许输入非数字                                  |
|       | tel      | 电话号码   手机端 显示数字软键盘                        |
|       | search   | 搜索    输入文字后右侧出现X,手机端右下角 按钮 显示 搜索 |
|       | date     | 日期                                                    |
|       | month    | 月份                                                    |
|       | week     | 周                                                      |
|       | datetime | 日期时间                                                |
|       | color    | 取色器                                                  |

### 新增表单属性

| 属性名       | 作用                                                  | 备注                      |
| ------------ | ----------------------------------------------------- | ------------------------- |
| required     | 设置表单元素为必填项                                  | 提交时会验证              |
| placeholder  | 设置提示文字                                          | 要用::placeholder修改颜色 |
| autofocus    | 设置自动获取光标                                      |                           |
| autocomplete | 设置自动完成输入默认值on,易暴露个人信息 通常设为false | 需要有name属性            |
| multiple     | 上传多个文件                                          | 按住ctrl选中多个          |

## CSS3新增选择器

### 属性

| 写法             | 含义                       | 备注 |
| ---------------- | -------------------------- | ---- |
| [属性名]         | 选中具备某个属性的标签     |      |
| [属性名=属性值]  | 选中 属性等于某个值 的标签 |      |
| [属性名^=属性值] | 选中属性以某个值开头的标签 |      |
| [属性名$=属性值] | 选中属性以某个值结尾的标签 |      |
| [属性名*=属性值] | 选中属性包含某个值的标签   |      |

注意属性选择器 权重 为 10

### 结构伪类

| 写法           | 含义                 | 备注                                                    |
| -------------- | -------------------- | ------------------------------------------------------- |
| :first-child   | 选中同级第一个标签   |                                                         |
| :last-child    | 选中同级最后一个标签 |                                                         |
| :nth-child()   | 选中同级第 n 个标签  | （）内可为数字、单词even/odd、公式 n n+3  -n+3 2n  2n+1 |
| :first-of-type | 选中第一个某类标签   |                                                         |
| :last-of-type  | 选中最后一个某类签   |                                                         |
| :nth-of-type() | 选中第n个某类标签    |                                                         |
| ...见手册      |                      |                                                         |

### 伪元素

| 写法      | 含义               | 备注 |
| --------- | ------------------ | ---- |
| ::after   | 在元素内部尾部添加 |      |
| ::before  | 在元素内部头部添加 |      |
| ...见手册 |                    |      |

注意:

- before/after伪元素选择器必须有content
- 仅可用于双标签
- 伪元素默认为行内标签
- 权重为1

## CSS3其他特性

### CSS3盒子模型（重要）

box-sizing:border-box|content-box   content-box为默认值表示传统盒子模型，值为border-box时width及height包含border及padding

### CSS特效

- 滤镜:filter:blur(5px)
- 过渡效果 transition:all 5s ease 2s  （重要）

### CSS calc函数

calc函数可以将用不同单位表示的尺寸(如百分比 与 像素值)一起计算

```html
 <style>
      .box {
        height: 100px;
        border: 1px solid red;
      }
      .inner {
        width: calc(100% - 30px);/*注意：运算符两边必须有空格*/
        height: 100%;
        background-color: skyblue;
      }
    </style>
  </head>
  <body>
    <div class="box">
      <div class="inner"></div>
    </div>
  </body>
```

