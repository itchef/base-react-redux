import React, { PureComponent } from "react";
import PropTypes from "prop-types";

import "./index.scss";

export default class BaseComponent extends PureComponent {
    render() {
        const { count, onClick } = this.props;
        return (
            <div className="base__wrapper">
                <button onClick={() => onClick(count)}>Click Me</button><br/>
                Base Component created. Count: {count}
            </div>
        );
    }
}

BaseComponent.propTypes = {
  count: PropTypes.number,
  onClick: PropTypes.func,
};

BaseComponent.defaultProps = {
  count: 0,
  onClick: () => null,
};
