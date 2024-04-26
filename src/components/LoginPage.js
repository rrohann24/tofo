import React ,{useState} from 'react'
import { Navigate, useNavigate } from 'react-router-dom';
import { useAuth } from '../Context/AuthContext';
const LoginPage = () => {
    const [username, setUsername] = useState(null);
    const [password, setPassword] = useState(null);
    const [ok,setOk] = useAuth();
    //https://dummyjson.com/auth/login
//     curl --location 'https://dummyjson.com/auth/login' \
// --header 'Content-Type: application/json' \
// --data '{
//     "username": "kminchelle",
//     "password": "0lelplR"
//   }'
    const navigate = useNavigate();
    const submitFormHandler = async (e) => {
        e.preventDefault();
        //console.log(username,password); 
        const d = {username : username, password: password};
        const response = await fetch("https://dummyjson.com/auth/login",{
          method: "POST",
          headers: {
            "Content-Type" : "application/json"
          },
          body: JSON.stringify(d)
          //body: {username,password}
        });
        console.log(response);
        if(response.status==200){
          setOk(true);
          navigate('/todo')
        }
        else{
          console.log("error in login")
        }
    }
  return (
    <div className="flex justify-around">
      <div className="m-2 border border-black">
        <form onSubmit={submitFormHandler} className="w-1/2">
          <input
            type="text"
            className="border m-2 p-2"
            placeholder="enter username"
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
          <input
            type="password"
            className="border m-2 p-2"
            placeholder="enter password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <button
            type="submit"
            className="border m-2 p-2 bg-blue-500"
            onClick={submitFormHandler}
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default LoginPage