import { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';

function User() {
	// const { userId } = useParams();
	const [data, setData] = useState<{ name?: string }>({});

	useEffect(() => {
		fetch('https://api.github.com/users/Aash417')
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
				setData(data);
				return;
			});
	}, []);

	return (
		<div className='bg-gray-400 text-center h-auto text-2xl'>
			User: {data.name}
		</div>
	);
}

export default User;
