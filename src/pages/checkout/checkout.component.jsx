import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {selectCartItems, selectCartTotal} from '../../redux/cart/cart.selectors';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import StripeCheckoutButton from '../../components/stripe-button/stripe-button.component';
import {CheckoutPageComponent, CheckoutHeaderComponent, HeaderBlockComponent, TotalComponent, TestWarning} from './checkout.styles';

const CheckoutPage = ({cartItems, total}) => (
    <CheckoutPageComponent>
        <CheckoutHeaderComponent>
            <HeaderBlockComponent>
                <span>Product</span>
            </HeaderBlockComponent>
            <HeaderBlockComponent>
                <span>Description</span>
            </HeaderBlockComponent>
            <HeaderBlockComponent>
                <span>Quantity</span>
            </HeaderBlockComponent>
            <HeaderBlockComponent>
                <span>Price</span>
            </HeaderBlockComponent>
            <HeaderBlockComponent>
                <span>Remove</span>
            </HeaderBlockComponent>
        </CheckoutHeaderComponent>
        {cartItems.map(cartItem => (
            <CheckoutItem key={cartItem.id} cartItem={cartItem} />
        ))}

        <TotalComponent>
            <span>TOTAL: ${total}</span>
        </TotalComponent>
        <TestWarning>
            *Please use the following test credit card for payments* 
            <br/>
            4242 4242 4242 4242 - Exp: 01/20 - CVV: 123
        </TestWarning>
        <StripeCheckoutButton price={total} />
    </CheckoutPageComponent>
)

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal
})

export default connect(mapStateToProps)(CheckoutPage);