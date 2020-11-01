> flex布局
>
> 线性渐变

## flex布局

### 基本概念

- 核心思想：通过对父盒子设置某些属性，方便地将内部子元素摆放到合适的位置，如水平垂直居中
- 适用范围:  移动端开发及不考虑兼容性的PC端开发
- 兼容性:IE11及以下不支持或仅支持部份特性
- 弹性容器:弹性盒子  通过display:flex;设置
- 子项目或弹性子元素：弹性容器的子元素
- 主轴：控制子元素排列方向 默认为水平向右（x轴正方向），可通过flex-direction设置
- 侧轴/次轴/交叉轴：与主轴方向垂直,默认垂直向下（y轴正方向）

### 弹性盒子注意事项

- 弹性子元素类似inline-block，不会独占一行，可设置宽高
- 对弹性子元素设置 float vertical-align  clear  无效

### 基本属性-父盒子

#### flex-direction设置主轴方向

属性值:row|row-reverse|column|column-reverse

#### justify-content 设置元素在主轴方向的对齐方式

flex-start|flex-end|center|space-around|space-between

#### align-items 设置元素在侧轴方向的对齐方式(单行)

stretch|flex-start|flex-end|center

#### align-content 设置元素在侧轴方向的对齐方式(多行) 仅当flex-wrap:wrap；时有效

flex-start|flex-end|center|space-around|space-between|baseline

#### flex-wrap设置元素换行（默认不换行）

nowrap|wrap|wrap-reverse

#### flex-flow 是flex-direction和flex-wrap的合写属性

row nowrap|column wrap|...

### 基本属性-子元素

#### flex设置子元素分配父盒子主轴方向剩余空间的方式

所有子元素均 flex:1 则会均分父盒子的宽度;共三个子元素，两个flex:1,一个flex:2,则空间分配为25% 50%  25%

同时设置width和flex时，width会失效

#### align-self 设置子元素单独在侧轴方向的对齐方式

stretch|flex-start|flex-end|center

#### order设置子元素在主轴方向的摆放顺序，值越小越靠近主轴原点方向

默认值为0,可为负值

## 线性渐变



####  







