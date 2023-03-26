import PropTypes from 'prop-types';

import { ContactItem } from 'components/ContactItem/ContactItem';


export const ContactList = ({ contacts, onDelete }) => {
    
    return (
        <ul>
            {contacts.map(({ name, id, number }) => (
                <ContactItem
                    key={id}
                    name={name} 
                    id={id}
                    number={number}
                    onDelete={onDelete}
                />
            ))}

        </ul>
    )
}

ContactList.propTypes = {
    onDelete: PropTypes.func.isRequired,
    contacts: PropTypes.arrayOf(
        PropTypes.exact({
            name: PropTypes.string.isRequired,
            number: PropTypes.string.isRequired,
            id: PropTypes.string.isRequired,
        }).isRequired
    ).isRequired
}