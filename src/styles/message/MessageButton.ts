import styled from '@emotion/styled';

const MessageButton = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #fff;
    padding: 8px 12px;
    border: none;
    border-radius: 0px;
    border: 3px #000 solid;

    &:hover {
        background-color: #f5f5f5;
        cursor: pointer;
    }
`;

export default MessageButton;
