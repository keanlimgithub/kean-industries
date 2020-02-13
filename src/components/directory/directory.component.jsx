import React from 'react';

import MenuItem from '../menu-item/menu-item.component';

import './directory.styles.scss';

class Directory extends React.Component {
        constructor() {
            super();

            this.state = {
                sections: [{
                    title: 'hats',
                    imageUrl: 'https://i.ibb.co/qkRpyPT/brown-fedora-hat-in-selective-focus-photography-35185.jpg',
                    id: 1,
                    linkUrl: 'hats'
                },
                {
                    title: 'clothes',
                    imageUrl: 'https://i.ibb.co/HDhhD5C/assorted-clothes-996329.jpg',
                    id: 2,
                    linkUrl: ''
                },
                {
                    title: 'shoes',
                    imageUrl: 'https://i.ibb.co/8BpWh9j/fashion-fashionable-footwear-leather-267301.jpg',
                    id: 3,
                    linkUrl: ''
                },
                {
                    title: 'womens',
                    imageUrl: 'https://i.ibb.co/TKd1rtq/woman-wearing-blue-shawl-lapel-suit-jacket-1036622.jpg',
                    size: 'large',
                    id: 4,
                    linkUrl: ''
                },
                {
                    title: 'mens',
                    imageUrl: 'https://i.ibb.co/41sdwN8/person-sitting-on-stairs-beside-sunglasses-1300550.jpg',
                    size: 'large',
                    id: 5,
                    linkUrl: ''
                }
            ] 
        };
    }

    render() {
        return (
            <div className='directory-menu'>
                {
                    this.state.sections.map(({id, ...otherSectionProps }) => (
                        <MenuItem key={id} {...otherSectionProps} />
                    ))
                }
            </div>
        )
    }
}

export default Directory;

