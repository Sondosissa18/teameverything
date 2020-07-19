import React from "react";
import ProptTypes from "prop-types";
import { observer } from "mobx-react";
import { Route, Redirect } from "react-router-dom";
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
function ConnectedRoute({ isProtected, redirectIfAuthenticated, component: ComponentToRender, allowIf, ...rest }) {
  if (!ComponentToRender) {
    throw new Error("ConnectedRoute MUST have a prop named 'component'");
  }
  // https://react-redux.js.org/api/hooks#useselector
  const store = useStore();
  const redirectTo = REDIRECT_TO[store.user.role] || REDIRECT_TO.other;
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
  if (isProtected === null || (isProtected && store.isLoggedIn)) {
    if (!store.isAtLeast(allowIf)) {
      return (
        <Route
          {...rest}
          render={(renderedProps) => <ErrorPage {...renderedProps} status={403} message="Forbidden" />}
        />
      );
    }
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
