import React, { PropTypes, Component } from 'react';

export default class NotFound extends Component {
  render() {
    return (
      <div className={classnames('NotFound', className)} {...props}>
        <h1>
          404 <small>Not Found :(</small>
        </h1>
      </div>
    );
  }
}