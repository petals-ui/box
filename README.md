English | [简体中文](./README.zh-CN.md)

# Petals box

Box component.

## Installation

```
npm i -S @petals/box
```

## Usage

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

```html
<div class="Box Box--fixedHeight" style="height: 150px;">
  <div class="Box-header">Fixed height header</div>
  <div class="Box-body">
    <ol>
      <li>Trick</li>
      <li>Petals</li>
      <li>Buds</li>
      <li>Handie</li>
      <li>???</li>
    </ol>
  </div>
  <div class="Box-footer">Fixed height footer</div>
</div>
```
