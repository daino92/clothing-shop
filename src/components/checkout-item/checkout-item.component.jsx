import React from 'react';
import {connect} from 'react-redux';
import {clearItemFromCart, addItem, removeItem} from '../../redux/cart/cart.actions';
import {CheckoutItemComponent, CheckoutImage, RemoveButton, Columns, QuantityColumn} from './checkout-item.styles';

const CheckoutItem = ({ cartItem, clearItem, addItem, removeItem }) => {
    const { name, imageUrl, price, quantity } = cartItem;
    return(
    <CheckoutItemComponent>
        <CheckoutImage>
            <img src={imageUrl} alt='item'/>
        </CheckoutImage>
        <Columns as='span'>{name}</Columns>
        <QuantityColumn as='span'>
            <div onClick={() => removeItem(cartItem)}>&#10094;</div>
            <span>{quantity}</span>
            <div onClick={() => addItem(cartItem)}>&#10095;</div>
        </QuantityColumn>
        <Columns as='span'>{price}</Columns>
        <RemoveButton onClick={() => clearItem(cartItem)}>
            &#10005;
        </RemoveButton>
    </CheckoutItemComponent>
)};

const mapDispatchToProps = dispatch => ({
    clearItem: item => dispatch(clearItemFromCart(item)),
    addItem: item => dispatch(addItem(item)),
    removeItem: item => dispatch(removeItem(item))
})

export default connect(null, mapDispatchToProps)(CheckoutItem);