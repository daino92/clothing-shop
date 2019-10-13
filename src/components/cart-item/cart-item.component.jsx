import React from 'react';

import {CartItemComponent, ItemDetailsComponent} from './cart-item.styles';

const CartItem = ({ item: {imageUrl, price, name, quantity}}) => (
    <CartItemComponent>
        <img src={imageUrl} alt='item'/>
        <ItemDetailsComponent>
            <span>{name}</span>
            <span>{quantity} x ${price}</span>
        </ItemDetailsComponent>
    </CartItemComponent>
)

export default CartItem;