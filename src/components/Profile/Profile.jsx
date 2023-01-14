import css from '../Profile/Profile.module.css';
import Description from 'components/Description/Description';



const Profile = ({username, 
  tag, 
  location, 
  avatar, 
  stats: {
  followers, 
  views, 
  likes,
},}) => {
  return(
<div className={css.Profile}>
  <Description className={css.Description}
  img={avatar}
  tag={tag}
  location={location}
  
  />

  <ul className="stats">
    <li>
      <span className="label">{followers}</span>
      <span className="quantity">1000</span>
    </li>
    <li>
      <span className="label">{views}</span>
      <span className="quantity">2000</span>
    </li>
    <li>
      <span className="label">{likes}</span>
      <span className="quantity">3000</span>
    </li>
  </ul>
</div>
  )  
};

export default Profile;