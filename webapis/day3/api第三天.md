# API 的第三天

## 删除节点

语法：

```js
父对象.removeChild(要删除的子元素);
```

代码如下：

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
      var lis = ul.children; // 返回一个伪数组

      for (var i = 0; i < lis.length; i++) {
        lis[i].onclick = function () {
          // 鼠标被点击的这个用 this来表示
          // 父对象.removeChild(要删除的元素)
          ul.removeChild(this);
        };
      }
    </script>
  </body>
</html>
```

删除元素不能删除后添加的元素

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
    <button id="btn">新增</button>
    <script>
      var ul = document.querySelector("ul");
      var btn = document.querySelector("#btn");
      var lis = ul.children;

      btn.onclick = function () {
        var li = document.createElement("li");
        li.innerHTML = "新增加的元素";
        // 将新创建的li追加到ul里面去
      };

      for (var i = 0; i < lis.length; i++) {
        lis[i].onclick = function () {
          // 鼠标被点击的这个用 this来表示
          // 父对象.removeChild(要删除的元素)
          ul.removeChild(this);
        };
      }
    </script>
  </body>
</html>
```

自杀式方法

```js
自己.remove();
```

代码如下：

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
      var lis = ul.children; // 返回一个伪数组

      for (var i = 0; i < lis.length; i++) {
        lis[i].onclick = function () {
          // 想自杀
          this.remove();
        };
      }
    </script>
  </body>
</html>
```

删除留言案例

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

      body {
        padding: 100px;
      }

      textarea {
        width: 200px;
        height: 100px;
        border: 1px solid pink;
        outline: none;
        resize: none;
      }

      ul {
        margin-top: 50px;
      }

      li {
        width: 300px;
        padding: 5px;
        background-color: rgb(245, 209, 243);
        color: red;
        font-size: 14px;
        margin: 15px 0;
      }

      li a {
        float: right;
      }
    </style>
  </head>

  <body>
    <textarea name="" id=""></textarea>
    <button>发布</button>
    <ul></ul>
    <script>
      // 1.获取元素
      var text = document.querySelector("textarea");
      var button = document.querySelector("button");
      var ul = document.querySelector("ul");
      // 2.给button标签对象添加onclick事件
      button.onclick = function () {
        var textValue = text.value;
        // 判断输入框有没有内容 如果没有内容 就提示用户 并且代码不需要往下执行了
        if (textValue.trim().length === 0) return alert("请重新输入");
        // 表示用户填写了内容 创建一个li标签
        var li = document.createElement("li");
        li.innerHTML = `${textValue} <a href="javascript:;" onclick="delLi(this)">删除</a>`;
        ul.appendChild(li);
        // 内容填写完了 将输入框清空
        text.value = "";
      };

      // 声明一个函数用于删除 li
      function delLi(obj) {
        obj.parentNode.remove();
      }
    </script>
  </body>
</html>

```



## 克隆节点

```js
对象.cloneNode()
// 参数的值要么是true要么是false 参数的默认值是false false就表示浅拷贝 如果是true就表示是深拷贝
```

代码如下：

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
      <li>1</li>
      <li>2</li>
      <li>3</li>
    </ul>
    <script>
      var ul = document.querySelector("ul");
      var cloneLi = ul.children[0].cloneNode(true);
      ul.appendChild(cloneLi);
    </script>
  </body>
</html>
```

生成表格

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Document</title>
    <style>
      table {
        width: 500px;
        margin: 100px auto;
        border-collapse: collapse;
        text-align: center;
      }

      td,
      th {
        border: 1px solid #333;
      }

      thead tr {
        height: 40px;
        background-color: #ccc;
      }
    </style>
  </head>

  <body>
    <table cellspacing="0">
      <thead>
        <tr>
          <th>姓名</th>
          <th>科目</th>
          <th>成绩</th>
          <th>操作</th>
        </tr>
      </thead>
      <tbody></tbody>
    </table>
    <script>
      // 1.先去准备好学生的数据
      var datas = [
        {
          name: "魏璎珞",
          subject: "JavaScript",
          score: 100
        },
        {
          name: "弘历",
          subject: "JavaScript",
          score: 98
        },
        {
          name: "傅恒",
          subject: "JavaScript",
          score: 99
        },
        {
          name: "明玉",
          subject: "JavaScript",
          score: 88
        },
        {
          name: "大猪蹄子",
          subject: "JavaScript",
          score: 0
        }
      ];
      var tbody = document.querySelector("tbody");
      // 1.需要根据数据得到 tr 遍历数组
      for (var i = 0; i < datas.length; i++) {
        // 2. 创建 tr标签
        var trNode = document.createElement("tr");
        // 3. 创建好的元素需要追加到tbody里面去
        tbody.appendChild(trNode);
        // 4.行里面的单元格由数组里面的元素来决定 遍历数组里面的元素 由于数组里面的元素它是对象 所以我们需要使用for...in来遍历  访问对象里面的属性 对象.属性名 或者 对象['属性名']
        for (var k in datas[i]) {
          // 需要创建td标签
          var td = document.createElement("td");
          // td是一个双标签 它的由是由 对象里面的属性来决定
          td.innerHTML = datas[i][k];
          //   console.log(datas[i][k]);
          // 然后将td追加到tr里面去
          trNode.appendChild(td);
        }
        // 每一个循环的里面需要手动的创建一个td
        var lastTd = document.createElement("td");
        // 往td里面写入一个 a标签
        lastTd.innerHTML = '<a href="javascript:;" onclick="del(this)">删除</a>';
        // 然后将它追加到tr里面去
        trNode.appendChild(lastTd);
      }

      // 需要将被删除的这一行给删除
      function del(obj) {
        obj.parentNode.parentNode.remove();
      }
    </script>
  </body>
</html>

```

## 事件监听

```js
标签对象.addEventListener('事件名', 事件处理程序[,事件冒泡还是事件捕获])
```

注意：

1. 该方法不支持IE 678
2. 事件名不要加on前缀
3. 第三个参数 它的默认值 是false 默认就是事件冒泡  从里往外 这个顺序进行触发 如果值设置为 `true`就表示是事件捕获  从外往里这个顺序触发

```js
标签对象.attachEvent('事件名',事件处理程序)
```

注意：

1. 该方法支持IE 678浏览器
2. 事件名需要加on前缀

edge