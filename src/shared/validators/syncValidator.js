const validate = values => {
  const errors = {}
  console.log(values);
  if (!values.name) {
    errors.name = 'Required'
  } else if (values.username.length > 15) {
    errors.name = 'Must be 15 characters or less'
  }
  if (!values.email) {
    errors.email = 'Required'
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address'
  }
  return errors
};

export default validate