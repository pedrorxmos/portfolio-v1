import React from 'react';
import ReactDOM from 'react-dom/client';
import { FirebaseAppProvider } from 'reactfire';
import { createHashRouter, RouterProvider, createBrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import Home from './views/Home/Home.jsx';
import About from './views/About/About.jsx';
import Work from './views/Work/Work.jsx';
import Contact from './views/Contact/Contact.jsx';
import Project from './views/Project/Project.jsx';
import Error404 from './views/Error404/Error404.jsx';
import Privacy from './views/Privacy/Privacy.jsx';

const firebaseConfig = {
	apiKey: import.meta.env.VITE_API_KEY,
	authDomain: import.meta.env.VITE_AUTH_DOMAIN,
	projectId: import.meta.env.VITE_PROJECT_ID,
	storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
	messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
	appId: import.meta.env.VITE_APP_ID,
};

const router = createHashRouter([
	{
		path: '/',
		element: <App />,
		children: [
			{
				path: '',
				element: <Home />,
			},
			{
				path: 'about',
				element: <About />,
			},
			{
				path: 'work',
				element: <Work />,
			},
			{
				path: 'work/:id',
				element: <Project />,
			},
			{
				path: 'contact',
				element: <Contact />,
			},
			{
				path: 'privacy',
				element: <Privacy />,
			},
			{
				path: '*',
				element: <Error404 />,
			},
		],
	},
]);

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<FirebaseAppProvider firebaseConfig={firebaseConfig}>
			<RouterProvider router={router} />
		</FirebaseAppProvider>
	</React.StrictMode>
);
