// @flow
import * as React from 'react';
import {Route} from 'react-router-dom';

type Props = {
  component: React.ReactNode,
};

const SimpleLayout = ({component: Component, ...props}: Props) => {
  return (
    <Route
      {...props}
      render={matchProps => (
        <div>
          <h1>Common Header</h1>
          <div style={{minHeight: 500}}>
            <Component {...matchProps} {...props} />
          </div>
          <h1>Common Footer</h1>
        </div>
      )}
    />
  );
};

export default SimpleLayout;
