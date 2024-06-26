import { useState } from "react";

export function TwitterFollowCard ({children, userName }) {
    
    const [isFollowing, setIsFollowing] = useState(false);

    const text = isFollowing? 'Siguiendo': 'Seguir'
    const buttonClassName = isFollowing? 'tw-followCard-button is-following':
                      'tw-followCard-button'
    
    const handleClick = () => {
        setIsFollowing(!isFollowing);
    }
    
    const imageSrc = `https://unavatar.io/${userName}`;
    return (
    <article className="tw-followCard">
      <header className="tw-followCard-header">
        <img
          className="tw-followCard-avatar"
          src= { imageSrc }
          alt="El avatar de midudev"
        />
        <div className="tw-followCard-info">
          <strong>{children}</strong>
          <span>{userName}</span>
        </div>
      </header>
      <aside>
        <button className={buttonClassName} onClick={handleClick} >
           <span className="tw-followCard-text"> {text}</span> 
           <span className="tw-followCard-stopFollow"> Dejar de seguir</span> 
        </button>
      </aside>
    </article>
  );
}
