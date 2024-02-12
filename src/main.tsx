import React from 'react';
import ReactDOM from 'react-dom/client';
import {
	Route,
	RouterProvider,
	createBrowserRouter,
	createRoutesFromElements,
} from 'react-router-dom';
import Layout from './Layout.tsx';
import About from './components/About/About.tsx';
import Github from './components/Github/Github.tsx';
import Home from './components/Home/Home.tsx';
import User from './components/User/User.tsx';
import Contact from './components/contact/Contact.tsx';
import './index.css';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Layout />,
		children: [
			{ path: '', element: <Home /> },
			{ path: 'about', element: <About /> },
			{ path: 'contact', element: <Contact /> },
			{path: 'github', element:<Github/>},
			{path: 'user/:userId', element:<User/>},
		],
	},
]);

// const router = createBrowserRouter(
// 	createRoutesFromElements(
// 		<Route path='/' element={<Layout />}>
// 			<Route path='' element={<Home />} />
// 			<Route path='about' element={<About />} />
// 			<Route path='contact' element={<Contact />} />
// 			<Route path='user/:userId' element={<User />} />
// 			<Route path='github' element={<Github />} />
// 		</Route>
// 	)
// );

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
