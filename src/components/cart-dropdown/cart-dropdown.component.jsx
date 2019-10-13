import React from 'react';

import CartItem from '../cart-item/cart-item.component';
import {connect} from 'react-redux'
import {selectCartItems} from '../../redux/cart/cart.selectors';
import {createStructuredSelector} from 'reselect';
import {withRouter} from 'react-router-dom';
import {toggleCartHidden} from '../../redux/cart/cart.actions';
import {CartDropDownComponent, CartItemsComponent, CartDropdownButton, EmptyMessage} from './cart-dropdown.styles';

const CartDropDown = ({cartItems, history, dispatch}) => (
    <CartDropDownComponent>
        <CartItemsComponent>
            {
                cartItems.length ?
                cartItems.map(cartItem => (
                    <CartItem key={cartItem.id} item={cartItem} />
                )) 
                : (<EmptyMessage>Your cart is empty</EmptyMessage>)
            }
        </CartItemsComponent>
        <CartDropdownButton onClick={() => {
            history.push('/checkout')
            dispatch(toggleCartHidden())}}>GO TO CHECKOUT</CartDropdownButton>
    </CartDropDownComponent>
)

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
})

export default withRouter(connect(mapStateToProps)(CartDropDown));