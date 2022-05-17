import { createContext } from 'react';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
	// variables and functions
	const testMessage = 'nnn';
	return (
		<AppContext.Provider value={{
			testMessage
		}}>
			{children}
		</AppContext.Provider>
	)
};
