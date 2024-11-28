import { useEffect, useState } from "react";

const FetchingData = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // verbos http --> GET | POST | PUT | DELETE
    const getProducts = fetch("https://jsonplaceholder.org/users");
    getProducts
      .then((res) => res.json())
      .then((res) => setUsers(res))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      {users.map((user) => {
        return <h2 key={user.id}>{user.firstname}</h2>;
      })}
    </div>
  );
};

export default FetchingData;
