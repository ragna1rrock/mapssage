import {
    // Link,
    Outlet,
} from 'react-router-dom';
import { HeaderTag, ButtonTag, FontAwesomeTag } from '@/libs/util/createTags';

const Gnb = () => {
    return (
        <>
            <HeaderTag>
                <ButtonTag>
                    <FontAwesomeTag $fontSize={30} className="fa-solid fa-bars" />
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
