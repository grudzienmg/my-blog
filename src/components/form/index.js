import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

import Input from '../../atoms/Input';
import Button from '../../atoms/Button';
import Error from './styles/error';

class Form extends Component {
  state = {
    emailError: null,
    formValues: {
      name: '',
      email: '',
      body: '',
    },
  }

  handleInputChange = (value, fieldName) => {
    this.setState({
      formValues: {
        ...this.state.formValues,
        [`${fieldName}`]: value
      }
    });
  }

  isEmailValid = (value) => {
    const re = /\S+@\S+\.\S+/;

    return re.test(value);
  }

  canConfirm = () => {
    const { formValues } = this.state;

    return formValues.name && formValues.email && formValues.body;
  }

  handleClick = () => {
    const { formValues } = this.state;

    if (!this.isEmailValid(formValues.email)) {
      this.setState({emailError: 'Nieprawidłowy format'});
      return;
    }

    const payload = {
      postId: this.props.postId,
      id: Math.floor(Math.random() * 100),
      ...this.state.formValues,
    };

    this.props.addComment(this.props.postId, payload);

    this.setState({
      emailError: null,
      formValues: {
        name: '',
        email: '',
        body: '',
      }
    });
  }

  render() {
    const { emailError, formValues } = this.state;

    return (
      <Fragment>
        <div>Dodaj komentarz:</div>
        <Input
          label={'Imię'}
          onChange={e => this.handleInputChange(e.target.value, 'name')}
          value={formValues.name}
          />
        <Input
          label={'E-mail'}
          onChange={e => this.handleInputChange(e.target.value, 'email')}
          value={formValues.email}
        />
        {emailError && <Error>{emailError}</Error>}
        <Input
          label={'Treść'}
          textarea
          onChange={e => this.handleInputChange(e.target.value, 'body')}
          value={formValues.body}
        />
        <Button name={'Wyślij'} disabled={!this.canConfirm()} onClick={this.handleClick}/>
      </Fragment>
    );
  }
}

Form.propTypes = {
  addComment: PropTypes.func,
  postId: PropTypes.number,
};

export default Form;