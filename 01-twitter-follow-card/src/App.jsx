import "./App.css";
import { TwitterFollowCard } from "./TwitterFollowCard";

const users = [
  { userName: "midudev", name: "Miguel Ángel Dúran", isFollowing: true },
  {
    userName: "pheralb",
    name: "Pablo Hernandez",
    isFollowing: false,
  },
  {
    userName: "elonmusk",
    name: "Elon Musk",
    isFollowing: true,
  },
  {
    userName: "vxnder",
    name: "Vanderhart",
    isFollowing: false,
  },
];

export function App() {
  return (
    <section className="App">
     {
       users.map( ({userName, name, isFollowing}) => {
          
          return (
            <TwitterFollowCard userName={userName}
                key={userName}
                initialIsFollowing = {isFollowing} >{name}</TwitterFollowCard>
          )
       } )
     }  
    </section>)
  
}
