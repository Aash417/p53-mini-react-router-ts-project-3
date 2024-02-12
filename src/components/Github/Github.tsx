import { useEffect, useState } from 'react';

export default function Github() {
	const [data, setData] = useState([]);

	useEffect(() => {
		fetch('https://api.github.com/users/Aash417')
			.then((res) => res.json())
			.then((data) => setData(data));
	}, []);

	return (
		<div className='flex  gap-x-10 text-center m-4 text-white bg-gray-500 text-3xl '>
			Github: {data.name}
			<img src={data.avatar_url} className='w-48 p-2' alt='' />
		</div>
	);
}
