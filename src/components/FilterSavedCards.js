import React from 'react';
import PropTypes from 'prop-types';

class FilterSavedCards extends React.Component {
  render() {
    const { filterCards, checkRare, handleChange, filterTrunfo } = this.props;
    return (
      <section>
        <h3>Filtro de Busca</h3>
        <form>
          <label htmlFor="name-filter">
            <input
              className="input"
              id="name-filter"
              data-testid="name-filter"
              type="text"
              placeholder="Nome da carta"
              onChange={ filterCards }
              disabled={ filterTrunfo }
            />
          </label>
          <select
            className="input-rare"
            data-testid="rare-filter"
            onChange={ checkRare }
            placeholder="Raridade"
            disabled={ filterTrunfo }
          >
            <option>todas</option>
            <option>normal</option>
            <option>raro</option>
            <option>muito raro</option>
          </select>
          <label className="trump-check" htmlFor="filterTrunfo">
            <input
              name="filterTrunfo"
              id="filterTrunfo"
              checked={ filterTrunfo }
              onChange={ handleChange }
              type="checkbox"
              data-testid="trunfo-filter"
            />
            Super Trunfo
          </label>
        </form>
      </section>

    );
  }
}

export default FilterSavedCards;

FilterSavedCards.propTypes = {
  handleChange: PropTypes.func.isRequired,
  checkRare: PropTypes.func.isRequired,
  filterCards: PropTypes.func.isRequired,
  filterTrunfo: PropTypes.bool.isRequired,
};
