import styled from 'styled-components';

export const CheckoutItemComponent = styled.div`
    width: 100%;
    display: flex;
    min-height: 100px;
    border-bottom: 1px solid darkgrey;
    padding: 15px 0;
    font-size: 20px;
    align-items: center;
`;

export const CheckoutImage = styled.div`
    width: 23%;
    padding-right: 15px;

    img {
        width: 100%;
        height: 100%;
    }
`;

export const RemoveButton = styled.div`
    padding-left: 12px;
    cursor: pointer;
`;

export const Columns = styled.div`
    width: 23%;
`;

export const QuantityColumn = styled(Columns)`
    display: flex;

    div {
        cursor: pointer;
    }

    span {
        margin: 0 10px;
    }   
`;