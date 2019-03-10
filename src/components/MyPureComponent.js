import React, { PureComponent } from 'react';

export class MyPureComponent extends PureComponent {
  render() {
    return (
      <h2>
        Element created with React.PureComponent ({this.constructor.name})
      </h2>
    )
  }
}