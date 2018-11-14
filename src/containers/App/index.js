import React, {Component} from 'react';
import {connect} from "@cerebral/react";
import * as UIkit from 'uikit';
import {signal, state} from "cerebral/tags";
import CardsList from '../../components/list/CardsList';
import CardEdit from '../../components/edit/CardEdit';

class App extends Component {

    componentDidMount() {
        this.cardEditModal = UIkit.modal("#modal-center");
        this.forceUpdate();
    }

    componentWillReceiveProps(state) {
        if (state.closeModal) {
            this.cardEditModal.hide();
        }
    }

    handleCreateCard = () => {
        this.props.fillCardForm();
        this.cardEditModal.show();
    };

    render() {
        return (
            <div className="uk-container uk-container-expand uk-margin-top uk-margin-bottom">
                <p>
                    <button className="uk-button uk-button-primary uk-align-center uk-margin" onClick={() => {
                        this.handleCreateCard();
                    }}>Add card to list
                    </button>
                </p>
                <hr/>
                <div id="modal-center" className="uk-flex-top" data-uk-modal>
                    <div className="uk-modal-dialog uk-modal-body uk-margin-auto-vertical">
                        <CardEdit/>
                    </div>
                </div>
                <CardsList cardEditModal={this.cardEditModal}/>
            </div>
        );
    }
}

export default connect(
    {
        closeModal: state`closeModal`,
        fillCardForm: signal`fillCardForm`,
    },
    App
);
