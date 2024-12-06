import { Link, Outlet } from 'react-router-dom';
import Map from '@/components/Map.tsx';

const Gnb = () => {
    return (
        <>
            <nav>
                <Link to='/'>home</Link>
                <Link to='/about'>about</Link>
                <Link to='/login'>login</Link>
            </nav>
            <Map />
            <Outlet />
        </>
    );
};

export default Gnb;