import { Link } from "react-router";

const Navigation = () => {
    return (
        <ul>
            <li>
                <Link to={'/'}>홈</Link>
            </li>
            <li>
                <Link to={'/channel'}>채널</Link>
            </li>
        </ul>
    )
}

export default Navigation;