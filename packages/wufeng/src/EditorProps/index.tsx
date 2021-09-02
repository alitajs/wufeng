import React from 'react';
import type { FC } from 'react';
import Form from 'antd/lib/form';
import Button from 'antd/lib/button';
import Collapse from 'antd/lib/collapse';
import 'antd/lib/form/style/index';
import 'antd/lib/button/style/index';
import 'antd/lib/collapse/style/index';
import { wufengController, findItem } from '../';

type ChangeFunction = (data: any) => void;
interface EditorPropsProps {
  selectItem: any;
  onChange: ChangeFunction;
}

const classPrefix = `wf-editor-props`;

const EditorProps: FC<EditorPropsProps> = (props) => {
  const { selectItem = {}, onChange, ...reset } = props;
  const { component = {} } = selectItem;
  const { props: initialValues } = component;

  const [form] = Form.useForm();

  if (!initialValues) return <div className={classPrefix}>请点击选择需要编辑的组件</div>;

  const onFinish = (values: any) => {
    onChange?.({
      ...selectItem,
      component: {
        ...selectItem.component,
        props: {
          ...selectItem.component.props,
          ...values,
        },
      },
    });
  };

  const onFinishFailed = (errorInfo: any) => {
    // eslint-disable-next-line no-console
    console.log('Failed:', errorInfo);
  };
  const { inputComponents } = wufengController;
  const getChildren = (editElem: any) => {
    const { propTypes } = editElem;
    return Object.keys(propTypes).map((key) => {
      let type = propTypes[key];
      const other = {} as any;
      // 是一个字符串数组，type 类型为 select
      if (typeof type === 'object' && typeof type[0] === 'string') {
        other.data = [];
        other.data.push(type.map((i: string) => ({ label: i, value: i })));
        type = 'select';
      }
      const current = findItem(inputComponents, (item) => item.name === type);
      if (current) {
        const { class: Com } = current;
        if (Com) {
          return <Com key={key} label={wufengController.findLabel(key)} name={key} />;
        }
        return <div key={key}>未找到类型为{type}的编辑器</div>;
      }
      return <div key={key}>未找到类型为{type}的编辑器</div>;
    });
  };
  const initValues = (data: any = {}, types: any = {}) => {
    const newDate = { ...data };
    Object.keys(types).forEach((key) => {
      const type = types[key];
      if (typeof type === 'object' && typeof type[0] === 'string') {
        newDate[key] = [];
        newDate[key].push(data[key]);
      }
    });
    return newDate;
  };
  console.log(initialValues);
  return (
    <Form
      name="right"
      form={form}
      colon
      layout="vertical"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      initialValues={initialValues}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      {getChildren(component)}
      <Button onClick={() => form.submit()}>提交</Button>
    </Form>
  );
};
export default EditorProps;
