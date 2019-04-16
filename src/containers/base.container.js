import { connect } from "react-redux";
import Base from "../components/base";
import { inc } from "../actions";

const mapStateToProps = (state) => ({ count: state.base.count });
const mapDispatchToProps = (dispatch) => ({
   onClick: (count) => dispatch(inc(count)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Base);
