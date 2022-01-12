import AV from 'leancloud-storage';

export const appId = 'Tvdh7rfGyfilIoUSFInV0acs-gzGzoHsz';
export const appKey = '6gB5U2W7s2mqXqTXsRo8cJbE';

AV.init({
  appId,
  appKey,
  serverURLs: 'https://tvdh7rfg.lc-cn-n1-shared.com',
});

export default AV;
