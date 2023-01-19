import user from './data/user.json';
import stats from './data/stats.json';
import friends from './data/friends.json';
import Profile from "./components/Profile/Profile";
import Statistic from 'components/Statistic/Statistic';
import FriendList from 'components/FriendList/FriendList';



 export const App = () => {
  return (
    <>
    <section>
    <Profile 
    key={user.username}
    username={user.username}
    tag={user.tag}
    location={user.location}
    avatar={user.avatar}
    stats={user.stats}
    />
    </section>
    
    <Statistic title="Upload stats" stats={stats} />
    
    <FriendList friends={friends} />
    
    
     </>
  );
};


