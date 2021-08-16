import type { ComponentGroup } from '@/schema';

export const DataComponet: ComponentGroup[] = [
  {
    type: '基本组件',
    data: [
      // {
      //   id: 5344461,
      //   type: "Badge",
      //
      //   props: {
      //     size: "large",
      //     text: "20",
      //     corner: false,
      //     dot: false,
      //     overflowCount: 99,
      //   },
      //   propTypes: {
      //     size: ["large", "small"],
      //     text: "string",
      //     corner: "bool",
      //     dot: "bool",
      //     overflowCount: "number",
      //   },
      //   defaultProps: {
      //     size: "large",
      //     text: "15",
      //     corner: false,
      //     dot: false,
      //     overflowCount: 99,
      //   },
      //   style: {},
      // },

      {
        id: 534429,
        type: 'BaseText',

        props: {
          title: '文本',
          titleStyle: {
            fontSize: 15,
            color: 'black',
          },
        },
        propTypes: {
          title: 'string',
          titleStyle: 'style',
        },
        defaultProps: {},
        style: {},
      },
      {
        id: 534430,
        type: 'BaseImg',

        props: {
          url: 'https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png',
          imgStyle: {
            width: 50,
            height: 50,
            margin: 10,
          },
        },
        propTypes: {
          url: 'string',
          imgStyle: 'style',
        },
        defaultProps: {},
        style: {},
      },
      {
        id: 5344591,
        type: 'Icon',

        props: {
          type: 'cross-circle-o',
          size: 'md',
          color: 'red',
        },
        propTypes: {
          type: [
            'check-circle',
            'check',
            'check-circle-o',
            'cross-circle',
            'cross',
            'cross-circle-o',
            'up',
            'down',
            'left',
            'right',
            'ellipsis',
            'question-circle',
          ],
          size: ['xxs', 'xs', 'sm', 'md', 'lg'],
          color: 'string',
        },
        defaultProps: {},
        style: {},
      },
      // {
      //   id: 6344701,
      //   type: "Tag",
      //
      //   props: {
      //     small: false,
      //     disabled: false,
      //     closable: true,
      //     selected: true,
      //     content: "美女",
      //   },
      //   propTypes: {
      //     small: "bool",
      //     disabled: "bool",
      //     closable: "bool",
      //     selected: "bool",
      //     content: "string",
      //   },
      //   defaultProps: {
      //     small: false,
      //     disabled: false,
      //     closable: true,
      //     selected: true,
      //     content: "美女",
      //   },
      //   style: { width: 30, height: 25, margin: 5 },
      // },
      {
        id: 534445,
        type: 'SearchBar',

        props: {
          placeholder: '请输入关键字',
          showCancelButton: false,
          cancelText: '取消',
          disabled: false,
        },
        propTypes: {
          value: 'string',
          placeholder: 'string',
          showCancelButton: 'bool',
          cancelText: 'string',
          disabled: 'bool',
        },
        defaultProps: {
          value: '张三',
          placeholder: '请输入关键字',
          showCancelButton: false,
          cancelText: '取消',
          disabled: false,
        },
        style: {},
      },

      {
        id: 5344321,
        type: 'Button',
        // 1:代表基础组件 2：代表组成组件
        props: {
          type: 'primary',
          children: '确定',
          size: 'large',
          loading: false,
          disabled: false,
        },
        propTypes: {
          type: ['primary', 'ghost', 'warning'],
          children: 'string',
          disabled: 'bool',
          loading: 'bool',
          size: ['large', 'small'],
        },
        defaultProps: {},
        style: {},
      },
      {
        id: 5344341,
        type: 'Switch',

        props: {
          checked: false,
          disabled: false,
        },
        propTypes: {
          checked: 'bool',
          disabled: 'bool',
        },
        defaultProps: {
          checked: true,
          disabled: false,
        },
        style: { margin: 5 },
      },

      // {
      //   id: 534455,
      //   type: "ImagePicker",
      //
      //   props: {
      //     files: [
      //       {
      //         url: "https://zos.alipayobjects.com/rmsportal/PZUUCKTRIHWiZSY.jpeg",
      //         id: "2121",
      //       },
      //       {
      //         url: "https://zos.alipayobjects.com/rmsportal/PZUUCKTRIHWiZSY.jpeg",
      //         id: "2122",
      //       },
      //     ],
      //     selectable: true,
      //   },
      //   propTypes: {
      //     files: "array",
      //     selectable: "bool",
      //   },
      //   defaultProps: {
      //     files: [
      //       {
      //         url: "https://zos.alipayobjects.com/rmsportal/WCxfiPKoDDHwLBM.png",
      //         id: "2121",
      //       },
      //       {
      //         url: "https://zos.alipayobjects.com/rmsportal/WCxfiPKoDDHwLBM.png",
      //         id: "2122",
      //       },
      //     ],
      //     selectable: true,
      //   },
      //   style: {},
      // },
    ],
  },

  {
    type: '高级组件',
    data: [
      {
        id: 6344691,
        type: 'Carousel',

        props: {
          dataItem: [
            { url: 'https://zos.alipayobjects.com/rmsportal/TekJlZRVCjLFexlOCuWn.png' },
            { url: 'https://zos.alipayobjects.com/rmsportal/AiyWuByWklrrUDlFignR.png' },
          ],
          selectedIndex: 0,
          autoplay: true,
          infinite: true,
          autoplayInterval: 3000,
          dots: true,
          vertical: false,
          imgStyle: {
            height: 150,
          },
        },
        propTypes: {
          dataItem: 'array',
          selectedIndex: 'number',
          autoplay: 'bool',
          infinite: 'bool',
          autoplayInterval: 'number',
          dots: 'bool',
          vertical: 'bool',
          imgStyle: 'style',
        },
        defaultProps: {
          autoplay: true,
          infinite: true,
          autoplayInterval: 3000,
          dots: true,
          vertical: false,
        },
        style: { width: '100%' },
      },
      {
        id: 634472,
        type: 'NoticeBar',

        props: {
          mode: 'closable',
          titles:
            '这是一个通知栏，这是一个通知栏，这是一个通知栏，这是一个通知栏，这是一个通知栏，这是一个通知栏，........',
          marqueeProps: { loop: true, style: { fontSize: 12, color: 'red' } },
        },
        propTypes: {
          mode: ['closable', 'link'],
          marqueeProps: 'array',
          titles: 'string',
        },
        defaultProps: {
          mode: 'closable',
          marqueeProps: { loop: true, style: { fontSize: 12, color: 'red' } },
          title: '这是一个通知栏.........',
        },
        style: { width: '100%' },
      },
      {
        id: 634478,
        type: 'Slider',

        props: {
          min: 0,
          max: 100,
          step: 1,
          value: 50,
          disabled: true,

          maximumTrackTintColor: 'blue',
        },
        propTypes: {
          min: 'number',
          max: 'number',
          step: 'number',
          value: 'number',
          disabled: 'bool',
          maximumTrackTintColor: 'string',
        },
        defaultProps: {
          min: 0,
          max: 100,
          step: 1,
          value: 30,
          disabled: false,
          maximumTrackTintColor: 'blue',
        },
        style: { width: '100%', height: 10, margin: 10 },
      },

      {
        id: 5344361,
        type: 'Pagination',

        props: {
          mode: 'pointer',
          current: 1,
          total: 4,
          simple: false,
          disabled: false,
        },
        propTypes: {
          mode: ['button', 'number', 'pointer'],
          current: 'number',
          total: 'string',
          simple: 'bool',
          disabled: 'bool',
        },
        defaultProps: {
          mode: 'pointer',
          current: 1,
          total: 4,
          simple: false,
          disabled: false,
        },
        style: { width: '100%' },
      },
      {
        id: 634466,
        type: 'CheckboxItem',

        props: {
          defaultChecked: false,
          checked: true,
          disabled: false,
          title: '单项选择',
        },
        propTypes: {
          defaultChecked: 'bool',
          checked: 'bool',
          disabled: 'bool',
          title: 'string',
        },
        defaultProps: {
          defaultChecked: false,
          checked: true,
          disabled: false,
          title: '单项选择',
        },
        style: { margin: 5 },
      },
      {
        id: 6344661,
        type: 'RadioItem',

        props: {
          checked: true,
          disabled: false,
          showType: false,
          title: '单项选择标签',
          textStyle: {
            marginLeft: 10,
            fontSize: 15,
            color: 'black',
          },
        },
        propTypes: {
          checked: 'bool',
          disabled: 'bool',
          showType: 'bool',
          title: 'string',
          textStyle: 'style',
        },
        defaultProps: {
          checked: true,
          disabled: false,
          showType: true,

          title: '单项选择标签',
        },
        style: { margin: 5 },
      },
      // {
      //   id: 534440,
      //   type: "Checkbox",
      //

      //   props: {
      //     defaultChecked: false,
      //     checked: true,
      //     disabled: false,

      //     title: "单项选择",
      //   },
      //   propTypes: {
      //     defaultChecked: "bool",
      //     checked: "bool",
      //     disabled: "bool",
      //     title: "string",
      //   },
      //   defaultProps: {
      //     defaultChecked: false,
      //     checked: true,
      //     disabled: false,
      //     title: "单项选择",
      //   },
      //   style: { width: 28, height: 28, margin: 5 },
      // },
      {
        id: 534456,
        type: 'Picker',

        props: {
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
          cascade: false,
          title: '数据',
          content: '数据选择',
        },
        propTypes: {
          data: 'array',
          cascade: 'bool',
          title: 'string',
          content: 'string',
        },
        defaultProps: {},
        style: { width: 200, height: 100 },
      },
      {
        id: 534463,
        type: 'SegmentedControl',

        props: {
          tintColor: '#2DB7F5',
          disabled: false,
          selectedIndex: 0,
          values: ['附近', '发现'],
        },
        propTypes: {
          tintColor: 'string',
          disabled: 'bool',
          selectedIndex: 'number',
          values: 'array',
        },
        defaultProps: {
          tintColor: '#2DB7F5',
          disabled: false,
          selectedIndex: 0,
          values: ['Segment1', 'Segment2'],
        },
        style: {},
      },
      {
        id: 534437,
        type: 'Tabs',

        props: {
          tabs: [{ title: '首页' }, { title: '发现' }, { title: '我的' }],

          initialPage: 0,
          swipeable: true,
          animated: true,
          prerenderingSiblingsNumber: 1,
          tabBarBackgroundColor: 'white',
          tabBarActiveTextColor: 'green',
          tabBarInactiveTextColor: 'gray',
          tabBarTextStyle: { fontSize: 16 },
          tabBarUnderlineStyle: { borderColor: 'blue' },
        },
        propTypes: {
          tabs: 'array',
          tabBarPosition: 'string',
          initialPage: 'number',
          swipeable: 'bool',
          animated: 'bool',
          prerenderingSiblingsNumber: 'number',
          tabBarBackgroundColor: 'string',
          tabBarActiveTextColor: 'string',
          tabBarInactiveTextColor: 'string',
          tabBarTextStyle: 'style',
          tabBarUnderlineStyle: 'style',
        },
        defaultProps: {
          tabs: [{ title: 'First Tab' }, { title: 'Second Tab' }, { title: 'Third Tab' }],
          tabBarPosition: 'bottom',
          initialPage: 0,
          swipeable: false,
          animated: true,
          prerenderingSiblingsNumber: 1,
          tabBarBackgroundColor: 'white',
          tabBarActiveTextColor: 'green',
          tabBarInactiveTextColor: 'gray',
          tabBarTextStyle: { fontSize: 16 },
        },
        style: { width: '100%', height: 30 },
      },
    ],
  },
  // {
  //   type: "进度展示",
  //   data: [
  //     {
  //       id: 534431,
  //       type: "ActivityIndicator",
  //
  //       props: {
  //         animating: true,
  //         size: "small",
  //         toast: false,
  //         text: "加载中",
  //         color: "gray",
  //       },
  //       propTypes: {
  //         animating: "bool",
  //         size: ["small", "large"],
  //         toast: "bool",
  //         text: "string",
  //         color: "string",
  //       },
  //       defaultProps: {
  //         animating: true,
  //         size: "small",
  //         toast: false,
  //         text: "加载中",
  //         color: "gray",
  //       },
  //       style: { backgroundColor: "gray", height: 50, width: 50 },
  //     },
  //     {
  //       id: 534443,
  //       type: "Progress",
  //
  //       props: {
  //         percent: 10,
  //         position: "normal",
  //         unfilled: true,
  //         barStyle: {
  //           backgroundColor: "blue",
  //           margin: 5,
  //           borderWidth: 1,
  //           height: 10,
  //         },
  //       },
  //       propTypes: {
  //         percent: "number",
  //         position: ["fixed", "normal"],
  //         unfilled: "bool",
  //         barStyle: "style",
  //       },
  //       defaultProps: {
  //         percent: 0,
  //         position: "normal",
  //         unfilled: true,
  //         barStyle: { backgroundColor: "blue", margin: 5 },
  //       },
  //       style: { width: "100%", height: 20, backgroundColor: "white" },
  //     },

  //   ],
  // },
  {
    type: '表单组件',
    data: [
      {
        id: 634463,
        type: 'SwitchItem',

        props: {
          checked: true,
          disabled: false,
          title: '标签',
        },
        propTypes: {
          checked: 'bool',
          disabled: 'bool',
          title: 'string',
        },
        defaultProps: {
          checked: true,
          disabled: false,
          title: '标签',
        },
        style: { margin: 5 },
      },

      {
        id: 6344681,
        type: 'InputItem',

        props: {
          type: 'text',
          clear: true,
          error: true,
          extra: '元',
          placeholder: '有标签',
          title: '标签',
          showtype: '1',
          labelNumber: 2,
          titlestyle: {
            fontSize: 15,
            color: 'black',
          },
        },
        propTypes: {
          type: ['text', 'bankCard', 'phone', 'password', 'number', 'digit'],
          value: 'string',
          placeholder: 'string',
          clear: 'bool',
          error: 'bool',
          extra: 'string',
          title: 'string',
          showtype: ['1', '2'],
          labelNumber: 'number',
          titlestyle: 'style',
        },
        defaultProps: {
          clear: true,
          error: false,
          extra: '',
          type: 'text',
          placeholder: '',
          title: '标签',
          labelNumber: 2,
        },
        style: { width: '100%', fontSize: 15, color: 'black' },
      },
      {
        id: 6344682,
        type: 'InputItem',

        props: {
          type: 'text',
          editable: false,
          value: '不可编辑',
          extra: '元',
          placeholder: '不可编辑',
          showtype: '2',
          labelNumber: 2,
        },
        propTypes: {
          type: ['text', 'bankCard', 'phone', 'password', 'number', 'digit'],
          value: 'string',
          placeholder: 'string',
          editable: 'bool',
          extra: 'string',
          imgurl: 'string',
          showtype: ['1', '2'],
          labelNumber: 'number',
        },
        defaultProps: {
          clear: true,
          error: false,
          extra: '',
          type: 'text',
          placeholder: '',
          title: '标签',
          labelNumber: 2,
        },
        style: { width: '100%', fontSize: 15 },
      },
      {
        id: 6344683,
        type: 'InputItem',

        props: {
          clear: true,
          type: 'text',
          placeholder: '可编辑',
          showtype: '1',
          title: '标签',
          labelNumber: 2,
        },
        propTypes: {
          type: ['text', 'bankCard', 'phone', 'password', 'number', 'digit'],
          value: 'string',
          placeholder: 'string',
          editable: 'bool',
          extra: 'string',
          showtype: ['1', '2'],
          title: 'string',
          labelNumber: 'number',
        },
        defaultProps: {
          clear: true,
          error: false,
          extra: '',
          type: 'text',
          placeholder: '',
          title: '标签',
          labelNumber: 2,
        },
        style: { width: '100%', fontSize: 15 },
      },
      {
        id: 6344741,
        type: 'List',

        props: {
          title: '这是不换行item,这是不换行item,这是不换行item',
        },
        propTypes: {
          title: 'string',
        },
        defaultProps: {
          title: '',
        },
        style: {},
      },
      {
        id: 6344742,
        type: 'List',

        props: {
          wrap: true,
          title: '这是自动换行item,这是自动换行item,这是自动换行item',
        },
        propTypes: {
          wrap: 'bool',
          title: 'string',
        },
        defaultProps: {
          wrap: true,
          title: '',
        },
        style: {},
      },
      {
        id: 6344743,
        type: 'List',

        props: {
          disabled: false,
          extra: '箭头方向',
          arrow: 'horizontal',
          title: '标题',
        },
        propTypes: {
          disabled: 'bool',
          extra: 'string',
          arrow: ['horizontal', 'up', 'down', 'empty'],
          title: 'string',
        },
        defaultProps: {
          disabled: true,
          extra: '箭头向右',
          arrow: 'horizontal',
          title: '标题',
        },
        style: {},
      },

      {
        id: 6344747,
        type: 'List',

        props: {
          thumb: 'https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png',
          arrow: 'horizontal',
          title: '标题',
        },
        propTypes: {
          thumb: 'string',
          arrow: ['horizontal', 'up', 'down', 'empty'],
          title: 'string',
        },
        defaultProps: {
          thumb: '',
          arrow: 'horizontal',
          title: '标题',
        },
        style: {},
      },
      {
        id: 5344521,
        type: 'TextareaItem',

        props: {
          title: '标题',
          labelNumber: 3,
          rows: 4,
          placeholder: '固定行数、多行带计数、高度自适应',
          count: 100,
          autoHeight: true,
          editable: true,
          clear: false,
        },
        propTypes: {
          rows: 'number',
          placeholder: 'string',
          count: 'number',
          autoHeight: 'bool',
          editable: 'bool',
          clear: 'bool',
          title: 'string',
          labelNumber: 'number',
        },
        defaultProps: {
          rows: 4,
          placeholder: '固定行数、多行带计数、高度自适应',
          count: 100,
          autoHeight: true,
          editable: true,
          clear: false,
          title: '标题',
          labelNumber: 3,
        },
        style: {
          width: '100%',
          paddingVertical: 5,
          borderColor: 'gray',
          borderWidth: 0.5,
        },
      },

      {
        id: 634467,
        type: 'StepperItem',

        props: {
          min: 1,
          max: 100,
          step: 1,
          value: 50,
          disabled: false,
          showNumber: true,

          title: '计步器值',
          textStyle: {
            fontSize: 15,
            color: 'black',
          },
        },
        propTypes: {
          min: 'number',
          max: 'number',
          step: 'number',
          value: 'number',
          disabled: 'bool',
          showNumber: 'bool',
          title: 'string',
          textStyle: 'style',
        },
        defaultProps: {
          min: 1,
          max: 100,
          step: 1,
          value: 50,
          disabled: false,
          showNumber: true,
          title: '计步器值',
        },
        style: {},
      },
    ],
  },
  {
    type: '布局组件',
    data: [
      {
        id: 5344321211,
        type: 'Flex',
        // 1:代表布局组件
        isLayout: 1,
        props: {
          direction: 'row',
          wrap: 'nowrap',
          align: 'center',
          justify: 'around',
        },
        propTypes: {},
        defaultProps: {},
        style: {},
      },
      {
        id: 634482,
        type: 'Line',

        props: {
          showType: 'lg',
        },
        propTypes: {
          showType: ['sm', 'lg'],
        },
        defaultProps: {},
        style: {},
      },
      // {
      //   id: 6344833,
      //   isLayout: 1,
      //   type: "WhiteSpace",
      //
      //   props: {
      //     size: "lg",
      //   },
      //   propTypes: {
      //     size: ["xs", "sm", "md", "lg", "xl"],
      //   },
      //   defaultProps: {},
      //   style: {},
      // },
      {
        id: 6344834,
        isLayout: 1,
        type: 'WingBlank',

        props: {
          size: 'lg',
        },
        propTypes: {
          size: ['sm', 'md', 'lg'],
        },
        defaultProps: {},
        style: {},
      },
    ],
  },
  {
    type: '组合组件',
    data: [
      {
        id: 634477,
        type: 'Result',

        props: {
          title: '验证成功',
          message: '所提交内容已成功完成验证',
          buttonText: '完成',
          buttonType: 'primary',
        },
        propTypes: {
          imgUrl: 'string',
          title: 'string',
          message: 'string',
          buttonText: 'string',
          buttonType: ['primary', 'ghost', 'warning'],
        },
        defaultProps: {
          title: '验证成功',
          message: '所提交内容已成功完成验证',
          buttonText: '完成',
          buttonType: 'primary',
        },
        style: {},
      },
      {
        id: 634479,
        type: 'QuickEntry',

        props: {
          title: '快速入口',
          data: [
            {
              icon: 'https://os.alipayobjects.com/rmsportal/IptWdCkrtkAUfjE.png',
              text: '入口一',
            },
            {
              icon: 'https://os.alipayobjects.com/rmsportal/IptWdCkrtkAUfjE.png',
              text: '入口一',
            },
            {
              icon: 'https://os.alipayobjects.com/rmsportal/IptWdCkrtkAUfjE.png',
              text: '入口一',
            },
            {
              icon: 'https://os.alipayobjects.com/rmsportal/IptWdCkrtkAUfjE.png',
              text: '入口一',
            },
          ],

          hasLine: false,
          showType: '1',
        },
        propTypes: {
          title: 'string',
          data: 'array',
          hasLine: 'bool',
          showType: ['1', '2'],
          columnNum: 'number',
        },
        defaultProps: {
          title: '快速入口',
        },
        style: {},
      },
      {
        id: 634480,
        type: 'HomeBar',

        props: {
          textOne: '身份扫描',
          textTwo: '更多',
          textCenter: '定位客户',
          mainStyle: {
            backgroundColor: '#02C558',
          },
          imgStyle: {
            width: 25,
            height: 25,
            margin: 5,
          },
          textCenterStyle: {
            color: 'gray',
            fontSize: 10,
          },
          textStyle: {
            color: 'white',
            fontSize: 15,
          },
        },
        propTypes: {
          textOne: 'string',
          textTwo: 'string',
          textCenter: 'string',
          imgStyle: 'style',
          textCenterStyle: 'style',
          textStyle: 'style',
          mainStyle: 'style',
        },
        defaultProps: {},
        style: {},
      },
      {
        id: 634481,
        type: 'ItemTypeOne',

        props: {
          title: '2018-08-城市固定本地畅打18元套餐',
          tagTitle: '查看详情',
          rightText: '立即处理',
          dataItem: [{ title: '3张手机卡' }, { title: '200M宽带免费' }, { title: '20K高清ITV' }],
          priceName: '预存款',
          price: '200',
          secondaryStyle: {
            flexDirection: 'row',
            alignItems: 'center',
            margin: 5,
          },
          imgStyle: {
            width: 20,
            height: 20,
            margin: 5,
          },
          tagStyle: {
            borderWidth: 1,
            borderColor: '#FFC76F',
            borderRadius: 5,
            margin: 5,
          },
          tagTitleStyle: {
            color: '#FFC76F',
            padding: 3,
            fontSize: 12,
            height: 20,
          },
          centertag: {
            borderWidth: 1,
            borderColor: '#02C558',
            borderRadius: 10,
            margin: 3,
          },
          centertagTitleStyle: {
            color: '#02C558',
            padding: 3,
            fontSize: 8,
            height: 20,
          },
          priceNameStyle: {
            fontSize: 10,
            marginLeft: 10,
          },
          priceStyle: {
            fontSize: 10,
            color: 'red',
            margin: 5,
          },
          rightStyle: {
            position: 'absolute',
            right: 0,
            backgroundColor: '#02C558',
          },
          rightTextStyle: {
            color: 'white',
            fontSize: 10,
            padding: 5,
          },
        },
        propTypes: {
          title: 'string',
          tagTitle: 'string',
          dataItem: 'array',
          priceName: 'string',
          price: 'string',
          secondaryStyle: 'style',
          imgStyle: 'style',
          tagStyle: 'style',
          tagTitleStyle: 'style',
          centertag: 'style',
          centertagTitleStyle: 'style',
          priceNameStyle: 'style',
          priceStyle: 'style',
          rightStyle: 'style',
          rightTextStyle: 'style',
        },
        defaultProps: {},
        style: {},
      },
    ],
  },

  // {
  //   type: "弹窗布局",
  //   data: [
  //     {
  //       id: 634483,
  //       type: "DialogOne",
  //
  //       props: {
  //         title: "重置密码错误",
  //         btnSureText: "确定",
  //         btnCancelText: "取消",
  //         showCancel: true,
  //         mainStyle: {
  //           justifyContent: "center",
  //           alignItems: "center",
  //           borderRadius: 5,
  //           backgroundColor: "#00BFFF",
  //           width: 200,
  //           height: 200,
  //         },
  //         imgStyle: {
  //           width: 50,
  //           height: 50,
  //           margin: 10,
  //         },
  //         contentStyle: {
  //           color: "black",
  //           fontSize: 15,
  //           margin: 10,
  //         },
  //         btnCancelStyle: {
  //           justifyContent: "center",
  //           alignItems: "center",
  //           backgroundColor: "gray",
  //           borderRadius: 10,
  //           width: 80,
  //           height: 30,
  //           margin: 5,
  //         },
  //         btnCancelTextStyle: {
  //           color: "white",
  //           fontSize: 15,
  //         },
  //         btnSureStyle: {
  //           justifyContent: "center",
  //           alignItems: "center",
  //           backgroundColor: "#02C558",
  //           borderRadius: 10,
  //           width: 80,
  //           height: 30,
  //           margin: 5,
  //         },
  //         btnSureTextStyle: {
  //           color: "white",
  //           fontSize: 15,
  //         },
  //       },
  //       propTypes: {
  //         title: "string",
  //         btnText: "string",
  //         showCancel: "bool",
  //         mainStyle: "style",
  //         imgStyle: "style",
  //         contentStyle: "style",
  //         btnSureStyle: "style",
  //         btnSureTextStyle: "style",
  //         btnCancelStyle: "style",
  //         btnCancelTextStyle: "style",
  //       },
  //       defaultProps: {},
  //       style: {},
  //     },
  //     {
  //       id: 634484,
  //       type: "DialogTwo",
  //
  //       props: {
  //         title: "天翼乐享套餐128元-聊天版",
  //         contentText:
  //           "1.月使用费用1.月使用费用1.月使用费用1.月使用费用,1.月使用费用1.月使用费用1.月使用费用1.月使用费用1.月使用费用1.月使用费用1.月使用费用1.月使用费用1.月使用费用1.月使用费用1.月使用费用1.月使用费用1.月使用费用1.月使用费用1.月使用费用1.月使用费用1.月使用费用1.月使用费用1.月使用费用1.月使用费用1.月使用费用1.月使用费用1.月使用费用1.月使用费用",

  //         mainStyle: {
  //           borderRadius: 8,
  //           backgroundColor: "#00BFFF",
  //           width: 300,
  //           height: 200,
  //           margin: 10,
  //         },
  //         secondStyle: {
  //           alignItems: "center",
  //           backgroundColor: "#02C558",
  //           borderTopLeftRadius: 8,
  //           borderTopRightRadius: 8,
  //         },
  //         titleStyle: {
  //           color: "white",
  //           fontSize: 15,
  //           flex: 1,
  //           textAlign: "center",
  //         },
  //         imgStyle: {
  //           width: 20,
  //           height: 20,
  //           margin: 10,
  //         },
  //         contentStyle: {
  //           color: "black",
  //           padding: 10,
  //           fontSize: 15,
  //           height: "100%",
  //         },
  //       },
  //       propTypes: {
  //         title: "string",
  //         contentText: "string",
  //         mainStyle: "style",
  //         secondStyle: "style",
  //         titleStyle: "style",
  //         imgStyle: "style",
  //         contentStyle: "style",
  //       },
  //       defaultProps: {},
  //       style: {},
  //     },
  //   ],
  // },
];
