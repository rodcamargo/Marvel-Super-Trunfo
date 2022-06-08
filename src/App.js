import React from 'react';
// import { Route, Switch } from 'react-router-dom';
import Form from './components/Form';
import Card from './components/Card';
import FilterSavedCards from './components/FilterSavedCards';
import './App.css';
import CardDeck from './components/CardDeck';
import Header from './components/Header';

class App extends React.Component {
  state = {
    cardName: '',
    cardDescription: '',
    cardAttr1: '0',
    cardAttr2: '0',
    cardAttr3: '0',
    cardImage: '',
    cardRare: 'normal',
    cardTrunfo: false,
    hasTrunfo: false,
    isSaveButtonDisabled: true,
    deckCards: [],
    filterName: '',
    filterRare: '',
    filterTrunfo: false,
  };

  handleChange = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({ [name]: value }, this.buttonEnable);
  };

  // A função abaixo faz a validação do botão de Salvar no formulário, ativando conforme os valores forem todos inseridos de acordo com as regras do IF. E também declarada no handleChange.

  buttonEnable = () => {
    const { cardName, cardDescription, cardImage,
      cardRare, cardAttr1, cardAttr2,
      cardAttr3 } = this.state;

    const attrLimit = 90;
    const attrSum = Number(cardAttr1) + Number(cardAttr2) + Number(cardAttr3);
    const attrTotal = 210;

    if (
      cardName !== ''
      && cardDescription !== ''
      && cardImage !== ''
      && cardRare !== ''
      && cardAttr1 >= 0
      && cardAttr2 >= 0
      && cardAttr3 >= 0
      && cardAttr1 <= attrLimit
      && cardAttr2 <= attrLimit
      && cardAttr3 <= attrLimit
      && attrSum <= attrTotal
    ) {
      this.setState({ isSaveButtonDisabled: false });
    } else {
      this.setState({ isSaveButtonDisabled: true });
    }
  };

  // Função para salvar a carta criada e armazenar no deck de cartas.

  onSaveButtonClick = () => {
    const { cardName, cardDescription, cardAttr1,
      cardAttr2, cardAttr3, cardImage, cardRare,
      cardTrunfo, deckCards } = this.state;

    if (cardTrunfo === true) { // IF para criar validação Super Trunfo no Form.js
      this.setState({ hasTrunfo: true });
    }

    const card = {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
    };

    const arrayCard = deckCards;
    arrayCard.push(card);

    this.setState({
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
      isSaveButtonDisabled: true,
      deckCards: arrayCard,

    });
  }

  // Função abaixo criada e chamada para quando o botão Excluir for clicado.

  removeCards = (name) => {
    const { deckCards, hasTrunfo } = this.state;
    const newDeck = deckCards.filter((card) => card.cardName !== name);
    if (hasTrunfo) {
      this.setState({
        hasTrunfo: false,
        cardTrunfo: false,
      });
    }
    this.setState({ deckCards: newDeck });
  }

  // Função abaixo criada para realizar o filtro pelo nome da carta.

  filterCards = ({ target }) => {
    this.setState({ filterName: target.value });
  }

  // Função abaixo criada para realizar o filtro pela raridade da carta.

  checkRare = ({ target }) => {
    if (target.value === 'todas') {
      this.setState({
        filterRare: '',
      });
    } else {
      this.setState({
        filterRare: target.value,
      });
    }
  }

  render() {
    const { filterTrunfo } = this.state;

    return (
      <div>
        <Header />
        {/* <Route
          exact
          path="/"
          render={ () => (
            <Home
              { ...this.state }
              onInputChange={ this.handleChange }
              onSaveButtonClick={ this.onSaveButtonClick }
            />) }
        /> */}
        <div className="app-container">
          <section className="form-container">
            <Form
              { ...this.state }
              onInputChange={ this.handleChange }
              onSaveButtonClick={ this.onSaveButtonClick }
            />
          </section>

          <section className="card-container">
            <h3>Pré Visualização</h3>
            <Card { ...this.state } />
          </section>
        </div>
        <h2 className="title-page">Todas as Cartas</h2>
        <section className="filter-container">
          <FilterSavedCards
            filterTrunfo={ filterTrunfo }
            checkRare={ this.checkRare }
            filterCards={ this.filterCards }
            handleChange={ this.handleChange }
          />
        </section>
        <div className="page-2-container">
          <section className="deck-container">
            <CardDeck
              { ...this.state }
              removeCards={ this.removeCards }
            />
          </section>
        </div>
      </div>
    );
  }
}
export default App;