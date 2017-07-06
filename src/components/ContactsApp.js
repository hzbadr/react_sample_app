import React, { Component } from 'react';

import LoaderHOC from '../HOC/LoaderHOC';


class ContactsApp extends Component {
  render() {
    return (
      <div> This is a contacts App!</div>
    );
  }
}

export default LoaderHOC(ContactsApp);
