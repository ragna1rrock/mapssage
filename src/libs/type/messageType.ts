import React from 'react';

interface CreateMapProp {
    mapRef: React.RefObject<HTMLDivElement>;
    messageList: MessageType[];
}

interface MessageType {
    user_id: string;
    msg: string;
    type: string;
    position: MessagePositionType;
}

interface MessagePositionType {
    lat: number;
    lon: number;
}

export type { CreateMapProp, MessageType };
