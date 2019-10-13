import React from 'react';
import {DirectoryComponent} from './directory.styles';
import {connect} from 'react-redux';
import {selectDirectorySections} from '../../redux/directory/directory.selectors';
import {createStructuredSelector} from 'reselect';
import MenuItem from '../menu-item/menu-item.component';

const Directory = ({sections}) => (
  <DirectoryComponent>
    {sections.map(({id, ...otherSectionProps}) => (
        <MenuItem key={id} {...otherSectionProps}/>
    ))}
  </DirectoryComponent>
)

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections
})

export default connect(mapStateToProps)(Directory);