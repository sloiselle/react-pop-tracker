/**
 * React Static Boilerplate
 * https://github.com/kriasoft/react-static-boilerplate
 *
 * Copyright © 2015-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, { PropTypes } from 'react';
import Header from '../../components/Header/Header.js';
import Nav from '../../components/Nav/Nav.js';
import PopContainer from '../../components/PopContainer/PopContainer.js';
import Footer from '../../components/Footer/Footer.js';
import s from './styles.css';
import { title, html } from './index.md';

class HomePage extends React.Component {

  static propTypes = {
    articles: PropTypes.array.isRequired,
  };

  componentDidMount() {
    document.title = title;
  }

  render() {
    return (
      <main>
        <Header />
        <Nav />
        <PopContainer />
        <Footer />
      </main>
    );
  }

}

export default HomePage;
