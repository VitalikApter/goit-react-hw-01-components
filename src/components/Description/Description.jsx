import css from '../Description/Description.module.css';


const Description = ({avatar, username, tag, location}) => {
    return (
        <div className={css.Description}>
    <img src={avatar} alt="User avatar" className="avatar"/>
    <p className="name">{username}</p>
    <p className="tag">{tag}</p>
    <p className="location">{location}</p>
  </div>
    )
}

export default Description;