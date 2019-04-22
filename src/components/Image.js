import React, { Component } from 'react';

class Image extends Component {
    render() {
        const {src, alt} = this.props.image;
        return (
            <img src={src} alt={alt} onClick={() => this.props.clickFunction(src)} />
        );
    }
}

export default Image;