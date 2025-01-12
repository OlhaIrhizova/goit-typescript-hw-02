
import userData from "./components/Profile/userData.json";
import friends from "./components/FriendList/friends.json";
import transactions from "./components/TransactionHistory/transactions.json";
import FriendList from "./components/FriendList/FriendList.jsx";

import TransactionHistory from "./components/TransactionHistory/TransactionHistory.jsx";
import Profile from "./components/Profile/Profile.jsx";




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