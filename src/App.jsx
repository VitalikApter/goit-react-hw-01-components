import user from './data/user.json';
import stats from './data/stats.json';
import Profile from "./components/Profile/Profile";
import Statistic from 'components/Statistic/Statistic';



 export const App = () => {
  return (
    <>
    <Profile 
    key={user.username}
    username={user.username}
    tag={user.tag}
    location={user.location}
    avatar={user.avatar}
    stats={user.stats}
    />
    <Statistic title="Upload stats" stats={stats} />
    

     </>
  );
};


