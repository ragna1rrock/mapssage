// @ts-ignore
import React, { useEffect, useRef, useState } from 'react';
import useMap from '@/hooks/main/useMap';

import Container from '@/ui-common/component/Container.ts';
import MapWrap from '@/ui-common/wrap/MapWrap.ts';
import MessageWrap from '@/ui-common/message/MessageWrap.ts';
import MessageInput from '@/ui-common/message/MessageInput.ts';
import MessageButton from '@/ui-common/message/MessageButton.ts';
import BlackSmallText from '@/ui-common/text/BlackSmallText.ts';
import { useInputHandler } from '@/hooks/main/useInputHandler.ts';
import getMessageList from '@/libs/api/message.ts';

declare global {
    interface Window {
        kakao: any;
    }
}

const Main = () => {
    const mapRef = useRef<HTMLDivElement>(null);
    const { createMap, createMessage } = useMap();
    const { message, handleChange } = useInputHandler(); // 커스텀 훅 사용

    useEffect(() => {
        init();
    }, []);

    const setVhProperty = () => {
        let vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);
    }

    const init = async () => {
        setVhProperty();
        const messageList = await getMessageList();
        createMap({mapRef, messageList});
    };

    return (
        <Container>
            <MapWrap ref={mapRef}></MapWrap>
            <MessageWrap>
                <MessageInput value={message} onChange={handleChange} placeholder="메세지를 입력해 주세요." />
                <MessageButton onClick={() => createMessage(message)}>
                    <BlackSmallText>보내기</BlackSmallText>
                </MessageButton>
            </MessageWrap>
        </Container>
    );
};
export default Main;
