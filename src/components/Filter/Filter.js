import PropTypes from 'prop-types';

import css from './Filter.module.css';

export const Filter = ({ value, onChange }) => {
    return (
        <>
            <p className={css.titel}>Find contacts by name</p>
            <input
                className={css.input}
                value={value}
                name="filter"
                onChange={onChange}
            />
        </>
    )
}

Filter.propTypes = {
    onChange: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired
}