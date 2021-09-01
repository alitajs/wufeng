import React from 'react';
import imagesObj from './imagesObject';

export const dashToPascalCase = (str: string) =>
  str
    .toLowerCase()
    .split('-')
    .map((segment) => segment.charAt(0).toUpperCase() + segment.slice(1))
    .join('');

type Mutable<T> = { -readonly [P in keyof T]-?: T[P] }; // Remove readonly and ?

export const mergeRefs = <ElementType,>(...refs: React.Ref<ElementType>[]) => (
  value: ElementType,
) =>
  refs.forEach((ref) => {
    if (typeof ref === 'function') {
      ref(value);
    } else if (ref != null) {
      // This is typed as readonly so we need to allow for override
      // eslint-disable-next-line
      (ref as Mutable<React.RefObject<ElementType>>).current = value;
    }
  });

export const createForwardRef = <PropType, ElementType>(
  ReactComponent: any,
  displayName: string,
) => {
  const forwardRef = (props: any, ref: React.Ref<ElementType>) => {
    return <ReactComponent {...props} forwardedRef={ref} />;
  };
  forwardRef.displayName = displayName;

  return React.forwardRef(forwardRef);
};

interface IconsReactInternalProps<ElementType> extends React.HTMLAttributes<ElementType> {
  src: string;
  forwardedRef: React.RefObject<ElementType>;
  ref?: React.Ref<any>;
}

export const createReactComponent = <
  PropType,
  ElementType extends HTMLElement,
  ContextStateType = {},
  ExpandedPropsTypes = {}
>(
  imgName: string,
  ReactComponentContext?: React.Context<ContextStateType>,
  manipulatePropsFunction?: (
    originalProps: IconsReactInternalProps<ElementType>,
    propsToPass: any,
  ) => ExpandedPropsTypes,
) => {
  const displayName = dashToPascalCase(imgName);

  const ReactComponent = class extends React.Component<IconsReactInternalProps<ElementType>> {
    componentEl!: ElementType;

    setComponentElRef = (element: ElementType) => {
      this.componentEl = element;
    };

    // constructor(props: IconsReactInternalProps<ElementType>) {
    //   super(props);
    // }
    render() {
      const { children, forwardedRef, style, className, ref, ...cProps } = this.props;

      const newProps: Omit<IconsReactInternalProps<ElementType>, 'forwardedRef'> = {
        ...cProps,
        src: imagesObj[imgName],
        ref: mergeRefs(forwardedRef, this.setComponentElRef),
        style: {
          width: '48px',
          height: '48px',
          ...style,
        },
      };

      return React.createElement('img', newProps, children);
    }

    static get displayName() {
      return displayName;
    }
  };

  // If context was passed to createReactComponent then conditionally add it to the Component Class
  if (ReactComponentContext) {
    ReactComponent.contextType = ReactComponentContext;
  }

  return createForwardRef<PropType, ElementType>(ReactComponent, displayName);
};
