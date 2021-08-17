import React from 'react';
import type { FC } from 'react';
import { WFPage, WFComponentsWare, WFPhoneFrame } from 'wufeng';

const DisplayFrame: FC = () => <div>2</div>;
const RateFrame: FC = () => <div>3</div>;

const IndexPage: FC = () => {
  return (
    <WFPage
      ComponentFrame={WFComponentsWare}
      DisplayFrame={() => <WFPhoneFrame url="http://localhost:8000/#/" />}
      RateFrame={RateFrame}
    />
  );
};

export default IndexPage;
