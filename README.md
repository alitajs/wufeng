# 无锋

> 重剑无锋，大巧不工

“低代码”算是现在比较热门的一个课题，我们也尝试参与了公司内部的低代码平台搭建，觉得在近几年内这个课题应该都会比较热门。有个朋友问我，如果让你做一个低代码平台，你觉得都需要什么技术？
我就在思考，以我现在掌握的技术栈能完成到什么程度？于是就想手写一个低代码平台，看看都需要什么技术。

是的，这是一个没有规划的项目，从新建项目开始，慢慢挖坑，慢慢填坑。最终它可能是一个低代码平台，也可能是一个低代码技术栈的参考。

## 工作流程

1、 yarn
2、 yarn build
3、 cd packages/wufeng && yarn run watch （如果有同时修改其他的库，也需要另起watch服务）
4、 yarn start:app

## 主题

延用 dumi 的方案，通过 `document.documentElement.setAttribute('data-prefers-color', 'dark');` 开启暗黑风格

在样式中使用 `data-prefers-color='dark'` 判断是暗黑模式。

如： packages/wufeng/src/EditorStyle/styles/box-model.less#L9

```css
    [data-prefers-color='dark'] & {
      border: 1px solid @text-color-dark;
    }
```

## 备注

以下是我对一些包的构想，只是第一期个人脑爆的纪录。

### 文档

文档相关的依旧会使用 dumi，但是可能需要重写维护 dumi-theme-alita。因为会涉及到指定 demo 展示页面的问题，其中可能还有 vue 相关的官网展示。

### 组件

yinhu 组件使用 stencil 编写 web component 组件，后续可以直接发布成 React 和 vue 项目。因此这里可能需要一个 vue 版本的官网，响应上面的“文档”需求

wufeng 组件，纯 React 的组件库，也是主要提供给其他地代码平台构建者的一个库。可能包含布局，和特定逻辑。

### 数据

数据的话，使用 dva ，把一些特定事件的响应逻辑保存到第三方包中，这里会涉及到 umi 项目中，如何手动注册 dva model，所以需要编写 `plugin-dva`,理想状态下是能支持组件级别的按需加载。

### 表单

主要是左侧的编辑表单，因为现在的移动端动态表单 dform 很好用，也用的很熟悉，所以期望在这里依旧使用 dform ，因此可能会强制规定这里用 iframe 打开一个移动端的表单，不过可能需要重写一个表单才行，毕竟会涉及到编辑类型

### 图片资源

icon，左侧的列表展示，感觉 ionic 的组件列表图片很好看，直接用 cdn 加载下来用如何

### 测试

测试的话，会使用 umi-test，utils 的话，会是 @alita/test，这个包是参考一些测试库整理的，在 dform 和 antd-mobile@5 中使用，表现都还行。

### 拖拽

打算用 react-dnd ，用过而且用法简单。

### 用户系统

展示不考虑编写后段，所以先使用 `leancloud-storage` 实现，应该足够满足现在的测试需求。
