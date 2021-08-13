# icons 无锋页面上的一些 icons

可能来自不同的地方，可能是 cdn 或者本地文件。比如 ：https://cdn.jsdelivr.net/gh/ionic-team/ionic-docs@latest/static/icons/component-alert-icon.png

## 实现

createReactComponent 用来创建组件的基础方法

```
export const AlertIcon = /*@__PURE__*/ createReactComponent<HTMLImageElement>(type,'alert');
```

以上代码可以通过脚本生成

```
const ionicIcons = ['alert]
g(ionicIcons) --> component/IonicIcons
```
