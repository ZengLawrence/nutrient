import React, { useState, PropsWithChildren, ReactNode, useEffect } from 'react';

export interface AutoLoadProps {
    load: () => Promise<any>,
}

const firstChildNode = (children: ReactNode) => (React.Children.toArray(children)[0]);
const restChildNodes = (children: ReactNode) => (React.Children.toArray(children).slice(1));

const useLoadingState = () => {
    const [isLoaded, setIsLoaded] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const startLoading = () => setIsLoading(true);
    const endLoading = () => {
        setIsLoading(false);
        setIsLoaded(true);
    };

    return { shouldLoad: (!isLoaded && !isLoading), isLoading, startLoading, endLoading };
}

const useAutoLoad = (load: () => Promise<any>) => {
    const { shouldLoad, isLoading, startLoading, endLoading } = useLoadingState();

    useEffect(() => {
        const timeout = setTimeout(() => {
            if (shouldLoad) {
                startLoading();

                load().then(() => {
                    endLoading();
                });
            }
        });

        return function cleanUp() {
            clearTimeout(timeout);
        }

    }, [shouldLoad, startLoading, endLoading, load]);

    return { isLoading };
}

export const AutoLoad: React.FC<PropsWithChildren<AutoLoadProps>> = props => {

    const { isLoading } = useAutoLoad(props.load);

    return (
        <React.Fragment>
            {isLoading ? firstChildNode(props.children) : restChildNodes(props.children)}
        </React.Fragment>
    );

}