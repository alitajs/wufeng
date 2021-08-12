import React from 'react';
import type { FC } from 'react';
import { WFPage } from 'wufeng';

const ComponentFrame: FC = () => <div>1</div>;
const DisplayFrame: FC = () => <div>2</div>;
const RateFrame: FC = () => <div>3</div>;

const IndexPage: FC = () => {
  return (
    <WFPage ComponentFrame={ComponentFrame} DisplayFrame={DisplayFrame} RateFrame={RateFrame} />
  );
};

export default IndexPage;
