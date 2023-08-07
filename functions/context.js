import { createContext } from 'react';

export const initialState = {
	menu : {
		active : false,
	}
};

const Context = createContext( initialState );

export default Context;
