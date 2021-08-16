export interface Component {
  id: number;
  type: string;
  isLayout?: number;
  package?: string;
  props: any;
  propTypes: any;
  defaultProps: any;
  style: any;
}

export interface ComponentGroup {
  type: string;
  data: Component[];
}

export interface ListItemProps {
  id: number;
  component: Component;
  childrenCom: ListItemProps[];
}
