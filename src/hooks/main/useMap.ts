import { useState } from 'react';
import { CreateMapProp, MessageType } from '@/libs/type/messageType';

const useMap = () => {
    const { kakao } = window;
    const [clusterer, setClusterer] = useState(null);
    const [currentKakaoMapLatLon, setCurrentKakaoMapLatLon] = useState(null);

    const createMessageList = (clustererObj: any, messageList: MessageType[]): void => {
        messageList.forEach((list) => {
            const content = createOverlayContent(list.msg);
            const latLon = new kakao.maps.LatLng(list.position.lat, list.position.lon);

            setOverlay(clustererObj, content, latLon);
        });
    };

    const createMap = ({ mapRef, messageList }: CreateMapProp) => {
        const run = (lat: number, lon: number) => {
            const container = mapRef.current;
            const latLon = new kakao.maps.LatLng(lat, lon);

            const kakaoMapObject = new kakao.maps.Map(container, {
                center: latLon,
                level: 3,
            });

            const clustererObject = new kakao.maps.MarkerClusterer({
                map: kakaoMapObject,
                averageCenter: true,
                minLevel: 3,
            });

            setClusterer(clustererObject);
            setCurrentKakaoMapLatLon(latLon);
            createMessageList(clustererObject, messageList);
        };

        if (navigator.geolocation) {
            navigator.geolocation.watchPosition(
                (position) => {
                    run(position.coords.latitude, position.coords.longitude);
                },
                (error) => {
                    console.error(error);
                    run(37.5511694, 126.9882266);
                },
                { enableHighAccuracy: true }
            );
        } else {
            run(37.5511694, 126.9882266);
        }
    };

    const createOverlayContent = (message: string): string => {
        const content = `
        <div style="position: relative;background: skyblue;padding: 10px 12px;max-width:300px">
          <span style="font-weight: 600;color: #000;text-shadow: 1px 1px 2px black;">${message}</span>
          <i style="position:absolute;left: 10px;top: calc(100% - 2px);clip-path: polygon(25% 0, 100% 0, 0% 100%);width: 30px;height: 20px;background: skyblue"></i>
        </div>
        `;
        return content;
    };

    const setOverlay = (clustererObj: any, content: string, latLon: any) => {
        const messageMarker = new kakao.maps.CustomOverlay({
            position: latLon,
            content: content,
            xAnchor: 0.3,
            yAnchor: 0.91,
        });
        clustererObj.addMarker(messageMarker);
    };

    const createMessage = (message: string) => {
        const content = createOverlayContent(message);

        setOverlay(clusterer, content, currentKakaoMapLatLon);
    };

    return {
        createMap,
        createMessage,
    };
};

export default useMap;
