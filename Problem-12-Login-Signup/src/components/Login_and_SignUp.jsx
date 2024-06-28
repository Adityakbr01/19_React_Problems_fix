import React, { useState, useEffect } from "react";

function Login_and_SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoginMode, setIsLoginMode] = useState(true); // Renamed for clarity
  const [users, setUsers] = useState([]);
  const [loggedInUser, setLoggedInUser] = useState(null); // Track logged-in user

  useEffect(() => {
    const storedUsers = JSON.parse(localStorage.getItem("Users")) || [];
    setUsers(storedUsers);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email === "" || password === "") {
      alert("Please fill all fields");
      return;
    }

    if (isLoginMode) {
      const user = users.find(
        (user) => user.email === email && user.password === password
      );
      if (user) {
        alert("Login Successful");
        setLoggedInUser(user.email); // Set logged-in user
      } else {
        alert("Invalid Credentials");
      }
    } else {
      const newUser = { email, password };
      const updatedUsers = [...users, newUser];
      setUsers(updatedUsers);
      localStorage.setItem("Users", JSON.stringify(updatedUsers));
      alert("Registration Successful");
      setIsLoginMode(true); // Switch to login after registration
    }
  };

  const handleLogout = () => {
    setEmail("");
    setPassword("");
    setLoggedInUser(null); // Clear logged-in user
    setIsLoginMode(true);
  };

  return (
    <div className="flex flex-col gap-10 items-center">
      {loggedInUser ? (
        <div>
          <h2>Hello, {loggedInUser}</h2>
          <button onClick={handleLogout}>Log out</button>
        </div>
      ) : (
        <div className="flex items-center flex-col gap-3 w-[22rem] h-[26rem] bg-gray-300 rounded-lg">
          <h2 className="text-center text-black font-semibold text-2xl mt-6">
            {isLoginMode ? "Login" : "Register"}
          </h2>
          <form
            onSubmit={handleSubmit}
            className="flex mt-10 flex-col items-center justify-center gap-2"
          >
            <input
              placeholder="Email"
              className="bg-[#242424] px-4 py-2 rounded-md border-[#565efc] border-2 outline-none"
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              placeholder="Password"
              className="bg-[#242424] px-4 py-2 rounded-md border-[#565efc] border-2 outline-none"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <button type="submit" className="mt-10">
              {isLoginMode ? "Login" : "Register"}
            </button>
          </form>
          <div className="flex gap-4 mt-14 items-center">
            <h2 className="text-xl text-black">
              {isLoginMode
                ? "I don't have an account"
                : "Already have an account"}
            </h2>
            <button
              onClick={() => setIsLoginMode(!isLoginMode)}
              className="p-0 text-blue-500 border-none hover:border-none hover:outline-none outline-none bg-transparent"
            >
              {isLoginMode ? "Register" : "Login"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Login_and_SignUp;
