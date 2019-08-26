import { RootState } from "../redux/rootReducer";
import  HeaderComponent  from "../сomponents/header/headerComponent";
import { connect } from "react-redux";
import { doLogout } from "../redux/logout/actions";

const mapStateToProps = (state: RootState) => ({
  isLog: state.login.isLog,
  data: state.login.data,
  
});

export default connect(
  mapStateToProps,
  { doLogout }
)(HeaderComponent);