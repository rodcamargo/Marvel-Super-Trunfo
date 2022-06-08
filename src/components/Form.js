import React from 'react';
import PropTypes from 'prop-types';

class Form extends React.Component {
  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      hasTrunfo,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick,
    } = this.props;

    return (
      <section className="form-component">
        <h3>Adicionar Nova Carta</h3>
        <form>
          <label htmlFor="name">
            Nome
            <br />
            <input
              className="input"
              name="cardName"
              data-testid="name-input"
              type="text"
              id="name"
              value={ cardName }
              onChange={ onInputChange }
            />
          </label>
          <br />
          <label htmlFor="description">
            Descrição
            <br />
            <textarea
              name="cardDescription"
              data-testid="description-input"
              type="textarea"
              id="description"
              value={ cardDescription }
              onChange={ onInputChange }
            />
          </label>
          <br />
          <label htmlFor="attr1">
            Força
            <br />
            <input
              className="input"
              name="cardAttr1"
              data-testid="attr1-input"
              type="number"
              id="attr1"
              value={ cardAttr1 }
              onChange={ onInputChange }
            />
          </label>
          <br />
          <label htmlFor="attr2">
            Velocidade
            <br />
            <input
              className="input"
              name="cardAttr2"
              data-testid="attr2-input"
              type="number"
              id="attr2"
              value={ cardAttr2 }
              onChange={ onInputChange }
            />
          </label>
          <br />
          <label htmlFor="attr3">
            Inteligência
            <br />
            <input
              className="input"
              name="cardAttr3"
              data-testid="attr3-input"
              type="number"
              id="attr3"
              value={ cardAttr3 }
              onChange={ onInputChange }
            />
          </label>
          <br />
          <label htmlFor="image-input">
            Imagem
            <br />
            <input
              className="input"
              name="cardImage"
              data-testid="image-input"
              type="text"
              id="image-input"
              value={ cardImage }
              onChange={ onInputChange }
            />
          </label>
          <br />
          <label htmlFor="rare-input">
            Raridade
            <br />
            <select
              className="input-rare"
              name="cardRare"
              data-testid="rare-input"
              id="rare-input"
              value={ cardRare }
              onChange={ onInputChange }
            >
              <option value="normal">normal</option>
              <option value="raro">raro</option>
              <option value="muito raro">muito raro</option>
            </select>
          </label>
          <br />
          {/* Requisito 7 - Abaixo uma Condicional Ternária para criar validação Super Trunfo */}
          {
            !hasTrunfo ? (
              <label className="trump-check" htmlFor="trunfo-input">
                <input
                  name="cardTrunfo"
                  data-testid="trunfo-input"
                  type="checkbox"
                  id="trunfo-input"
                  checked={ cardTrunfo }
                  onChange={ onInputChange }
                />
                Super Trybe Trunfo
              </label>
            )
              : <p>Você já tem um Super Trunfo em seu baralho</p>
          }
          <br />
          <button
            data-testid="save-button"
            type="button"
            disabled={ isSaveButtonDisabled }
            onChange={ onSaveButtonClick }
            onClick={ onSaveButtonClick }
          >
            Salvar
          </button>
        </form>
      </section>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};

export default Form;
