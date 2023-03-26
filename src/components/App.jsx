import { Component } from 'react';
import css from './App.module.css';

import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  deleteContact = id => {
    this.setState(({ contacts }) => ({
      contacts: contacts.filter(contact => contact.id !== id),
    }));
  };

  addContact = contact => {
    this.setState(({ contacts }) => ({
      contacts: [contact, ...contacts],
    }));
  };

  changeFilter = e => {
    const { value } = e.currentTarget;
    this.setState({ filter: value });
  };

  getFilterContact = () => {
    const { contacts, filter } = this.state;
    const filterNormalize = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filterNormalize)
    );
  };

  render() {
    const { contacts, filter } = this.state;
    const filteredContatcs = this.getFilterContact();

    return (
      <div className={css.container}>
        <h1 className={css.phonebook_title}>Phonebook</h1>
        <ContactForm onSubmit={this.addContact} contacts={contacts} />

        <h2 className={css.contacts_titel}>Contacts</h2>
        <Filter value={filter} onChange={this.changeFilter} />
        <ContactList
          contacts={filteredContatcs}
          onDelete={this.deleteContact}
        />
      </div>
    );
  }
}
