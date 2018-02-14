import React, { Component } from 'react';

class ResourceLink extends Component {
  render() {
    return (
        <p><a href={this.props.url} target="_blank"> {this.props.name}</a> | {this.props.author}</p>
    );
  }
}

export default ResourceLink;
