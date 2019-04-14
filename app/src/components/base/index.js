import React, { PureComponent } from "react";
import Style from "./index.scss";

export default class BaseComponent extends PureComponent {
    render() {
        return (
            <div className={Style.base__wrapper}>
                Base Component created
            </div>
        );
    }
}
