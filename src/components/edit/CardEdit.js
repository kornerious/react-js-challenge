import React, {Component} from 'react';
import {connect} from "@cerebral/react";
import {state, signal} from "cerebral/tags";
import {form} from '@cerebral/forms';

class CardEdit extends Component {
    handleSaveCard = (event) => {
        event.preventDefault();
        this.props.saveCard();
    };

    handleUpdateField = (name, event) => {
        event.preventDefault();
        this.props.updateField({form: 'cardEdit', name, value: event.currentTarget.value});
    };

    render() {
        const {id, first_name, last_name, email, photo, address, team} = this.props.form;
        const form = this.props.form;

        return (
            <div>
                <button className="uk-modal-close-default" type="button" data-uk-close></button>

                <div className="uk-modal-header">
                    <h2 className="uk-modal-title">{id.value ? first_name.value : 'Create card'}</h2>
                </div>

                <div className="uk-modal-body">
                    <form>
                        <div className="uk-margin">
                            <input className="uk-input" type="text" placeholder="First name" onChange={(e) => {
                                this.handleUpdateField('first_name', e);
                            }} value={first_name.value}/>
                            {
                                !form.first_name.isValid && !form.first_name.isPristine &&
                                <div className={'error'}>{'Fill the field'}</div>
                            }
                        </div>
                        <div className="uk-margin">
                            <input className="uk-input" type="text" placeholder="Last name" onChange={(e) => {
                                this.handleUpdateField('last_name', e);
                            }} value={last_name.value}/>
                        </div>
                        <div className="uk-margin">
                            <input className="uk-input" type="text" placeholder="Email" onChange={(e) => {
                                this.handleUpdateField('email', e);
                            }} value={email.value}/>
                        </div>
                        <div className="uk-margin">
                            <input className="uk-input" type="text" placeholder="Photo URL" onChange={(e) => {
                                this.handleUpdateField('photo', e);
                            }} value={photo.value}/>
                        </div>
                        <div className="uk-margin">
                            <input className="uk-input" type="text" placeholder="Address" onChange={(e) => {
                                this.handleUpdateField('address', e);
                            }} value={address.value}/>
                        </div>
                        <div className="uk-margin">
                            <input className="uk-input" type="text" placeholder="Team" onChange={(e) => {
                                this.handleUpdateField('team', e);
                            }} value={team.value}/>
                        </div>
                    </form>
                </div>
                <div className="uk-modal-footer uk-text-right">
                    <button className="uk-button uk-button-default uk-modal-close" type="button">Cancel</button>
                    <button className="uk-button uk-button-primary uk-margin-left" onClick={this.handleSaveCard}>
                        Save
                    </button>
                </div>
            </div>
        );
    }
}

export default connect(
    {
        cards: state`data.cards`,
        form: form(state`forms.cardEdit`),
        updateField: signal`updateField`,
        saveCard: signal`saveCard`,
    },
    CardEdit
);
