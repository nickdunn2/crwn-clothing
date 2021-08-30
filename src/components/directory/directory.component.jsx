import React from 'react'
import MenuItem from '../menu-item/menu-item.component'
import './directory.styles.scss'
import { DIRECTORY_SECTIONS } from '../../data/directory-sections'

class Directory extends React.Component {
  constructor() {
    super()

    this.state = {
      sections: DIRECTORY_SECTIONS
    }
  }

  render() {
    return (
      <div className="directory-menu">
        {
          this.state.sections.map(({ title, imageUrl, id, size}) => (
            <MenuItem
              key={ id }
              title={ title }
              imageUrl={ imageUrl }
              size={ size }
            />
          ))
        }
      </div>
    )
  }
}

export default Directory
