import React, { createContext, useState } from 'react';
import en from '../locale/en.json';
import es from '../locale/es.json';

export const LocaleContext = createContext();
export function LocacleProvider({ children }) {
	const [locale, setLocale] = useState(en);

	return (
		<LocaleContext.Provider
			value={{
				locale: locale,
				setLocale: setLocale,
			}}
		>
			{children}
		</LocaleContext.Provider>
	);
}
