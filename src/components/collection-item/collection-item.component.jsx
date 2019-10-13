import React from 'react';
import {connect} from 'react-redux';

import {addItem} from '../../redux/cart/cart.actions';
import {CustomButtonComponent, CollectionFooterComponent, FooterNameComponent, FooterPriceComponent, CollectionImageComponent, CollectionItemComponent} from './collection-item.styles';

const CollectionItem = ({item, addItem}) => {
    const {name, price, imageUrl} = item;
    return (
    <CollectionItemComponent>
        <CollectionImageComponent className='image' imageUrl={imageUrl}/>
        <CollectionFooterComponent>
            <FooterNameComponent>{name}</FooterNameComponent>
            <FooterPriceComponent>{price}</FooterPriceComponent>
        </CollectionFooterComponent>
        <CustomButtonComponent onClick={() => addItem(item)} inverted>Add to cart</CustomButtonComponent>
    </CollectionItemComponent>
)}

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
})

export default connect(null, mapDispatchToProps)(CollectionItem);