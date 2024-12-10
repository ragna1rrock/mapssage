import {
    // Link,
    Outlet,
} from 'react-router-dom';
import { HeaderTag, ButtonTag, BergerMenuTag } from '@/util/createTags';

const Gnb = () => {
    return (
        <>
            <HeaderTag>
                <ButtonTag>
                    <BergerMenuTag className="fa-solid fa-bars" />
                </ButtonTag>
                {/*<Link to='/'>home</Link>*/}
                {/*<Link to='/about'>about</Link>*/}
                {/*<Link to='/login'>login</Link>*/}
            </HeaderTag>
            <Outlet />
        </>
    );
};

export default Gnb;
