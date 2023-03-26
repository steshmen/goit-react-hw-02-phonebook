import PropTypes from 'prop-types';

import css from './ContactItem.module.css'

export const ContactItem = ({ name, id, number, onDelete }) => {
    return (
         <li className={css.list_item}>
            <p className={css.list_title}>{name}: {number}</p>
            <button
                className={css.list_btn}
                type="button"
                onClick={() => onDelete(id)}
            >
                Delete
            </button>
        </li>
    )
}

ContactItem.propTypes = {
    name: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    onDelete: PropTypes.func.isRequired
}