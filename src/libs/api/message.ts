import sample from '@/libs/config/sample';
import { MessageType } from '@/libs/type/messageType';

const getMessageList = (): Promise<MessageType[]> => {
    // TODO: MessageList API 호출
    return new Promise((resolve) => {
        resolve(sample);
    });
};

export default getMessageList;