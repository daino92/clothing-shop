import React from 'react';

import {Preview, CollectionPreviewComponent, CollectionTitle} from './collection-preview.styles';
import CollectionItem from '../collection-item/collection-item.component';

const CollectionPreview = ({title, items}) => (
    <CollectionPreviewComponent>
        <CollectionTitle as='h1'>{title.toUpperCase()}</CollectionTitle>
        <Preview>
            {items
                .filter((item, idx) => idx < 4)
                .map((item) => (
                    <CollectionItem key={item.id} item={item}/>
            ))}
        </Preview>
    </CollectionPreviewComponent>
);

export default CollectionPreview;