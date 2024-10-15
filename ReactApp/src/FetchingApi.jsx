import { useEffect, useState } from "react";

export function FetchingApi() {
  const [users, setUsers] = useState();
  const [loading, setLoading] = useState();

  const [error, setError] = useState();

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        if (res.status == 200) {
          return res.json();
        } else {
          return Promise.reject(res);
        }
      })
      .then((data) => {
        console.log("Here");
        setUsers(data);
      })
      .catch((e) => {
        if (e?.name === "AbortError") return;
        setError(e);
      })

      .finally(() => {
        setLoading(false);
      });
  }, []);
  let jsx;
  if (loading) {
    jsx = <h1>Loading...</h1>;
  } else if (error != null) {
    jsx = <h2>Error!</h2>;
  } else {
    jsx = JSON.stringify(users);
  }

  return (
    <div>
      <h1>Users</h1>
      {jsx}
    </div>
  );
}
