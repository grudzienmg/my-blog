import React, { Component, Fragment } from 'react';

import Input from '../../atoms/Input';
import Button from '../../atoms/Button';

class Form extends Component {
  state = {
    formValues: {
      name: '',
      email: '',
      body: '',
    }
  }

  handleInputChange = (value, fieldName) => {
    this.setState({
      formValues: {
        ...this.state.formValues,
        [`${fieldName}`]: value
      }
    });
  }

  canConfirm = () => {
    const { formValues } = this.state;

    return formValues.name && formValues.email && formValues.body;
  }

  render() {
    return (
      <Fragment>
        <div>Dodaj komentarz:</div>
        <Input label={'Imię'} onChange={e => this.handleInputChange(e.target.value, 'name')} />
        <Input label={'E-mail'} onChange={e => this.handleInputChange(e.target.value, 'email')} />
        <Input label={'Treść'} textarea onChange={e => this.handleInputChange(e.target.value, 'body')} />
        <Button name={'Wyślij'} disabled={!this.canConfirm()}/>
      </Fragment>
    );
  }
}

export default Form;