import React, { Component } from 'react';

class TwitterHandle extends Component {
  render() {
    const {
      handle
    } = this.props; 

    let url = "https://twitter.com/" + handle;

    return (
        <a href={url} target="_blank" rel="noopener noreferrer"> @{handle}</a>
    );
  }
}

export default TwitterHandle;
