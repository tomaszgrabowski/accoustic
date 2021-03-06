import React, { FC } from 'react';

interface IProps {
    loading: boolean;
    error: boolean;
}

const WithLoading =
    <P extends object> ( Component: React.ComponentType<P> ): FC<P & IProps> =>
        ( { loading, error, ...props } ) => (
            <>
                {
                    error ?
                        <div>Błąd ładowania...</div>
                        :
                        loading ?
                            <div>Loading...</div>
                            :
                            <Component { ...props as P } />
                }
            </>
        
        );

export default WithLoading;
