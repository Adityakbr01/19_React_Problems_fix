import React, { useState, useEffect } from "react";

function Login_and_SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLogin, setIsLogin] = useState(true);
  const [NewUser, setNewUser] = useState([]);

  useEffect(() => {
    const storedUsers = JSON.parse(localStorage.getItem("Users")) || [];
    setNewUser(storedUsers);
  }, []);

  const HandleSubmit = (e) => {
    e.preventDefault();

    if (email === "" || password === "") {
      alert("Please fill all fields");
      return;
    }

    if (isLogin) {
      const users = JSON.parse(localStorage.getItem("Users")) || [];
      const user = users.find(
        (user) => user.email === email && user.password === password
      );
      if (user) {
        alert("Login Successful");
      } else {
        alert("Invalid Credentials");
      }
    } else {
      const newUser = { email, password };
      const updatedUsers = [...NewUser, newUser];
      setNewUser(updatedUsers);
      localStorage.setItem("Users", JSON.stringify(updatedUsers));
      alert("Registration Successful");
      setIsLogin(true); // Switch to login after registration
    }
  };

  const LogOut = () => {
    setEmail("");
    setPassword("");
    setIsLogin(true);
  };

  return (
    <div className="flex flex-col gap-10 items-center">
      {isLogin ? (
        <div>
          Hello {email} <button onClick={LogOut}>Log out</button>
        </div>
      ) : (
        <div className="flex items-center flex-col gap-3 w-[22rem] h-[26rem] bg-gray-300 rounded-lg">
          <h2 className="text-center text-black font-semibold text-2xl mt-6">
            {isLogin ? "Login" : "Register"}
          </h2>
          <form
            onSubmit={HandleSubmit}
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
              {isLogin ? "Login" : "Register"}
            </button>
          </form>
          <div className="flex gap-4 mt-14 items-center">
            <h2 className="text-xl text-black">
              {isLogin ? "I don't have an account" : "Already have an account"}
            </h2>
            <button
              onClick={() => setIsLogin(!isLogin)}
              className="p-0 text-blue-500 border-none hover:border-none hover:outline-none outline-none bg-transparent"
            >
              {isLogin ? "Register" : "Login"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Login_and_SignUp;
