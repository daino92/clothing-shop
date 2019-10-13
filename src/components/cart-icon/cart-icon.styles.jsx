import styled from 'styled-components';
import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg';

export const CartIconComponent = styled.div`
    width: 45px;
    height: 45px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
`;

export const ShoppingIconComponent = styled(ShoppingIcon)`
    width: 24px;
    height: 24px;
`;

export const ItemCountComponent = styled.div`
    position: absolute;
    font-size: 10px;
    font-weight: 700;
    bottom: 12px;
`;