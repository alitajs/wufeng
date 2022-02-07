import { wufengController, findItem } from './index';

test('inputComponents', () => {
  wufengController.registerInput({}, { name: 'string', type: 'string' });
  const current = findItem(wufengController.inputComponents, (item) => item.name === 'string');
  console.log(current);
  expect(current?.name).toBe('string');
});

test('Components', () => {
  wufengController.registerComponent(
    {},
    {
      name: 'string',
      ...{
        id: 500001,
        type: 'Input',
        props: {
          fieldProps: '',
          required: false,
          placeholder: '请输入',
          title: '输入框',
        },
        propTypes: {
          fieldProps: 'string',
          required: 'boolean',
          placeholder: 'string',
          title: 'string',
        },
        defaultProps: {},
        style: {},
        cardProps: {
          title: 'Dform 输入框',
          subTitle: 'Dform 表单输入框',
        },
      },
    },
  );
  const current = findItem(wufengController.components, (item) => item.name === 'string');
  expect(current?.id).toBe(500001);
});

test('inputComponents', () => {
  const defaultLabels = {
    type: '类型',
  };
  wufengController.pushLabels(defaultLabels, 'zh-CN');
  const text = wufengController.findLabel('type');
  expect(text).toBe('类型');
  wufengController.pushLabels(
    {
      type: 'Type text',
    },
    'en-UK',
  );
  wufengController.setLang('en-UK');
  const current = wufengController.findLabel('type');
  expect(current).toBe('Type text');
});
