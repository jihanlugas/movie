import React from 'react';
import Head from "next/head";
import '../styles/globals.css'
import type { AppProps, AppContext } from 'next/app'
import { QueryClient, QueryClientProvider } from "react-query"
import App from 'next/app';


function isBrowser() {
    return typeof window !== 'undefined';
}

function MyApp({ Component, pageProps }: AppProps) {

    const queryClient = new QueryClient();

    return (
        <React.Fragment>
            <Head>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1, shrink-to-fit=no"
                />
            </Head>
            <QueryClientProvider client={queryClient}>
                <Component {...pageProps} />
            </QueryClientProvider>
        </React.Fragment>
    )
}

MyApp.getInitialProps = async (ctx: AppContext) => {
    const { pathname, req, res } = ctx.ctx

    const appProps = await App.getInitialProps(ctx)

    return { ...appProps }
}

export default MyApp
