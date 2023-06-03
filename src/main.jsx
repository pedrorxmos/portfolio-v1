import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.jsx';
import Home from './views/Home/Home.jsx';
import About from './views/About.jsx';
import Work from './views/Work.jsx';
import Contact from './views/Contact.jsx';
import Project from './views/Project.jsx';

const router = createBrowserRouter([
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
		],
	},
]);

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);