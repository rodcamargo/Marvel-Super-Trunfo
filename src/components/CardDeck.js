import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';
import originalCards from '../assets/originalCards';
import NativeCards from './NativeCards';

class CardDeck extends React.Component {
  render() {
    const { deckCards, removeCards, filterName, filterRare, filterTrunfo } = this.props;
    return (
      <>
        {/* Requisito 10, 11 e 12- Utilizado o .filter de super trunfo, .filter de nome e filter de raridade antes do .map para realizar a função filtro pelo nome e raridade e supertrunfo */}
        { deckCards
          .filter((card) => (filterTrunfo
            ? card.cardTrunfo : deckCards))
          .filter((card) => card.cardName.includes(filterName))
          .filter((card) => (
            (filterRare.length > 0 ? card.cardRare === filterRare : card)))
          .map((card) => (
            <div key={ card.cardName }>
              <Card { ...card } />
              {/* Requisito 9 - Botão de excluir. Obs. A key foi colocada dentro da tag div */}
              <button
                type="button"
                data-testid="delete-button"
                onClick={ () => removeCards(card.cardName) }
              >
                Excluir
              </button>
            </div>
          ))}
        { originalCards
          .filter((el) => (filterTrunfo
            ? el.cardTrunfo : deckCards))
          .filter((el) => el.cardName.includes(filterName))
          .filter((el) => (
            (filterRare.length > 0 ? el.cardRare === filterRare : el)))
          .map((el) => (
            <div key={ el.cardName }>
              <NativeCards { ...el } />
            </div>
          ))}
      </>
    );
  }
}

export default CardDeck;

CardDeck.propTypes = {
  removeCards: PropTypes.func.isRequired,
  filterName: PropTypes.string.isRequired,
  filterRare: PropTypes.string.isRequired,
  filterTrunfo: PropTypes.bool.isRequired,
  deckCards: PropTypes.arrayOf(
    PropTypes.object,
  ).isRequired,

};
