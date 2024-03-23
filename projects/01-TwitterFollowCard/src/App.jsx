import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

export function App () {
    return (
        <section className='App'>
            <TwitterFollowCard initialIsFollowing={true} userName="midudev" name="Miguel Angel Duran" />
            <TwitterFollowCard userName="joseph083" name="Miguel Duran" />
        </section>
    )
}