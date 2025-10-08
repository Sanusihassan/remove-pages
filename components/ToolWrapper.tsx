import { Provider as ReduxProvider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import toolReducer from '../src/store';
import { Tool as ToolComponent, type ToolProps } from './Tool';
import { type _howToSchema } from '../src/how-to/how-to';
import { Features } from './Features';
import type { WithContext, HowTo as HowToType } from 'schema-dts';
import HowTo from './HowTo';
import { fetchSubscriptionStatus } from 'fetch-subscription-status';
import { useEffect } from "react";

export const store = configureStore({
    reducer: {
        tool: toolReducer,
    },
});

type ToolWrapperProps = ToolProps & {
    features: {
        title: string;
        description: string;
    }[],
    howTo: WithContext<HowToType>,
    seoTitle: string;
    to: string;
}

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export function ToolWrapper(props: ToolWrapperProps) {
    const { features, seoTitle, to, howTo } = props;
    useEffect(() => {
        (async () => {
            const status = await fetchSubscriptionStatus();
            if (!status) {
                const head = document.head;

                // Check if meta tag already exists to avoid duplicates
                if (!head.querySelector('meta[name="google-adsense-account"]')) {
                    const metaTag = document.createElement("meta");
                    metaTag.name = "google-adsense-account";
                    metaTag.content = "ca-pub-7801483217621867";
                    head.appendChild(metaTag);
                }

                // Check if script tag already exists to avoid duplicates
                if (!head.querySelector('script[src*="adsbygoogle.js?client=ca-pub-7801483217621867"]')) {
                    const scriptTag = document.createElement("script");
                    scriptTag.async = true;
                    scriptTag.src = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7801483217621867";
                    scriptTag.crossOrigin = "anonymous";
                    head.appendChild(scriptTag);
                }
            }
        })();
    }, []);
    return (
        <ReduxProvider store={store}>
            <ToolComponent {...props} />
            <div className="container">
                <Features
                    features={features as { title: string; description: string }[]}
                />
            </div>
            <div className="container">
                <HowTo howTo={howTo} alt={seoTitle} imgSrc={to.replace("/", "")} />
            </div>

        </ReduxProvider>
    );
}