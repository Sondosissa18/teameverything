import React from "react";
import ProptTypes from "prop-types";
import { observer } from "mobx-react";
import { useStore } from "../store/useStore";
import { Route, Redirect } from "react-router-dom";

/*
 * ConnectedRoute is a component that renders Routes for you
 * It uses the auth store in redux to determine if a route should be rendered
 * or redirected else where based on the auth status
 */
function ConnectedRoute({ isProtected, redirectIfAuthenticated, component: ComponentToRender, ...rest }) {
  if (!ComponentToRender) {
    throw new Error("ConnectedRoute MUST have a prop named 'component'");
  }

  const store = useStore();

  if (redirectIfAuthenticated && store.isLoggedIn) {
    return (
      <Route
        {...rest}
        render={({ location }) => (
          <Redirect
            to={{
              pathname: "/profile",
              state: { from: location },
            }}
          />
        )}
      />
    );
  }

  if (isProtected === null || (isProtected && store.isLoggedIn)) {
    return <Route {...rest} render={(renderedProps) => <ComponentToRender {...renderedProps} />} />;
  }

  return (
    <Route
      {...rest}
      render={({ location }) => (
        <Redirect
          to={{
            pathname: `/`,
            state: { from: location },
          }}
        />
      )}
    />
  );
}

ConnectedRoute.defaultProps = {
  isProtected: null,
};
// https://reactjs.org/docs/typechecking-with-proptypes.html
ConnectedRoute.propTypes = {
  isProtected: ProptTypes.bool,
  redirectIfAuthenticated: ProptTypes.bool,
  component: ProptTypes.elementType.isRequired,
};

export default observer(ConnectedRoute);
