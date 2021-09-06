import { getRandom } from 'wufeng';
import type { ComponentGroup } from '@/schema';
import {
  DformInput,
  DformPicker,
  AddressPicker,
  CoverRadio,
  ExtraInput,
  MultiplePicker,
  DformCheckBox,
  DformCustom,
  DformDatePicker,
  DformFile,
  DformImagePicker,
  DformRadio,
  DformSelect,
  DformSwitch,
  DformText,
  DformTextArea,
  RangeDatePicker,
} from '@alitajs/dform';

export const DformData: ComponentGroup[] = [
  {
    type: 'dform',
    data: [
      {
        id: 500001,
        type: 'DformInput',
        props: {
          fieldProps: getRandom(),
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
      {
        id: 500002,
        type: 'DformPicker',
        props: {
          fieldProps: getRandom(),
          required: false,
          placeholder: '请选择',
          title: '选择框',
          data: [
            { label: '是', value: 'yes' },
            { label: '否', value: 'no' },
          ],
        },
        propTypes: {
          fieldProps: 'string',
          required: 'boolean',
          placeholder: 'string',
          data: 'any',
          title: 'string',
        },
        defaultProps: {},
        style: {},
        cardProps: {
          title: 'Dform 选择框',
          subTitle: 'Dform 表单选择框',
        },
      },
      {
        id: 500003,
        type: 'AddressPicker',
        props: {
          title: '地址选择器',
          fieldProps: 'addressPicker',
          placeholderList: ['请选择省', '请选择市', '请选择区'],
          data: [],
        },
        propTypes: {
          title: 'string',
          fieldProps: 'string',
          placeholderList: 'List',
          data: 'any',
        },
        defaultProps: {},
        style: {},
        cardProps: {
          title: 'Dform 地址选择器',
          subTitle: 'Dform 地址选择器',
        },
      },
      {
        id: 500004,
        type: 'CoverRadio',
        props: {
          title: '方形单选框',
          data: [
            { label: '男', value: 'man' },
            { label: '女', value: 'woman' },
          ],
          fieldProps: 'coverRadio',
        },
        propTypes: {
          title: 'string',
          fieldProps: 'string',
          data: 'any',
        },
        defaultProps: {},
        style: {},
        cardProps: {
          title: 'Dform 方形单选按钮',
          subTitle: 'Dform 方形单选按钮',
        },
      },
      {
        id: 500005,
        type: 'ExtraInput',
        props: {
          fieldProps: 'extraInput',
          fieldProps2: 'extraInput2',
          title: '复杂输入框',
          positionType: 'horizontal',
        },
        propTypes: {
          fieldProps: 'string',
          fieldProps2: 'string',
          title: 'string',
          positionType: 'string',
        },
        defaultProps: {},
        style: {},
        cardProps: {
          title: 'Dform 复杂输入框',
          subTitle: 'Dform 复杂输入框',
        },
      },
      {
        id: 500006,
        type: 'MultiplePicker',
        props: {
          title: '多选框',
          fieldProps: 'multiplePicker',
          data: [
            { label: '北京', value: 'beijing' },
            { label: '上海', value: 'shanghai' },
            { label: '福州', value: 'fuzhou' },
          ],
        },
        propTypes: {
          title: 'string',
          fieldProps: 'string',
          data: 'any',
        },
        defaultProps: {},
        style: {},
        cardProps: {
          title: 'Dform 多选框',
          subTitle: 'Dform 多选框',
        },
      },
      {
        id: 500007,
        type: 'DformCheckBox',
        props: {
          title: '多选框',
          fieldProps: 'checkbox',
          data: [
            { value: 'apple', label: '苹果' },
            { value: 'banana', label: '香蕉' },
            { value: 'orange', label: '橙子' },
            { value: 'watermelon', label: '西瓜' },
            { value: 'hami', label: '哈密瓜' },
            { value: 'pineapple', label: '菠萝' },
            { value: 'pear', label: '香梨' },
          ],
        },
        propTypes: {
          title: 'string',
          fieldProps: 'string',
          data: 'any',
        },
        defaultProps: {},
        style: {},
        cardProps: {
          title: 'Dform 方形多选框',
          subTitle: 'Dform 基础方形多选框',
        },
      },
      {
        id: 500008,
        type: 'DformCustom',
        props: {
          title: '自定义组件',
          fieldProps: 'custom',
          CustomDom: () => {
            return `<div style={{ textAlign: 'left' }}>This is a display page</div>`;
          },
        },
        propTypes: {
          title: 'string',
          fieldProps: 'string',
          CustomDom: '',
        },
        defaultProps: {},
        style: {},
        cardProps: {
          title: 'Dform 自定义组件',
          subTitle: 'Dform 地址选择框',
        },
      },
      {
        id: 500009,
        type: 'DformDatePicker',
        props: {
          fieldProps: 'datePicker',
          title: '时间选择框',
          placeholder: '请选择时间',
        },
        propTypes: {
          title: 'string',
          fieldProps: 'string',
          placeholder: '请选择时间',
        },
        defaultProps: {},
        style: {},
        cardProps: {
          title: 'Dform 时间选择框',
          subTitle: 'Dform 时间选择框',
        },
      },
      {
        id: 500010,
        type: 'DformFile',
        props: {
          title: '合同',
          fieldProps: 'contract',
          formsValues: {
            contract: [
              { title: '合约模板2020.pdf', fileId: '1' },
              { title: '电子协议模板2020.pdf', fileId: '2' },
            ],
          },
        },
        propTypes: {
          title: 'string',
          fieldProps: 'string',
          formsValues: 'any',
        },
        defaultProps: {},
        style: {},
        cardProps: {
          title: 'Dform 文件展示框',
          subTitle: 'Dform 文件展示框',
        },
      },
      {
        id: 500011,
        type: 'DformImagePicker',
        props: {
          title: '图片选择框',
          fieldProps: 'imagePicker',
        },
        propTypes: {
          title: 'string',
          fieldProps: 'string',
        },
        defaultProps: {},
        style: {},
        cardProps: {
          title: 'Dform 添加图片',
          subTitle: 'Dform 添加图片',
        },
      },
      {
        id: 500012,
        type: 'DformRadio',
        props: {
          title: '单选框',
          fieldProps: 'radio',
          data: [
            {
              label: '是',
              value: 'yes',
            },
            {
              label: '否',
              value: 'no',
            },
          ],
        },
        propTypes: {
          title: 'string',
          fieldProps: 'string',
          data: 'any',
        },
        defaultProps: {},
        style: {},
        cardProps: {
          title: 'Dform 圆形单选按钮',
          subTitle: 'Dform 圆形单选按钮',
        },
      },
      {
        id: 500013,
        type: 'DformSelect',
        props: {
          type: 'select',
          title: 'andm 选择框',
          fieldProps: 'select',
          data: [
            [
              {
                label: '2013',
                value: '2013',
              },
              {
                label: '2014',
                value: '2014',
              },
            ],
            [
              {
                label: '春',
                value: '春',
              },
              {
                label: '夏',
                value: '夏',
              },
            ],
          ],
        },
        propTypes: {
          type: 'string',
          title: 'string',
          fieldProps: 'string',
          data: 'any',
        },
        defaultProps: {},
        style: {},
        cardProps: {
          title: 'Dform 基础选择框',
          subTitle: 'Dform 基础选择框',
        },
      },
      {
        id: 500014,
        type: 'DformSwitch',
        props: {
          title: '开关选择器',
          fieldProps: 'switch',
        },
        propTypes: {
          title: 'string',
          fieldProps: 'string',
        },
        defaultProps: {},
        style: {},
        cardProps: {
          title: 'Dform 开关按钮',
          subTitle: 'Dform 开关按钮',
        },
      },
      {
        id: 500015,
        type: 'DformText',
        props: {
          title: '文本框',
          fieldProps: 'text',
        },
        propTypes: {
          title: 'string',
          fieldProps: 'string',
        },
        defaultProps: {},
        style: {},
        cardProps: {
          title: 'Dform 文本展示框',
          subTitle: 'Dform 基础文本展示框',
        },
      },
      {
        id: 500016,
        type: 'DformTextArea',
        props: {
          title: '多行输入框',
          fieldProps: 'textArea',
        },
        propTypes: {
          title: 'string',
          fieldProps: 'string',
        },
        defaultProps: {},
        style: {},
        cardProps: {
          title: 'Dform 多行文本输入框',
          subTitle: 'Dform 多行文本输入框',
        },
      },
      {
        id: 500017,
        type: 'RangeDatePicker',
        props: {
          title: '时间区间选择器',
          fieldProps: 'rangeTime1',
          fieldProps2: 'rangeTime2',
          positionType: 'horizontal',
        },
        propTypes: {
          title: 'string',
          fieldProps: 'string',
          fieldProps2: 'string',
          positionType: 'string',
        },

        defaultProps: {},
        style: {},
        cardProps: {
          title: 'Dform 时间区间选择框',
          subTitle: 'Dform 时间区间选择框',
        },
      },
    ],
  },
];

export default {
  DformInput,
  DformPicker,
  AddressPicker,
  CoverRadio,
  ExtraInput,
  MultiplePicker,
  DformCheckBox,
  // DformCustom,
  DformDatePicker,
  // DformFile,
  DformImagePicker,
  DformRadio,
  DformSelect,
  DformSwitch,
  DformText,
  DformTextArea,
  RangeDatePicker,
};
