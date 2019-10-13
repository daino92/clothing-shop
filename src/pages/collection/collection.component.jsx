import React from 'react';
import {connect} from 'react-redux'
import {selectCollection} from '../../redux/shop/shop.selectors'
import CollectionItem from '../../components/collection-item/collection-item.component';
import {CollectionPageComponent, CollectionItems, CollectionTitleComponent} from './collection.styles';

const CollectionPage = ({ collection }) => {
    const {title, items} = collection
    return (
        <CollectionPageComponent>
            <CollectionTitleComponent>{title}</CollectionTitleComponent>
            <CollectionItems>
                {items.map(item => (
                    <CollectionItem key={item.id} item={item} />
                ))}
            </CollectionItems>
        </CollectionPageComponent>
    );
};

const mapStateToProps = (state, ownProps) => ({
    collection: selectCollection(ownProps.match.params.collectionId)(state)
})

export default connect(mapStateToProps)(CollectionPage);