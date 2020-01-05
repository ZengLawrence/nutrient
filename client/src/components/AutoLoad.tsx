import React, { useState, PropsWithChildren, ReactNode, useEffect } from 'react';

export interface AutoLoadProps {
    load: () => Promise<any>,
}

const firstChildNode = (children: ReactNode) => (React.Children.toArray(children)[0]);
const restChildNodes = (children: ReactNode) => (React.Children.toArray(children).slice(1));

export const AutoLoad: React.FC<PropsWithChildren<AutoLoadProps>> = props => {

    const { load } = props;
    const [isLoaded, setIsLoaded] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const shouldLoad = () => (!isLoaded && !isLoading);

        if (shouldLoad()) {
            setIsLoading(true);
            load().then(() => {
                setIsLoading(false);
                setIsLoaded(true);
            });
        }
    }, [isLoaded, isLoading, load])

    return (
        <React.Fragment>
            {isLoading ? firstChildNode(props.children) : restChildNodes(props.children)}
        </React.Fragment>
    );

}