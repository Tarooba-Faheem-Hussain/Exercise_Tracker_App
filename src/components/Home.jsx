import { useSelector } from "react-redux";


export const Home = () => {
    const state = useSelector((state) => state.users)
    console.log(state.users); 
  return (
    <div>Home</div>
  )
}
export default Home;
