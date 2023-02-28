import { NextPage } from 'next';
import { AppProps } from 'next/app';
import { ReactElement } from 'react';
import '../styles/globals.css'


type NextPageLayout= NextPage & {
    getLayout?: (page: ReactElement)=>JSX.Element
};
type AppPropsWithLayout=AppProps & {
  Component: NextPageLayout
}
function MyApp({ Component, pageProps }:AppPropsWithLayout) {
  const getLayout = Component.getLayout || ((page: any) => page );

  // return (
  //   <>
  //     <Component {...pageProps} />
  //   </>
  // )
  return getLayout( <Component {...pageProps} /> )
}

export default MyApp
