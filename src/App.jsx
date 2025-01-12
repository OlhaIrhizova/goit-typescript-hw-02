
import userData from "./temp/Profile/userData.json";
import friends from "./temp/FriendList/friends.json";
import transactions from "./temp/TransactionHistory/transactions.json";
import FriendList from "./temp/FriendList/FriendList.jsx";
import TransactionHistory from "./temp/TransactionHistory/TransactionHistory.jsx";
import Profile from "./temp/Profile/Profile.jsx";




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