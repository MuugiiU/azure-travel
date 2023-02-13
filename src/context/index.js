import axios from "axios";
import { Context, createContext } from "react";
import { useState , useContext} from "react";

export const UserContext=createContext(null);


export const UserProvider=({children})=>{
     const [user,setUser]=useState(false);
     const [message, setMessage] = useState("");
     const [status, setStatus] = useState("error");
     const [isAlert, setIsAlert] = useState(false);
     const [isSignIn, setIsSignIn]=useState(true);
     const login = async (email, password) => {
        console.log("eenn")
        try {
          const res = await axios.post("http://localhost:8010/signin", {
            email,
            password,
          });
          console.log("Success", res.data.user);
          localStorage.setItem("user", JSON.stringify(res.data.user));
          setStatus("success");
          setMessage(res.data.message);
          setIsAlert(true);
          setUser(res.data.user);
          handleClose();
        } catch (error) {
          console.log("ERROR: ", error);
          setStatus("error");
          setMessage(error.response.data.message);
          setIsAlert(true);
        }
      };
    const signUp = async (name, email, password,rePassword) => {
        console.log("WW");
        if (!email || !name || !password || !rePassword) {
          setMessage("Мэдээллийг бүрэн бөглөнө үү!!!");
          setIsAlert(true);
          return;
        }
        if (password !== rePassword) {
          setMessage("Нууц үг хоорондоо таарахгүй байна. !!!");
          setIsAlert(true);
          return;
        }
        try {
          const res = await axios.post("http://localhost:8010/signup", {
            name,
            email,
            password,
          });
          console.log("res", res);
          setMessage(res.data.message);
          setIsAlert(true);
          setSignIn(true);
        } catch (error) {
          console.log("Error", error);
        }
      };
   
      

     return (<UserContext.Provider value={{user, setUser, isAlert, setIsAlert, message, setMessage, login, signUp,setIsSignIn,isSignIn}}>
    {children}
     </UserContext.Provider>)
}


export const useAuth = ()=>{
    const context = useContext(UserContext)
    return context;
 }