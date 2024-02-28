import { useAuth } from "./useAuthContext";

const Dashboard = () => {
    const {user,setUser} = useAuth()
    console.log("user",user);
  return (
    <div>
      My name is {user}
      <button onClick={() => setUser("")}>Logout</button>
    </div>
  );
}

export default Dashboard;
