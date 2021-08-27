import React, { Fragment } from 'react';
import type { FC } from 'react';
import { useRequest } from 'ahooks';

interface DataSourceProps {
  request?: Promise<any>;
  data?: Record<string, unknown>;
}

const defaultRequest = (): Promise<any> => {
  return new Promise((resolve) => {
    resolve({});
  });
};

const DataSource: FC<DataSourceProps> = ({ children, request = defaultRequest, data = {} }) => {
  const { data: reqData = {} } = useRequest(request);
  const childs = React.Children.toArray(children);
  // @ts-ignore
  return (
    <Fragment>
      {childs.map((child: any, index: number) => (
        <Fragment key={index}>
          {React.cloneElement(child, {
            ...data,
            ...reqData,
          })}
        </Fragment>
      ))}
    </Fragment>
  );
};

export default DataSource;
