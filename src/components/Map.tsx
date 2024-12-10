import MapWrapperTag from '@/util/Tags';
import { useEffect, useRef } from 'react';
import useMap from '@/hooks/useMap.ts';

declare global {
    interface Window {
        kakao: any;
    }
}

const Map = () => {
    const mapRef = useRef<HTMLDivElement>(null);
    const { createMap } = useMap();

    useEffect(() => createMap(mapRef), []);

    return (
        <>
            <MapWrapperTag ref={mapRef} />
        </>
    );
};
export default Map;