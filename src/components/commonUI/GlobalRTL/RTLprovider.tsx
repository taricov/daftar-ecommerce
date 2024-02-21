/* eslint-disable @typescript-eslint/no-explicit-any */
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import { prefixer } from 'stylis';
import rtlPlugin from 'stylis-plugin-rtl';



const cacheRTL = createCache({
  key: 'muirtl',
  stylisPlugins: [prefixer, rtlPlugin],
});

export function RTLprovider(props:any) {
    return <CacheProvider value={cacheRTL}>{props.children}</CacheProvider>;
}