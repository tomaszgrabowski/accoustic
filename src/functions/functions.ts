export const stripHtmlTags = ( value: string ) => value.replace( /(<([^>]+)>)/ig, '' );
