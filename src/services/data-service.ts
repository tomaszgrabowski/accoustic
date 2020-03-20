import { DATA_FETCH_URL } from '../constants';

export const getData = async (url = DATA_FETCH_URL) => {
    const response = await fetch( url );
    if ( !response.ok ) throw new Error( `Api responded with error: ${ response.statusText }` );
    const deserializedData = await response.json();
    return deserializedData;
};
