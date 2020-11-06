[English](./README.md) | 简体中文

# Petals 盒子

盒子组件是最基础的 UI 组件之一，也是最基本的布局类 UI 组件。

## 安装

```
npm i -S @petals/box
```

## 用法

最简单的方式，和直接用 `<div>` 没啥区别：

```html
<div class="Box">
  <ol>
    <li>Trick</li>
    <li>Petals</li>
    <li>Buds</li>
    <li>Handie</li>
    <li>???</li>
  </ol>
</div>
```

框住了头部、主体和尾部区域：

```html
<div class="Box">
  <div class="Box-header"></div>
  <div class="Box-body">
    <ol>
      <li>Trick</li>
      <li>Petals</li>
      <li>Buds</li>
      <li>Handie</li>
      <li>???</li>
    </ol>
  </div>
  <div class="Box-footer"></div>
</div>
```

外部容器、头部、主体、尾部的高度固定：

```html
<div class="Box Box--fixedHeight" style="height: 150px;">
  <div class="Box-header">固定高度的头部</div>
  <!-- 中间区域撑满剩余高度，若内容高度超出会出现滚动条 -->
  <div class="Box-body">
    <ol>
      <li>Trick</li>
      <li>Petals</li>
      <li>Buds</li>
      <li>Handie</li>
      <li>???</li>
    </ol>
  </div>
  <div class="Box-footer">固定高度的尾部</div>
</div>
```
