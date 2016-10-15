import CarSearchFormPage from '../components/carSearchFormPage';
import {reduxForm} from 'redux-form';
import validator from '../../shared/validators/syncValidator';

module.exports = reduxForm({
  form: 'carSearchForm',
  validator,
})(CarSearchFormPage);
