import { createContext, useMemo, useReducer, useContext } from 'react';

export const initialState = { theme: 'light', data: [] };

export const ContextGlobal = createContext(undefined);

// Define reducer for state management
const reducer = (state, action) => {
	switch (action.type) {
		case 'TOGGLE_THEME':
			const newTheme = state.theme === 'light' ? 'dark' : 'light';
			localStorage.setItem('theme', newTheme);
			return { ...state, theme: newTheme };

		case 'SET_DATA':
      
			return { ...state, data: action.payload };

		default:
			return state;
	}
};

export const ContextProvider = ({ children }) => {
	// Initialize reducer with persisted theme from localStorage
	const [state, dispatch] = useReducer(reducer, {
		...initialState,
		theme: localStorage.getItem('theme') || 'light',
	});

	// Memoize context value to prevent unnecessary re-renders
	const contextValue = useMemo(() => {
		return {
			state,
			toggleTheme: () => dispatch({ type: 'TOGGLE_THEME' }),
			setData: (data) => dispatch({ type: 'SET_DATA', payload: data }),
		};
	}, [state]);

	return <ContextGlobal.Provider value={contextValue}>{children}</ContextGlobal.Provider>;
};

// Custom hook for using the context
export const useGlobalContext = () => {
	const context = useContext(ContextGlobal);
	if (context === undefined) {
		throw new Error('useGlobalContext must be used within a ContextProvider');
	}
	return context;
};
