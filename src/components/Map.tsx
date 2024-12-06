import MapWrapperTag from '@/util/Tags';
import { useEffect, useRef } from 'react';
import createMap from '@/hooks/createMap.ts';

declare global {
    interface Window {
        kakao: any;
    }
}

const Map = () => {
    const mapRef = useRef<HTMLDivElement>(null);

    useEffect(() => createMap(mapRef), []);

    return (
        <>
            <MapWrapperTag ref={mapRef} />
        </>
    );
};
export default Map;