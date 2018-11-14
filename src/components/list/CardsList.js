import React, {Component} from 'react';
import {connect} from "@cerebral/react";
import {state, signal} from "cerebral/tags";

class CardsList extends Component {
    handleEditCard = (card) => {
        this.props.fillCardForm({card});
        this.props.cardEditModal.show();
    };

    handleDeleteCard = (card) => {
        this.props.deleteCard({card});
    };

    render() {
        const {cards} = this.props;

        return (
            <div className="uk-child-width-expand@s uk-text-center" data-uk-grid>
                {cards.map((card) =>
                    <div key={card.id} className="uk-width-1-4@m uk-grid-item-match">

                        <div className="uk-card uk-card-default uk-card-body" style={{position: 'relative'}}>
                            <span className="edit-card" data-uk-icon="icon: pencil"
                                  onClick={() => {
                                      this.handleEditCard(card)
                                  }}></span>
                            <span className="delete-card" data-uk-icon="icon: close"
                                  onClick={() => {
                                      this.handleDeleteCard(card)
                                  }}></span>

                            <div className="uk-panel">
                                <img className="uk-margin-remove-adjacent card-image" src={card.photo} alt=""/>
                                <div className="uk-list info-block">
                                    <p><b>Name: </b> {card.first_name} {card.last_name}</p>
                                    <p><b>Email: </b> {card.email}</p>
                                    <p><b>Adress: </b> {card.address}</p>
                                    <p><b>Team: </b>{card.team}</p>
                                </div>
                            </div>

                        </div>
                    </div>
                )}
            </div>
        );
    }
}

export default connect(
    {
        cards: state`data.cards`,
        deleteCard: signal`deleteCard`,
        fillCardForm: signal`fillCardForm`,
    },
    CardsList
);
