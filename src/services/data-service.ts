import { DATA_FETCH_URL, DEFAULT_ARTICLE_ID } from '../constants';

export const getArticleByGuid = async ( id = DEFAULT_ARTICLE_ID ) => {
    const response = await fetch( `${ DATA_FETCH_URL }${ id }` );
    if ( !response.ok ) throw new Error( `Api responded with error: ${ response.statusText }` );
    const deserializedData = await response.json();
    return deserializedData;
};
