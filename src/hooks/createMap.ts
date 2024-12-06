import { RefObject } from 'react';

const createMap = (mapRef : RefObject<HTMLDivElement>) => {
    const { kakao } = window;
    const container = mapRef.current;
    const options = {
        center: new kakao.maps.LatLng(33.450701, 126.570667),
        level: 6,
    };
    // 지도 객체 생성
    const map = new kakao.maps.Map(container, options);
    console.log(map);
}

export default createMap;