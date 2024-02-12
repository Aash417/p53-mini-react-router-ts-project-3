import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import Layout from './Layout.tsx';
import Home from './components/Home/Home.tsx';
import './index.css';
import About from './components/About/About.tsx';
import Contact from './components/contact/Contact.tsx';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Layout />,
		children: [
			{ path: '', element: <Home /> },
			{ path: 'about', element: <About /> },
			{ path: 'contact', element: <Contact /> },
		],
	},
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
