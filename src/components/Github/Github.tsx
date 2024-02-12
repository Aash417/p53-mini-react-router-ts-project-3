// import { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';

export default function Github() {
	// const [data, setData] = useState<{
	// 	name?: string;
	// 	avatar_url?: string;
	// }>({});

	// useEffect(() => {
	// 	fetch('https://api.github.com/users/Aash417')
	// 		.then((res) => res.json())
	// 		.then((data) => setData(data));
	// }, []);
	interface GitHubUserData {
		name: string;
		avatar_url: string;
		// Add other properties as needed
	}

	const data = useLoaderData() as GitHubUserData;

	return (
		<div className='flex  gap-x-10 text-center m-4 text-white bg-gray-500 text-3xl '>
			Github: {data.name}
			<img src={data.avatar_url} className='w-48 p-2' alt='' />
		</div>
	);
}

export const githubInfoLoader = async () => {
	const response = await fetch('https://api.github.com/users/Aash417');
	return response.json();
};
