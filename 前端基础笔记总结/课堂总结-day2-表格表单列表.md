> 学习任务:
>
> 表格 
>
> 列表
>
> 表单

## 表格

*作用：展示数据（很久以前曾经是布局的主要方式）*

### 标签

- table  最外面的 
- tr  行
- td /th  行里面的一个单元格  th:表头单元格
- 辅助标签
  - tbody  包在所有存放数据的tr外面
  - thead 包在表头 tr的外面
  - tfoot  包在表尾tr的外面
  - caption 表格标题 默认在表格上方水平居中

```html
<!--一个三行三列的表格，默认没有框线-->
<table>
    <tr>
        <td></td>
        <td></td>
        <td></td>
    </tr>
    <tr>
        <td></td>
        <td></td>
        <td></td>
    </tr>
    <tr>
        <td></td>
        <td></td>
        <td></td>
    </tr>
</table>
```

### 相关属性

```html
<!-- 宽高均为300px 有框线、单元格间距为0、单元格边框与内容间距为0、水平居中的表格 -->
<table border="1" width="300" height="300" cellspacing="0" cellpadding="0" align="center" >
     <tr>
         <td>1</td>
         <td>2</td>
         <td>3</td>
     </tr>
     <tr>
         <td></td>
         <td></td>
         <td></td>
     </tr>
     <tr>
         <td></td>
         <td></td>
         <td></td>
     </tr>
</table>
```

### 合并单元格

```html
<table
      border="1"
      width="300"
      height="300"
      cellspacing="0"
      cellpadding="0"
      align="center"
    >
      <tr>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr>
          <!--跨列-->
        <td colspan="2"></td>
        <!-- <td></td> -->
          <!--跨行-->
        <td rowspan="2"></td>
      </tr>
      <tr>
        <td></td>
        <td></td>
        <!-- <td></td> -->
      </tr>
    </table>
```

## 列表

*作用：展示数据，布局*

### 无序列表

```html
<ul>
    <!--ul: unordered list -->
    <!--li: list item -->
    <li>1</li>
    <li>2</li>
    <li>3</li>
    <li>
        <ul>
            <li>1.1</li>
            <li>1.2</li>
            <li>1.3</li>
        </ul>
    </li>
</ul>
注意：ul中只能放li
li中基本可以放任意标签
ul li都要独占一行
li有默认样式，后面学到css通常会清除掉
```

### 有序列表

```html
<ol>
    <!--ul: unordered list -->
    <!--li: list item -->
    <li>1</li>
    <li>2</li>
    <li>3</li>
    <li>
        <ul>
            <li>1.1</li>
            <li>1.2</li>
            <li>1.3</li>
        </ul>
    </li>
</ol>
ol相对而言使用较少
li的父级标签只能是ul或ol
```

### 定义列表

```html
<dl>
    <dt>电子产品</dt>
    <dd>电脑</dd>
    <dd>打印机</dd>
    <dd>投影仪</dd>
    <dt>电子产品</dt>
    <dd>电脑</dd>
    <dd>打印机</dd>
    <dd>投影仪</dd>
    <dt>电子产品</dt>
    <dd>电脑</dd>
    <dd>打印机</dd>
    <dd>投影仪</dd>
</dl>
dl中只能放dt及dd,dt和dd中基本可以放任意标签 
```

## 表单

**作用：提交数据**

### 表单域

```html
<form action="" method="post" name="myform">
</form>
```

### 表单元素

```html
<form action="">
      <!-- 文本框 -->
      <input type="text" value="请填写姓名" />
      <!-- 密码框 -->
      <input type="password" name="" id="" />
      <!-- 单选框 -->
      <input type="radio" name="xingbie" id="nan" checked />
      <label for="nan">男</label>
      <label><input type="radio" name="xingbie" id="" />女</label>

      <!-- 复选框 -->
      <input type="checkbox" name="" id="" />
      <!-- 文件域 -->
      <input type="file" name="" id="" />
      <!-- 提交按钮 -->
      <input type="submit" value="提交" />
      <!-- 重置按钮 -->
      <input type="reset" />
      <!-- 普通按钮 -->
      <input type="button" value="普通按钮" />
      <!-- 图片按钮 -->
      <input type="image" src="图片路径" alt="" />
      <!-- 另一个提交按钮 -->
      <button>提交</button>
      <!-- 下拉列表 -->
      <select name="" id="">
        <option value="">中国</option>
        <option value="">美国</option>
        <option value="" selected>德国</option>
      </select>
      <!-- 文本域 -->
      <textarea name="" id="" cols="30" rows="10">介绍你自己</textarea>
    </form>
```

