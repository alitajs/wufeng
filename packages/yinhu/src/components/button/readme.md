# yh-button

<!-- Auto Generated Below -->


## Properties

| Property      | Attribute      | Description                                                                                                                                                                                                     | Type                                       | Default     |
| ------------- | -------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------ | ----------- |
| `block`       | `block`        | Set to `true` for a full-width button or to `false` for a full-width button without left and right borders.                                                                                                     | `boolean`                                  | `false`     |
| `color`       | `color`        | The color to use from your application's color palette. Default options are: 'default' \| 'primary' \| 'success' \| 'warning' \| 'danger'. For more information on colors, see [theming](/docs/theming/basics). | `string`                                   | `'default'` |
| `disabled`    | `disabled`     | If `true`, the user cannot interact with the button.                                                                                                                                                            | `boolean`                                  | `false`     |
| `fill`        | `fill`         | Set to `"outline"` for a transparent button with a border, or to `"solid"`.                                                                                                                                     | `"none" \| "outline" \| "solid"`           | `'solid'`   |
| `loading`     | `loading`      | If this button has loading                                                                                                                                                                                      | `boolean`                                  | `false`     |
| `loadingText` | `loading-text` | If this button loading,show the loadingText                                                                                                                                                                     | `string`                                   | `''`        |
| `size`        | `size`         | The button size.                                                                                                                                                                                                | `"large" \| "middle" \| "mini" \| "small"` | `'middle'`  |
| `type`        | `type`         | The type of the button.                                                                                                                                                                                         | `"button" \| "reset" \| "submit"`          | `'button'`  |


## Events

| Event      | Description                          | Type                |
| ---------- | ------------------------------------ | ------------------- |
| `aliBlur`  | Emitted when the button loses focus. | `CustomEvent<void>` |
| `aliClick` | Emitted when the button is clicked.  | `CustomEvent<void>` |
| `aliFocus` | Emitted when the button has focus.   | `CustomEvent<void>` |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
