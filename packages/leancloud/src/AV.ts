import AV from 'leancloud-storage';

export const appId = 'AT5vBa2k58srGQfLmo28OmVz-gzGzoHsz';
export const appKey = 'pu7KdtCyhW3E1bH2Eyihga7g';

AV.init({
  appId,
  appKey,
  serverURLs: 'https://at5vba2k.lc-cn-n1-shared.com',
});

export default AV;
