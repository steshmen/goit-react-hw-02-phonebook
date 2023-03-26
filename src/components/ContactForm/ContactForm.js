import { nanoid } from 'nanoid';
import { Component } from 'react';
import PropTypes from 'prop-types';

import css from './ContactForm.module.css'

export class ContactForm extends Component {
    state = {
        name: '',
        number: '',
        id: '',
    }
    static propTypes = {
        contacts: PropTypes.arrayOf(
            PropTypes.shape({
                name: PropTypes.string.isRequired,
                id: PropTypes.string.isRequired,
                number: PropTypes.string.isRequired,
            }).isRequired
        ).isRequired
    }

    nameId = nanoid();
    numberId = nanoid();
    
    handleSubmit = (e) => {
        e.preventDefault();
        const { contacts } = this.props;
        const { name } = this.state;
        const result = contacts.some(contact => contact.name === name);
        if (result) {
            alert(`${name} is already in contacts`);
            return;
        }

        this.props.onSubmit(this.state);
        this.reset();
    }

    handleChange = (e) => {
        const { value, name } = e.currentTarget;
        this.setState({ [name]: value, id: nanoid() });
    }

    reset = () => {
        this.setState({ name: '', number: '', id: '' })
    }

    render() {
        const { name, number } = this.state;

        return (
            <form className={css.form} onSubmit={this.handleSubmit}>

                <label className={css.name_titel} htmlFor={this.nameId}>Name</label>
                <input
                    type="text"
                    className={css.name_input}
                    name="name"
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
                    id={this.nameId}
                    value={name}
                    onChange={this.handleChange}
                />

                <label className={css.name_titel} htmlFor={this.numberId}>Number</label>
                <input
                    className={css.name_input}
                    type="tel"
                    name="number"
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required
                    id={this.numberId}
                    value={number}
                    onChange={this.handleChange}
                />

                <button
                    className={css.form_btn}
                    type="submit">Add contact</button>
            </form>
        );
    }
}