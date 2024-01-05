import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';

export const Navigation = () => {
    const sessionUser = useSelector((state) => state.session.user);
    let content;

    if (!sessionUser) {
        content = (
            <nav>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/login">Login</a></li>
                    <li><a href="/signup">Sign Up</a></li>

                </ul>
            </nav>
        );
    } else {
        content = (
            <>
                <ProfileButton />
                <nav>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/logout">Logout</a></li>
                    </ul>
                </nav>
            </>
        );
    }

    return (
        <nav>
            <ul>
                {content}
            </ul>
        </nav>
    );
}

export default Navigation;
