import React from 'react';
import {withRouter} from 'react-router-dom';
import {MenuItemComponent, BackgroundImageComponent, ContentComponent, TitleComponent, SubtitleComponent} from './menu-item.styles';

const MenuItem = ({title, imageUrl, size, history, linkUrl, match}) => (
    <MenuItemComponent size={size} onClick={() => history.push(`${match.url}${linkUrl}`)}>
        <BackgroundImageComponent imageUrl={imageUrl}/>
        <ContentComponent>
            <TitleComponent as='h1'>{title.toUpperCase()}</TitleComponent>
            <SubtitleComponent as='span'>SHOP NOW</SubtitleComponent>
        </ContentComponent>
    </MenuItemComponent>
)

export default withRouter(MenuItem);