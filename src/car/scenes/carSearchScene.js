import CarSearchFormPage from '../components/carSearchFormPage';
import {connect} from 'react-redux';
import {reduxForm} from 'redux-form';

function mapStateToProps(state) {
  console.log('carSearchScene',state);
  const {forms:{carSearchForm}} = state;

  return {
    initialValues: carSearchForm && carSearchForm.values,
  };
}

const decoratedCarSearchFormPage = reduxForm({
  form: 'carSearchForm',
})(CarSearchFormPage);

module.exports = connect(
  mapStateToProps
)(decoratedCarSearchFormPage);
