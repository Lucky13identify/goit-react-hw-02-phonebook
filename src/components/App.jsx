import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import { ContactList } from './contactList/ContactList';
import { ContactForm } from './сontactForm/ContactForm';

// import

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
    name: '',
    number: '',
  };

  addItem = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  submitForm = e => {
    e.preventDefault();
    for (const item of this.state.contacts) {
      if (item.name === this.state.name) {
        console.log('YES');
        return;
      }
    }

    return this.setState(prevState => ({
      contacts: [
        ...prevState.contacts,
        {
          id: nanoid(),
          name: this.state.name,
          number: this.state.number,
        },
      ],
    }));
  };

  onDelete = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(itemId => itemId.id !== id),
    }));
  };

  render() {
    const filterArr = this.state.contacts.filter(contact => {
      return contact.name
        .toLowerCase()
        .includes(this.state.filter.toLocaleLowerCase());
    });

    return (
      <div
        className="main-div"
        // style={{
        //   // height: '100vh',
        //   display: 'flex',
        //   flexDirection: 'column',
        //   justifyContent: 'center',
        //   alignItems: 'center',
        //   fontSize: 40,
        //   color: '#010101',
        // }}
      >
        <h1>Phonebook</h1>
        <ContactForm submit={this.submitForm} addItem={this.addItem} />
        <h2>Contacts</h2>
        <ul>
          <ContactList arr={filterArr} deleteF={this.onDelete} />
        </ul>
      </div>
    );
  }
}
