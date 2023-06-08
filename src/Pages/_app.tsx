import type { AppProps } from 'next/app'
import { Provider, useSelector } from 'react-redux';
import store from '../Stores/Store'
import {  ThemeProvider } from '@mui/material/styles';
import glovoTheme from '@/Theme/theme';
import Header from '@/Components/header';
import '../Sass/style.css'

import wrapper from "../Stores/Store"

function MyApp({ Component, pageProps }: AppProps) {

  // const { restaurantsData, ...restPageProps } = pageProps;
  const {store} = wrapper.useWrappedStore(pageProps);

  return (
    <>
      <Provider store={store}>
        <ThemeProvider theme={glovoTheme}>
          <Header />
          <Component {...pageProps} />
        </ThemeProvider>
      </Provider>
    </>
  )
}

export default wrapper.withRedux(MyApp)