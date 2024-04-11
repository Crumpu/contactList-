import { Component } from 'react';
import { nanoid } from 'nanoid';
import FormEdit from './components/FormEdit/FormEdit';
import AddForm from './components/AddForm/AddForm';
import ContactList from './components/ContactList/ContactList';
import './App.css';

export class App extends Component {
  state = {
    contacts: [
      {
        fName: 'Dohn',
        lName: 'Doe',
        telNumber: '+380660000000',
        email: 'johndoe@gmail.com',
        id: nanoid(),
      },
      {
        fName: 'Jane',
        lName: 'Doe',
        telNumber: '+380660000001',
        email: 'janedoe@gmail.com',
        id: nanoid(),
      },
    ],
  };

  addContact = (contact) => {
    contact.id = nanoid();
    this.setState((state) => {
      const contacts = [...state.contacts, contact];
      return contacts;
    });
  };

  changeColor = () => {
    const color = Math.floor(Math.random() * 255);
    return color;
  };

  bgColor = () => {
    return {
      backgroundColor: `rgb(${this.changeColor()}, ${this.changeColor()}, ${this.changeColor()})`,
    };
  };

  render() {
    return (
      <>
        <FormEdit />
        <AddForm onSubmit={this.addContact} />
        <ContactList
          contacts={this.state.contacts}
          toChangeColor={this.bgColor}
        />
      </>
    );
  }
}

export default App;
