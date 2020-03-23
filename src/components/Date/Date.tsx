import dayjs from 'dayjs';
import React from 'react';
import { DateFormat } from '../../models/Types';

interface IProps {
    date: string;
    format: DateFormat;
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
