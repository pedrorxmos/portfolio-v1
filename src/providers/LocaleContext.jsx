import React, { createContext, useState } from 'react';
import en from '../locale/en.json';
import es from '../locale/es.json';
import { useGetValue } from '../hooks/localStorage';

export const LocaleContext = createContext();

export const localeMap = [
	{
		locale: en,
		localeName: 'en',
		localeTitle: 'english',
	},
	{
		locale: es,
		localeName: 'es',
		localeTitle: 'español',
	},
];

export function LocacleProvider({ children }) {
	const [locale, setLocale] = useState(localeMap.find((e) => e.localeName === useGetValue('locale')) || 'en');

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
