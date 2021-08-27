import React from 'react';
import { render, testA11y, waitFor, fireEvent } from '@alita/test';
import DataSource from './';

const Footer = (props: any) => <div className="footer">{props.title}</div>;

it('passes a11y test', async () => {
  const { container } = render(
    <DataSource data={{ title: 'alita' }}>
      <Footer />
    </DataSource>,
  );
  await testA11y(container);
});

test('renders data', () => {
  const { getByText } = render(
    <DataSource data={{ title: 'alita' }}>
      <Footer />
    </DataSource>,
  );
  expect(getByText('alita')).toHaveClass('footer');
});

test('renders request', async () => {
  // @ts-ignore
  const defaultRequest: Promise<any> = () => {
    return new Promise((resolve) => {
      resolve({ title: 'alita' });
    });
  };
  const { getByText } = render(
    <DataSource request={defaultRequest}>
      <Footer />
    </DataSource>,
  );
  await waitFor(() => {
    expect(getByText('alita')).toHaveClass('footer');
  });
});
