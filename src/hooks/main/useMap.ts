import { RefObject, useState } from 'react';

const useMap = () => {
    const { kakao } = window;
    const [kakaoMap, setKakaoMap] = useState(null);
    const [kakaoMapLatLng, setKakaoMapLatLng] = useState(null);

    const createMap = (mapRef: RefObject<HTMLDivElement>) => {
        const run = (lat: number, lon: number) => {
            const latLng = new kakao.maps.LatLng(lat, lon);
            setKakaoMap(
                new kakao.maps.Map(container, {
                    center: latLng,
                    level: 3,
                }),
            );
            setKakaoMapLatLng(latLng);
        };

        const container = mapRef.current;
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function (position) {
                run(position.coords.latitude, position.coords.longitude);
            });
        } else {
            run(33.450701, 126.570667);
        }
    };

    const createMessage = (message: string) => {
        const content = `
        <div style="position: relative;background: #fff;padding: 10px 12px">
          <span style="font-weight: 600;color: #000;text-shadow: 1px 1px 2px black;">${message}</span>
          <i style="position:absolute;left: 10px;top: calc(100% - 2px);clip-path: polygon(25% 0, 100% 0, 0% 100%);width: 30px;height: 20px;background: #fff"></i>
        </div>
        `

        const messageMarker = new kakao.maps.CustomOverlay({
            position: kakaoMapLatLng,
            content: content,
            xAnchor: 0.3,
            yAnchor: 0.91
        });
        messageMarker.setMap(kakaoMap);
    };

    const useKakaoMap = () => kakaoMap;

    return {
        createMap,
        useKakaoMap,
        createMessage,
    };
};

export default useMap;
