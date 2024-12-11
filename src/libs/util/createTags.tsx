import styled from 'styled-components';

export const HeaderTag = styled.header`
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const MapWrapperTag = styled.div`
    width: 100%;
    height: calc(100vh - 50px);
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const MapTag = styled.div`
    width: 100%;
    height: 100%;
    background-color: lightgray;
`;

export const FontAwesomeTag = styled.i<{ $fontSize?: number;}>`
    font-size: ${(props) => props.$fontSize}px;
`;

export const ButtonTag = styled.button`
    border: none;
    cursor: pointer;
`;

export const MessageInputWrapTag = styled.div`
    position: absolute;
    bottom: 20px;
    display: flex;
    gap: 10px;
`

export const MessageInputTag = styled.input`
    padding: 10px;
    border-radius: 20px;
    border: 1px solid #ccc;
    width: 230px;
`;

export const SendButtonTag = styled.button`
    border: none;
    cursor: pointer;
    background-color: #8484fd;
    color: white;
    font-size: 16px;
    padding: 4px 10px;
    border-radius: 10px;
    display: flex;
    align-items: center;
    gap: 6px;
    
    &:hover {
        background-color: #6f6fff;
    }
`;
