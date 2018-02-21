import React, { Component } from 'react';

class ResourceLink extends Component {
  render() {
    const {
      author,
      name,
      url
    } = this.props; 

    return (
        <p><a href={url} target="_blank"> {name}</a> | {author}</p>
    );
  }
}

export default ResourceLink;
