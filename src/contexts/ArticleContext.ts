import React from 'react';
import { IApiResponse } from '../models/IApiResponse';

export const ArticleContext = React.createContext<IApiResponse | undefined>( undefined );
