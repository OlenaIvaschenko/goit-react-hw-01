
import Profile from "./Profile/Profile.jsx";
import userData from "../userData.json";
import FriendList from "./Friendlist/Friendlist.jsx";
import friends from "../friends.json";
import "../components/App.css"

const App =()=> {
  
      return (

    <>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
<FriendList friends={friends} />
    </>
  );
};

export default App

