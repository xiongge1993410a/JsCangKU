> 今日内容:
>
> 移动端开发相关概念
>
> background-size
>
> 流式(百分比)布局

## 相关概念

###  什么是移动端？

主要指手机

### 移动端页面如何查看及调试?

通过谷歌调试工具中的模拟器

### 移动端开发特点

- 屏幕宽度种类繁多，需要适配多种屏幕，且对所有屏幕通常均要占满屏宽
- 1px对应尺寸在移动端与在pc端默认是不一致的
- 举例，50px*50px图片 直接放在移动端按原始像素显示会出现模糊现象
- 移动端页面结构通常较简单

### 移动端开发注意事项：

- 不能直接用传统px布局  需用百分比/flex/rem 或响应式 等新的布局方式
- 必须要添加 视口 标签 meta:vp  （能让1px的尺寸在移动端和在pc端基本一致）
- 通常要使用二倍图(设计稿一般就是二倍图)   如 css  width:40px    图片实际宽度 width:80px
- 通常用css3盒模型

```html
<meta name="viewport" content="width=device-width,initial-scale=1.0,maximum-scale=1.0,minimum-scale=1.0,user-scalable=no">
```

```css
/*移动端特殊样式*/
css3盒模型
设置css3盒模型-重要
box-sizing:border-box;
取消点击a标签高亮色-重要
-webkit-tap-highlight-color:transparent;
取消ios input默认样式
-webkit-appearance:none;
取消a或img长按弹出菜单
-webkit-touch-callout:none;
```

### 物理像素、逻辑像素(css像素)、物理像素比

- 物理像素 由硬件分辨率决定的  如  1920 * 1280  1024 * 768,指真实存在的像素点
- 逻辑/CSS像素  是 css代码 1px 对应的像素点  在pc端物理像素和逻辑像素通常是一致的 1:1  在移动端目前通常是 2:1  或  3:1 （从苹果公司引入retina屏--视网膜屏起开始流行）
- 以上 1:1  2:1  3:1 等比例关系 称为 物理像素比

## background-size 及二倍图切图

background-size:auto auto|100px 200px|100px|100% 100%|cover|contain   设置背景图尺寸

二倍图切图：选中 ios  @*1  @*2  @3  移动工具，选中图层，多倍图一键导出

## 流式布局

- 需要适配各种屏幕的宽度尺寸用百分比
- 在各屏幕上固定的宽度尺寸(通常为小尺寸)用px

- 高度及font-size用px
- body通常设min-width及max-width来限定宽度范围

```css
body{
    min-width: 320px;
    max-width: 640px;
    margin: 0 auto;
}
```



