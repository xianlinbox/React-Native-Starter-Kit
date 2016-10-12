import CarSearchFormPage from '../components/carSearchFormPage';
import {reduxForm} from 'redux-form';

// apply connectReduxForm() and include synchronous validation
module.exports = reduxForm({
  form: 'carSearchForm',                // the name of your form and the key to where your form's state will be mounted
  fields: ['name', 'address', 'phone'], // a list of all your fields in your form
})(CarSearchFormPage);
