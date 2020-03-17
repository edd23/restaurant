import React, { Component, useState } from 'react';
import { Form, Button, Checkbox} from 'semantic-ui-react'

export default class ItemForm extends Component {
  state = {
    name: this.props.name,
    description: this.props.description,
    price: this.props.price,
    meal: this.props.meal,
    meals: [
      { key: "b", text: "Breakfast", value: "breakfast" },
      { key: "l", text: "Lunch", value: "lunch" },
      { key: "d", text: "Dinner", value: "dinner" }
    ]
  }
  clearForm() {
    this.setState({
      name: "",
      description: "",
      price: null,
      meal: 'select',
    })
  }
  handleSubmit = e => {
    console.log(this.props.id);
    console.log(this.state)
    console.log('id should be here')
    e.preventDefault();
    if (this.props.id) {
      this.props.updateItem(this.state, this.props.id)
      this.props.toggleForm()
    } else {
      this.props.addItem(this.state)
    }
    this.clearForm()
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  flipBoolean = e => {
    this.setState({
      [e.target.id] : e.target.checked
    })
  }
  handleSelector = e => {
    this.setState({
      [e.target.name] : e.target.options
    })
  }


  render() {
    const { meals } = this.state
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Input
          label="name"
          name="name"
          placeholder="new dish"
          required
          onChange={this.handleChange}
          value={this.state.name}
        />
        <Form.Input
          label="Description"
          name="description"
          placeholder="dish description"
          required
          onChange={this.handleChange}
          value={this.state.description}
        />
        <Form.Input
          label="Price"
          name="price"
          placeholder="price"
          required
          onChange={this.handleChange}
          value={this.state.price}
        />
        <Form.Select
          fluid
          label="Meal"
          name="meal"
          options={meals}
          placeholder="Which menu?"
          onChange={this.handleSelector}
          value={meals.value}
        />
        />
        <Button type="submit">Submit</Button>
      </Form>
    );
  }

}