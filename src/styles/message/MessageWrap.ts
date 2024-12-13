import styled from '@emotion/styled';

const MessageWrap = styled.div`
    position: absolute;
    bottom: 20px;
    z-index: 100;
    display: grid;
    gap: 10px;
    grid-template-columns: 1fr auto;
    width: 100%;
    padding: 0 40px;
    box-sizing: border-box;
`;

export default MessageWrap;
