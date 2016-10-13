import CarSearchFormPage from '../components/carSearchFormPage';
import {reduxForm} from 'redux-form';

module.exports = reduxForm({
  form: 'carSearchForm'
})(CarSearchFormPage);
