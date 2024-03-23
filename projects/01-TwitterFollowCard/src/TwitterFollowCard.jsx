import { useState } from "react"

export function TwitterFollowCard({ userName, name, initialIsFollowing }) {
    const [isFollowing, setIsFollowing] = useState(initialIsFollowing)

    const imgSrc = `https://unavatar.io/${userName}`
    const stateText = isFollowing ? 'Dejar de seguir' : 'Seguir'
    const stateClassName = isFollowing ? 'tw-followCar--aside--followButton isFollowing' : 'tw-followCar--aside--followButton'

    const handleClick = () => {
        setIsFollowing(!isFollowing)
    }

    return (
        <article className='tw-followCar'>
            <header className='tw-followCar--header'>
                <img className='tw-followCar--img' src={imgSrc} alt="El avatar de midude"/>
                <div className='tw-followCar--info'>
                    <strong className='tw-followCar--info--name'>{name}</strong>
                    <span className='tw-followCar--info--user' >@{userName}</span>
                </div>
            </header>
            <aside className='tw-followCar--aside'>
                <button className={stateClassName} onClick={handleClick}>
                    {stateText}
                </button>
            </aside>
        </article>
    )
}