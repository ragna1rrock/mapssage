import { RefObject, useState } from 'react';

const useMap = () => {
    const { kakao } = window;
    // @ts-ignore
    const [kakaoMap, setKakaoMap] = useState(null);

    const createMap = (mapRef: RefObject<HTMLDivElement>) => {
        console.log(mapRef)
        // const container = mapRef.current;
        // const options = {
        //     center: new kakao.maps.LatLng(33.450701, 126.570667),
        //     level: 3,
        // };
        //
        // setKakaoMap(new kakao.maps.Map(container, options));
    };

    const createMaker = () => {
        const markerPosition  = new kakao.maps.LatLng(33.450701, 126.570667);

        const marker = new kakao.maps.Marker({
            position: markerPosition
        });

        marker.setMap(kakaoMap);
    }

    const useKakaoMap = () => kakaoMap;

    return {
        createMap,
        useKakaoMap,
        createMaker
    };
};

export default useMap;
