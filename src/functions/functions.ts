import dayjs from 'dayjs'

export const stripHtmlTags = ( value: string ) => value.replace( /(<([^>]+)>)/ig, '' );

export const transformDate = ( value: string ) => {
    const date = new Date( value );
    return date;
    
};


const x = dayjs('2019-12-13T17:00:00Z').format('DD-mm-YYYY HH:mm');
console.log( x );

