
import React from "react";
import { Outlet } from "react-router-dom";
// import React from 'react'
// import { Route, Redirect } from 'react-router-dom'

// function ProtectedRoutes() {
//   return (
//     <div>ProtectedRoutes</div>
//   )
// }

// export default ProtectedRoutes

function ProtectedRoutes ({component: Component, authed, ...rest}) {
    return (
      <Route
        {...rest}
        render={(props) => authed === true
          ? <Component {...props} />
          : <Redirect to={{pathname: '/Signin', state: {from: props.location}}} />}
      />
    )
  }
  export default ProtectedRoutes;