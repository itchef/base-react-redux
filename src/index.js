import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";

import { store, rootElement } from "./store";
import Base from "./containers/base.container";

render(
    <Provider store={store}>
        <Base />
    </Provider>
    , rootElement);
