import { RefObject, useState } from 'react';

const useMap = () => {
    const { kakao } = window;
    // @ts-ignore
    const [kakaoMap, setKakaoMap] = useState(null);

    const createMap = (mapRef: RefObject<HTMLDivElement>) => {
        const container = mapRef.current;

        // HTML5의 geolocation으로 사용할 수 있는지 확인합니다
        if (navigator.geolocation) {

            // GeoLocation을 이용해서 접속 위치를 얻어옵니다
            navigator.geolocation.getCurrentPosition(function(position) {

                const lat = position.coords.latitude;
                const lon = position.coords.longitude; // 경도
                console.log(lat, lon)

                // const options = {
                //     center: new kakao.maps.LatLng(lat, lon),
                //     level: 3,
                // };
                //
                // setKakaoMap(new kakao.maps.Map(container, options));
            });

        } else { // HTML5의 GeoLocation을 사용할 수 없을때 마커 표시 위치와 인포윈도우 내용을 설정합니다

            const locPosition = new kakao.maps.LatLng(33.450701, 126.570667);
            console.log(locPosition)
        }
    };

    const createMessage = () => {
        const markerPosition = new kakao.maps.LatLng(33.450701, 126.570667);

        const marker = new kakao.maps.Marker({
            position: markerPosition,
        });

        marker.setMap(kakaoMap);
    };

    const useKakaoMap = () => kakaoMap;

    return {
        createMap,
        useKakaoMap,
        createMessage,
    };
};

export default useMap;
