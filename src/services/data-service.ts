import { DATA_FETCH_URL } from '../constants';

export const getData = async () => {
    const response = await fetch( DATA_FETCH_URL );
    if ( !response.ok ) throw new Error( `Api responded with error: ${ response.statusText }` );
    const deserializedData = await response.json();
    return deserializedData;
};
