import React, { Component } from 'react';
import ImageHoverOptions from './imageHoverOptions'

class GalleryImage extends Component {

    constructor(props) {
        super(props);

        this.state = {
            ...this.props,
        }
    }

    render() {
        return (
            <div style={{
                width: '100%',
                height: '100%',
                background: `no-repeat center /cover`,
                transition: 'all .3s',
                backgroundImage: `url(${this.state.imgSrc})`
            }}>
                <ImageHoverOptions
                    deleteImage={this.deleteImage}
                    editImage={this.editImage} />
            </div>
        )
    }

    editImage = (imageFile) => {
        this.setState({ imgSrc: URL.createObjectURL(imageFile) });
        this.props.editImage(this.state.id, imageFile)
    }

    deleteImage = () => {
        this.props.deleteImage(this.state.id);
    }
}

export default GalleryImage;