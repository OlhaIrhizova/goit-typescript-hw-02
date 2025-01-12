
import userData from "./Components/Profile/userData.json";
import friends from "./Components/FriendList/friends.json";
import transactions from "./Components/TransactionHistory/transactions.json";
import FriendList from "./Components/FriendList/FriendList.jsx";
import TransactionHistory from "./Components/TransactionHistory/TransactionHistory.jsx";
import Profile from "./Components/Profile/Profile.jsx";




function App() {
  return (
    <div>
      <Profile
      name={userData.username}
      tag={userData.tag}
      location={userData.location}
      image={userData.avatar}
      stats={userData.stats}
      />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
}

export default App;