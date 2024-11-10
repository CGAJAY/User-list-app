import { useEffect, useState } from "react";
import axios from "axios";

const UserList = () => {
	// State to store the list of users
	const [listOfUsers, setListOfUsers] = useState([]);

	// Fetch data from the API when the component mounts
	useEffect(() => {
		axios
			.get("https://jsonplaceholder.typicode.com/users")
			.then((response) => {
				// Set the data to state
				setListOfUsers(response.data);
			})
			.catch((error) => {
				console.error("Error fetching the users:", error);
			});
	}, []);

	return (
		<ul>
			{listOfUsers.map((user) => (
				<li key={user.id}>
					<h2>{user.name}</h2>
					<p>
						<strong>Username:</strong> {user.username}
					</p>
					<p>
						<strong>Email:</strong> {user.email}
					</p>
					<p>
						<strong>Address:</strong> {user.address.city},{" "}
						{user.address.street}
					</p>
				</li>
			))}
		</ul>
	);
};

export default UserList;
