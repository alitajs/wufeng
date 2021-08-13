# @alita/test

一个通用的 jest 测试工具类。

## 安装和配置

### 1.与 umi-test 结合使用

```bash
yarn add umi-test @alita/test --dev
```

使用 umi-test 无需额外配置

### 2.与 jest 结合使用

```bash
yarn add jest @types/jest @alita/test --dev
```

增加配置 jest.config.js

```js
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  modulePathIgnorePatterns: [],
  moduleDirectories: ['node_modules'],
  transform: {
    '^.+\\.(ts|tsx)?$': 'ts-jest/dist',
  },
  transformIgnorePatterns: ['[/\\\\]node_modules[/\\\\].+\\.(js|jsx)$'],
  setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
  globals: {
    'ts-jest': {
      tsconfig: 'tsconfig.json',
    },
  },
  watchPlugins: ['jest-watch-typeahead/filename', 'jest-watch-typeahead/testname'],
};
```

## 使用

### testA11Y

```jsx
it('passes a11y test', async () => {
  await testA11Y(<MyComponent />, options);
});

// sometimes we need to perform interactions first to render conditional UI
it('passes a11y test when open', async () => {
  const { container } = render(<MyComponent />, options);

  fireEvent.click(screen.getByRole('button'));

  await testA11Y(container, options);
});
```

### render

就是 @testing-library/react 的 render。在定制工具中，这里会默认包裹 `Providers`。 所以封装一层显得很有不要，但是在通用的测试方法类中，有点多余。

你可以通过自定义 render 的方法定制它。

```tsx
// src/utils/test-utils.ts
const renderWithProviders = (ui: React.ReactElement) => render(<Providers>{ui}</Providers>);

export * from '@alita/test';

export { renderWithProviders as render };
```

```tsx
// 使用 renderWithProviders 覆盖了 render
import { render, testA11y } from 'src/utils/test-utils';

test('some test', async () => {
  const { container } = render(<Button></Button>);

  await testA11y(container);
});
```

#### render 返回的几个常用方法

```tsx
import { render } from '@alita/test';

test('some test', async () => {
  const { container, getByText, getByTestId, getByRole } = render(
    <Button data-testid="btn">提交</Button>,
  );

  // 通过定义的 testid 找到
  expect(getByTestId('btn')).toHaveClass('some-button');
  // 通过渲染后的文字找到
  expect(getByText('提交')).toHaveClass('some-button');
  // 通过原始的 button html 标签找到
  expect(getByRole('button')).toHaveClass('some-button');
});
```

### screen

这个和 render 返回的方法类似，只是是通过找全屏的元素来查找的。有些组件渲染后会挂载在 body 或者其他全局的 dom 上，所以从 render 返回的 container 可能不包含它。

```tsx
screen.getByText('提交');
```

### fireEvent

触发一些事件，用的比较多的是点击事件，还有 focus,blur

```tsx
// 点了一下按钮
fireEvent.click(button);
fireEvent.focus(input);
fireEvent.blur(input);
```

点击事件测试示例

```tsx
const fn = jest.fn();
render(<Button onClick={fn}>Button</Button>);

const button = screen.getByText('Button');
fireEvent.click(button);

expect(fn).toHaveBeenCalledTimes(1);

fireEvent.click(button);

expect(fn).toHaveBeenCalledTimes(2);
```
