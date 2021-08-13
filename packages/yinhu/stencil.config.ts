import type { Config } from '@stencil/core';
import { sass } from '@stencil/sass';
import { reactOutputTarget } from '@alitajs/react-output-target';

export const config: Config = {
  namespace: 'yinhu',
  globalStyle: 'src/themes/app.scss',
  plugins: [
    sass({
      injectGlobalPaths: ['src/themes/normalize.scss'],
    }),
  ],
  buildEs5: true,
  extras: {
    cssVarsShim: true,
    dynamicImportShim: true,
    initializeNextTick: true,
    safari10: true,
    scriptDataOpts: true,
    shadowDomShim: true,
  },
  outputTargets: [
    reactOutputTarget({
      componentCorePackage: 'yinhu',
      proxiesFile: '../react/src/components.ts',
      includeDefineCustomElements: true,
      removePrefix: 'Yh',
    }),
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements-bundle',
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
  ],
};
