import {
    // Link,
    Outlet,
} from 'react-router-dom';
import Header from '@/styles/component/Header.ts';
import FontAwesome from '@/styles/component/FontAwesomeTag.ts';
import MenuButton from '@/styles/button/MenuButton.ts';

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
