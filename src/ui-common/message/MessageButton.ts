import styled from '@emotion/styled';

const MessageButton = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #fff;
    border-radius: 0;
    padding: 0 4px;
    border: 3px #000 solid;
    white-space: nowrap;
    box-sizing: border-box;

    &:hover {
        background-color: #f5f5f5;
        cursor: pointer;
    }
`;

export default MessageButton;
