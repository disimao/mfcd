// @flow
import * as React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Users from "./components/Users";

type Props = {};
export const AppRouter = (props: Props) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path={'/users'} component={Users} exact={true}/>
      </Switch>
    </BrowserRouter>
  );
};
