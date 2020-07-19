import React from "react";
import ProptTypes from "prop-types";
import { observer } from "mobx-react";
import { Route, Redirect } from "react-router-dom";
import isEmpty from "lodash/isEmpty";
import { useStore } from "../store/useStore";
import ErrorPage from "./Errorpage";
const REDIRECT_TO = {
  student: "home",
  recruiter: "recview",
  other: "home",
};
/*
 * ConnectedRoute is a component that renders Routes for you
 * It uses the auth store in redux to determine if a route should be rendered
 * or redirected else where based on the auth status
 */
function ConnectedRoute({
  isProtected,
  redirectIfAuthenticated,
  component: ComponentToRender,
  allowIf,
  ...rest
}) {
  if (!ComponentToRender) {
    throw new Error("ConnectedRoute MUST have a prop named 'component'");
  }

  const store = useStore();
  const routeIsProtectedForSure = isProtected || !isEmpty(allowIf);
  const redirectTo = REDIRECT_TO[store.user.role] || REDIRECT_TO.other;

  // I shouldnt be on this page if im logged in
  if (redirectIfAuthenticated && store.isLoggedIn) {
    return (
      <Route
        {...rest}
        render={({ location }) => (
          <Redirect
            to={{
              pathname: `/${redirectTo}`,
              state: { from: location },
            }}
          />
        )}
      />
    );
  }

  // if this route is protected and the user is logged in and they have permissions.. allow it
  if (routeIsProtectedForSure && store.isLoggedIn && store.isAtLeast(allowIf)) {
    return (
      <Route
        {...rest}
        render={(renderedProps) => <ComponentToRender {...renderedProps} />}
      />
    );
  }

  // somehow i think this is redundant...
  if (isProtected === null) {
    return (
      <Route
        {...rest}
        render={(renderedProps) => <ComponentToRender {...renderedProps} />}
      />
    );
  }

  return (
    <Route
      {...rest}
      render={({ location }) => (
        <Route
          {...rest}
          render={(renderedProps) => (
            <ErrorPage {...renderedProps} status={403} message="Forbidden" />
          )}
        />
      )}
    />
  );
}
ConnectedRoute.defaultProps = {
  isProtected: null,
  allowIf: "other",
};
// https://reactjs.org/docs/typechecking-with-proptypes.html
ConnectedRoute.propTypes = {
  isProtected: ProptTypes.bool,
  redirectIfAuthenticated: ProptTypes.bool,
  component: ProptTypes.elementType.isRequired,
  allowIf: ProptTypes.string,
};
export default observer(ConnectedRoute);
