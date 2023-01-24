import PropTypes from 'prop-types';
import { FilterStyled } from './Filter.style';
import { nanoid } from 'nanoid';

export const Filter = ({ click, filter }) => {
  const filterId = nanoid();
  return (
    <>
      <FilterStyled>
        <label htmlFor={filterId}>Find contacts by name</label>
        <input
          id={filterId}
          type="text"
          name="Find contacts by name"
          value={filter}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={click}
        />
      </FilterStyled>
    </>
  );
};

Filter.propTypes = {
  click: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
};
