import React from 'react';
import type { FC } from 'react';
import EditorList from 'rc-editor-list';
import editorZh from 'rc-editor-list/lib/locale/zh_CN';
import './styles/index.less';

const classPrefix = `wf-editor-style`;

const { ClassName, Layout, Font, BackGround, Border, Interface, Margin, Shadow } = EditorList;

interface EditorStyleProps {
  onChange: (data: any) => void;
  selectElement: any;
  selectItem: any;
}

const EditorStyle: FC<EditorStyleProps> = ({ onChange, selectElement, selectItem }) => {
  const onFinish = (values: any) => {
    // eslint-disable-next-line no-console
    console.log('Success:', values);
    // TODO: 需要过滤修改后的样式
    // onChange?.({
    //   ...selectItem,
    //   component: {
    //     ...selectDom.component,
    //     props: {
    //       ...selectDom.component.props,
    //       ...values
    //     }
    //   }
    // })
  };
  console.log(selectElement);
  if (!selectElement) return <div className={classPrefix}>请点击选择需要编辑的组件</div>;
  return (
    <div className={classPrefix}>
      <EditorList
        rootSelector={null}
        editorElem={selectElement}
        onChange={onFinish}
        cssToDom={false}
        locale={editorZh}
        isMobile={true}
        defaultActiveKey={['EditorClassName', 'EditorLayout', 'EditorFont', 'EditorInterface']}
      >
        <ClassName />
        <Layout />
        <Font />
        <Interface />
        <BackGround />
        <Border />
        <Margin />
        <Shadow />
      </EditorList>
    </div>
  );
};
export default EditorStyle;
