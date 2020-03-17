import React, {Component} from 'react'
import { Button, Item } from 'semantic-ui-react'
import ItemForm from "./ItemForm"

export default class Todo extends Component {
  state = {
    showForm: false
  }
  showForm(){
    return(
      <ItemForm
      updateItem={this.props.updateItem}
      toggleForm={this.toggleForm}
      id={this.props.id}
      name={this.props.name}
      description={this.props.description}
      price={this.props.price}
      meal={this.props.meal}
      />
    )
  }
  showItem(){
    return (
      <>
        <Item.Content>
          <Item.Header as="a">{this.props.name}</Item.Header>
          <Item.Description>{this.props.description}</Item.Description>
        </Item.Content>
      </>
    );
  }
  toggleForm = (e) => {
    this.setState({
      showForm: !this.state.showForm
    })
  }

  delete = id => {
    this.props.deleteItem(this.props.id)
  }

  render(){
    return (
      <>
        <Item.Group>
          <Item>
            {this.state.showForm ? this.showForm() : this.showItem()}
            <Button onClick={this.toggleForm}>
              {this.state.showForm ? "hide form" : "edit"}
            </Button>
            <Button onClick={this.delete}>delete</Button>
            
            </Item>
        </Item.Group>
      </>
    );
  }

}
