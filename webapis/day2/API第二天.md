## API第二天

### 操作标签本身自带的属性

获取

```js
标签对象.属性名
```

设置

```js
标签对象.属性名 = 值
```

上面操作标签自带的属性要排除`class`属性

### 操作`class`属性

获取

```js
标签对象.className
```

设置

```js
标签对象.className = 值
```

### 操作标签自定义的属性

获取

```js
标签对象.getAttribute('属性名')
```

设置

```js
标签对象.setAttribute('属性名','属性值')
```

代码

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <div></div>
    <button id="btn">添加属性</button>
    <script src="../day1/js/public.js"></script>
    <script>
      var btn = $("#btn");
      var div = $("div");
      btn.onclick = function () {
        div.setAttribute("index", "阿伟");
      };
    </script>
  </body>
</html>

```
删除属性

```js
标签对象.removeAttribute('属性名')
```

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <div title="阿念"></div>
    <button id="btn">添加属性</button>
    <button id="delAttr">删除属性</button>
    <script src="../day1/js/public.js"></script>
    <script>
      var btn = $("#btn");
      var div = $("div");
      var delAttr = $("#delAttr");
      btn.onclick = function () {
        div.setAttribute("index", "阿伟");
      };

      delAttr.onclick = function () {
        div.removeAttribute("title");
      };
    </script>
  </body>
</html>

```

tab栏切换

第一步：需要分析它的HTML的结构

上面有5个li

下面有5个div 

它们是一一对应的

第二步：先完成li标签的排它思想

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Document</title>
    <style>
      * {
        margin: 0;
        padding: 0;
      }

      li {
        list-style-type: none;
      }

      .tab {
        width: 978px;
        margin: 100px auto;
      }

      .tab_list {
        height: 39px;
        border: 1px solid #ccc;
        background-color: #f1f1f1;
      }

      .tab_list li {
        float: left;
        height: 39px;
        line-height: 39px;
        padding: 0 20px;
        text-align: center;
        cursor: pointer;
      }

      .tab_list .current {
        background-color: #c81623;
        color: #fff;
      }

      .item_info {
        padding: 20px 0 0 20px;
      }

      .item {
        display: none;
      }
    </style>
  </head>

  <body>
    <div class="tab">
      <div class="tab_list">
        <ul>
          <li class="current">商品介绍</li>
          <li>规格与包装</li>
          <li>售后保障</li>
          <li>商品评价（50000）</li>
          <li>手机社区</li>
        </ul>
      </div>
      <div class="tab_con">
        <div class="item" style="display: block">商品介绍模块内容</div>
        <div class="item">规格与包装模块内容</div>
        <div class="item">售后保障模块内容</div>
        <div class="item">商品评价（50000）模块内容</div>
        <div class="item">手机社区模块内容</div>
      </div>
    </div>
    <script>
      // 1.获取到所有的li标签
      var lis = document.querySelectorAll(".tab_list li");
      // 2.注册点击事件
      for (var i = 0; i < lis.length; i++) {
        lis[i].onclick = function () {
          // 先将所有li身上的class属性的值清空
          for (var j = 0; j < lis.length; j++) {
            lis[j].className = "";
          }
          // 鼠标被点击这个元素应该给它添加类名叫 current
          this.className = "current";
        };
      }
    </script>
  </body>
</html>
```

第三步：应该完成联动的效果

分析：上面的li的下标与div的下标是一一对应的

思考：如何联动？ 肯定是通过下标来找

当我们点击第一个li时 应该拿到第一个li的下标 通过这个下标就可以找到 第一个div 让它显示出来

当我们点击第二个li时 应该拿到第二个li的下标 通过这个下标就可以找到 第二个div 让它显示出来

................

> 如何拿到li身上的下标呢？

- 3.1 先获取到所有的div标签  获取class="tab_con" 它下面的div标签 

- 3.2 想要拿到点击li时拿到它的下标  先给每一个li添加自定义的属性
- 3.3 排它思想

比如我们有五个铁盒子，每一个铁盒子里面装了一个铁球，现在我们从铁盒子里面将铁球从盒子里面拿出来，打乱顺序，要求你原封不动放回去？

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Document</title>
    <style>
      * {
        margin: 0;
        padding: 0;
      }

      li {
        list-style-type: none;
      }

      .tab {
        width: 978px;
        margin: 100px auto;
      }

      .tab_list {
        height: 39px;
        border: 1px solid #ccc;
        background-color: #f1f1f1;
      }

      .tab_list li {
        float: left;
        height: 39px;
        line-height: 39px;
        padding: 0 20px;
        text-align: center;
        cursor: pointer;
      }

      .tab_list .current {
        background-color: #c81623;
        color: #fff;
      }

      .item_info {
        padding: 20px 0 0 20px;
      }

      .item {
        display: none;
      }
    </style>
  </head>

  <body>
    <div class="tab">
      <div class="tab_list">
        <ul>
          <li class="current">商品介绍</li>
          <li>规格与包装</li>
          <li>售后保障</li>
          <li>商品评价（50000）</li>
          <li>手机社区</li>
        </ul>
      </div>
      <div class="tab_con">
        <div class="item" style="display: block">商品介绍模块内容</div>
        <div class="item">规格与包装模块内容</div>
        <div class="item">售后保障模块内容</div>
        <div class="item">商品评价（50000）模块内容</div>
        <div class="item">手机社区模块内容</div>
      </div>
    </div>
    <script>
      // 1.获取到所有的li标签
      var lis = document.querySelectorAll(".tab_list li");
      var divs = document.querySelectorAll(".tab_con div");
      // console.log(divs);
      // 2.注册点击事件
      for (var i = 0; i < lis.length; i++) {
        // 给每一个li做一个标记 其实就是给它添加自定义属性
        lis[i].setAttribute("index", i);
        // 函数什么时候才会被执行 一定是调用才会执行
        // 鼠标点击对应 的li时 对应的函数才会被执行
        lis[i].onclick = function () {
          // 先将所有li身上的class属性的值清空
          for (var j = 0; j < lis.length; j++) {
            lis[j].className = "";
            // 将所有的div先隐藏
            divs[j].style.display = "none";
          }
          // 鼠标被点击这个元素应该给它添加类名叫 current
          this.className = "current";
          // 被点击的这个li标签身上的自定义属性index的值
          // console.log(this.getAttribute('index'))
          var index = this.getAttribute("index");
          divs[index].style.display = "block";
        };
      }
    </script>
  </body>
</html>

```

