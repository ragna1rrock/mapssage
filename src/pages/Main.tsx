import { useEffect, useRef } from 'react';
import useMap from '@/hooks/main/useMap';
import regMessage from '@/hooks/main/sendMessage.ts';

import Container from '@/styles/component/Container.ts';
import MapWrap from '@/styles/wrap/MapWrap.ts';
import MessageWrap from '@/styles/message/MessageWrap.ts';
import MessageInput from '@/styles/message/MessageInput.ts';
import MessageButton from '@/styles/message/MessageButton.ts';
import BlackSmallText from '@/styles/text/BlackSmallText.ts';

declare global {
    interface Window {
        kakao: any;
    }
}

const Main = () => {
    const mapRef = useRef<HTMLDivElement>(null);
    const { createMap } = useMap();

    useEffect(() => createMap(mapRef), []);

    return (
        <Container>
            <MapWrap ref={mapRef}></MapWrap>
            <MessageWrap>
                <MessageInput placeholder="메세지를 입력해 주세요." />
                <MessageButton onClick={regMessage}>
                    <BlackSmallText>보내기</BlackSmallText>
                </MessageButton>
            </MessageWrap>
        </Container>
    );
};
export default Main;
