import dayjs from 'dayjs';
import React from 'react';

interface IProps {
    date: string;
    format: string;
}

const Date = ( props: IProps ) => {
    const isValid = dayjs( props.date ).isValid();
    return (
        isValid ?
            <small>
                { dayjs( props.date ).format( props.format ) }
            </small>
            : <small>
                Date not valid
            </small>
    );
    
};

export default Date;