### H5新增的自定义属性的方式

设置

```html
<div index='1' data-index='1'></div>
```

h5规定给标签添加自定义属性是以`data-xxxx`这样定义

获取

```js
对象.getAttribute('要获取的属性名')
```

###  节点概述 重点

- 获取父节点

```js
JS对象.parentNode
```

- 获取子节点

```js
parentNode.childNodes // 标准   
```

只要子元素有换行就会当作为文本节点 不太方便使用 返回是一个伪数组

```js
parentNode.children // 非标准  
```

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <ul>
      <li>第1个li</li>
      <li>第2个li</li>
      <li>第3个li</li>
      <li>第4个li</li>
    </ul>
    <script>
      var ul = document.querySelector("ul");
      var lis = ul.childNodes; // w3c推荐的
      var li = ul.children;
      for (var i = 0; i < li.length; i++) {
        console.log(li[i].innerHTML);
      }
    </script>
  </body>
</html>

```

- 获取第一个子元素与最后一个子元素
  - 如果想要第一个子元素节点，可以使用 parentNode.chilren[0] 
  - 如果想要最后一个子元素节点，可以使用 parentNode.chilren[parentNode.chilren.length - 1]

### 创建节点

语法：

```js
document.createElement('标签名')
var li = ''
```

### 追加节点

语法：

```js
父对象.appendChild(child) 
```

表示追加到某个父元素的最后面

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <ul>
      <li>第1个li</li>
      <li>第2个li</li>
      <li>第3个li</li>
      <li>第4个li</li>
    </ul>
    <button id="btn">创建</button>
    <script>
      var btn = document.querySelector("#btn");
      var ul = document.querySelector("ul");
      btn.onclick = function () {
        // 创建 li 标签
        var liNode = document.createElement("li");
        liNode.innerHTML = "我是创建的li标签";
        // 父元素.appendChild(要追加的子元素)
        ul.appendChild(liNode);
      };
    </script>
  </body>
</html>

```

语法

```js
父对象.insertBefore(要追加的元素, 指定元素) 
```

把要追加的元素追加指定元素的前面去

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <ul>
      <li>第1个li</li>
      <li>第2个li</li>
      <li>第3个li</li>
      <li>第4个li</li>
    </ul>
    <button id="btn">创建</button>
    <script>
      var btn = document.querySelector("#btn");
      var ul = document.querySelector("ul");
      btn.onclick = function () {
        // 创建 li 标签
        var liNode = document.createElement("li");
        liNode.innerHTML = "我是创建的li标签";

        var liLast = ul.children[ul.children.length - 1];
        // 父对象.insertBefore(要追加的元素,追加到谁的前面)
        ul.insertBefore(liNode, liLast);
      };
    </script>
  </body>
</html>

```

剪切功能

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
      ul {
        height: 40px;
        line-height: 40px;
        border: 1px solid #000;
        overflow: hidden;
      }
      li {
        height: 40px;
        line-height: 40px;
      }
    </style>
  </head>
  <body>
    <button id="btn">点击</button>
    <hr />
    <ul>
      <li>美国新冠死亡病例超过20万 欧洲理事会主席决定自我隔离</li>
      <li>又一例！从广东结束隔离后返四川被确诊为无症状感染者</li>
      <li>时隔三日 韩国单日新增新冠确诊数再次回升至百例</li>
      <li>欧洲疫情反弹加剧 多国加强区域管控</li>
    </ul>

    <script>
      var btn = document.querySelector("#btn");
      var ul = document.querySelector("ul");
      // 给btn注册点击事件
      btn.onclick = function () {
        var liFirst = ul.children[0];
        ul.appendChild(liFirst);
      };
    </script>
  </body>
</html>
```

