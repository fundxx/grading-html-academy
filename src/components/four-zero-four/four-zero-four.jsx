import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../common/button/button';
import PageHeading from '../common/page-heading/page-heading';
import PageSubtext from '../common/page-subtext/page-subtext';

const FourZeroFour = () => {
  return (
    <>
      <PageHeading>
        <h2>Error 404. Page not found</h2>
      </PageHeading>
      <PageSubtext>
        This way doesn't exist
      </PageSubtext>
      <Link to={`/`}>
        <Button>
          Return to main page
        </Button>
      </Link>
    </>
  );
};

export default FourZeroFour;
