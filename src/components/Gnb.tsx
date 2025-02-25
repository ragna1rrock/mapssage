import {
    // Link,
    Outlet,
} from 'react-router-dom';
import Header from '@/ui-common/component/Header.ts';
import FontAwesome from '@/ui-common/component/FontAwesomeTag.ts';
import MenuButton from '@/ui-common/button/MenuButton.ts';

const Gnb = () => {
    return (
        <>
            <Header>
                <MenuButton>
                    <FontAwesome className="fa-solid fa-bars" />
                </MenuButton>
            </Header>
            <Outlet />
        </>
    );
};

export default Gnb;
