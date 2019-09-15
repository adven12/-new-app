import { RootState } from "../redux/rootReducer";
import  HeaderComponent  from "../сomponents/header/headerComponent";
import { connect } from "react-redux";
import { doLogin } from "../redux/login/actions";


const mapStateToProps = (state: RootState) => ({
  isLog: state.login.isLog,
  data: state.login.data,
  basketBooks: state.products.dataArr,
});

export default connect(
  mapStateToProps,
  { doLogin }
)(HeaderComponent);