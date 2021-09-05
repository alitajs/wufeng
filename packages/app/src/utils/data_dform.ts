import { getRandom } from 'wufeng';
import type { ComponentGroup } from '@/schema';
import { DformInput, DformPicker } from '@alitajs/dform';

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
    ],
  },
];

export default {
  DformInput,
  DformPicker,
};
