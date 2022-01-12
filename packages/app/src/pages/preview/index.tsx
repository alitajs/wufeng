import React, { useCallback, Fragment, useState } from 'react';
import type { FC } from 'react';
import { connect } from 'alita';
import type { ConnectProps } from 'alita';
import { WFPreviewFrame } from 'wufeng';
import type { WuFengModelState } from '@wufengteam/model';

interface PreviewPageProps extends ConnectProps {
  wufeng: WuFengModelState;
}
const PreviewPage: FC<PreviewPageProps> = ({ wufeng, dispatch }) => {
  const { components } = wufeng;
  return (
    <Fragment>
      <WFPreviewFrame pageData={components} />
    </Fragment>
  );
};

export default connect(({ wufeng }: { wufeng: WuFengModelState }) => ({ wufeng }))(PreviewPage);
