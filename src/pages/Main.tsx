import { useEffect, useRef } from 'react';
import useMap from '@/hooks/main/useMap';
import {
    MapWrapperTag,
    MapTag,
    SendButtonTag,
    MessageInputWrapTag,
    MessageInputTag,
} from '@/libs/util/createTags';
import sendMessage from '@/hooks/main/sendMessage.ts';

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
        <MapWrapperTag>
            <MapTag ref={mapRef}>MAP</MapTag>
            <MessageInputWrapTag>
                <MessageInputTag />
                <SendButtonTag onClick={sendMessage}>
                    보내기
                </SendButtonTag>
            </MessageInputWrapTag>
        </MapWrapperTag>
    );
};
export default Main;
