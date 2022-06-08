import React from 'react';
import PropTypes from 'prop-types';

class NativeCards extends React.Component {
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
    } = this.props;

    return (
      <section className="preview-container">
        <div className="card">
          <div className="name-card">
            <h2 className="name-card-text">{ cardName }</h2>
            {
              cardTrunfo === true && <h4> Super Trunfo</h4>
            }
          </div>
          <div className="image-card">
            <img
              src={ cardImage }
              alt={ cardName }
              height="190"
              width="296"
            />
          </div>
          <div className="description-card">
            <p>{ cardDescription }</p>
          </div>
          <div className="attrib-card">
            <div className="attrib">
              <h3>Força: </h3>
              <h3>{cardAttr1}</h3>
            </div>
            <div className="attrib">
              <h3>Velocidade: </h3>
              <h3>{cardAttr2}</h3>
            </div>
            <div className="attrib">
              <h3>Inteligência: </h3>
              <h3>{cardAttr3}</h3>
            </div>
            <div className="attrib">
              <h3>Raridade: </h3>
              <h3>{cardRare}</h3>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

NativeCards.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
};

export default NativeCards;
