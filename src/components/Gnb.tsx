import { Link, Outlet } from 'react-router-dom';

const Gnb = () => {
    return (
        <>
            <nav>
                <Link to='/'>home</Link>
                <Link to='/about'>about</Link>
                <Link to='/login'>login</Link>
            </nav>
            <Outlet />
        </>
    )
};

export default Gnb;