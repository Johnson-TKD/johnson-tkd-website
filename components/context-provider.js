import Context, { initialState } from 'functions/context';
import { useReducer, useMemo } from 'react';

const reducer = ( state, { type, ...object } ) => {

	switch( type ) {

		case 'menu' :

			return {
				...state,
				...{
					menu : object
				}
			};

		default :

			throw new Error( 'Invalid context property'  );

	};

};

export const ContextProvider = ({ children }) => {

	const [ state, dispatch ] = useReducer(
		reducer,
		initialState
	);

	const provider = useMemo(
		() => (
			<Context.Provider
				{
					...{
						value : {
							state,
							dispatch
						}
					}
				}
			>
				{ children }
			</Context.Provider>
		),
		[ state, dispatch, children ]
	);

	return provider;

};
