import { connect } from "react-redux";
import PlanetSearchForm from "./PlanetSearchForm";
import { withRouter } from "react-router-dom";
import { bindActionCreators } from "redux";
import { searchPlanets } from './../../actions/search';


const mapDispatchToProps = dispatch => bindActionCreators({
  searchPlanets: text => searchPlanets(text)
}, dispatch);

const mapStateToProps = state => ({
  searchInfo: state.search.results,
  inProgress: state.search.inProgress,
  error: state.search.error,
  loginInfo: state.login
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(PlanetSearchForm));
