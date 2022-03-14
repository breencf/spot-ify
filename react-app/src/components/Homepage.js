import { ContentList } from "./ContentList";
import { useSelector } from "react-redux";


export const Homepage = () => {

let now = new Date()
let hrs = now.getHours()
let greet = "Hello";

if (hrs < 12) greet = 'Good Morning';
else if (hrs >= 12 && hrs <= 17) greet = 'Good Afternoon';
else if (hrs >= 17 && hrs <= 24) greet = 'Good Evening';

const data = useSelector((state) => state.libraryReducer)



  return(
  <>
  <h2>{greet}</h2>
  <br/>
  <br/>
  <ContentList array={data?.albums} heading={"Albums"}/>
  </>
  )
  ;
};
