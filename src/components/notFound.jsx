import React from 'react';

import { withRouter, Link } from 'react-router-dom';

import Footer from '../components/footer.jsx';
import { RedButton } from '../assets/shared-styles.js';

const NotFoundPage = () => {

  return (
    <div>
      <h1>
        Page Not Found
      </h1>
      <h2>
        404
      </h2>
      <RedButton>
        <Link to="/">GO BACK HOME</Link>
      </RedButton>
      <Footer />
    </div>
  )
}

export default withRouter(NotFoundPage);
