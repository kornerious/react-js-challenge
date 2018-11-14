import {Module} from "cerebral";
import * as sequences from "./sequences";
import * as jsonCards from "../stub/mock_data.json";

export default Module({
    state: {
        closeModal: false,
        data: {
            cards: jsonCards.default
        },
        forms: {
            cardEdit: {
                id: {
                    value: '',
                    isRequired: true,
                },
                first_name: {
                    value: '',
                    isRequired: false,
                },
                last_name: {
                    value: '',
                    isRequired: true,
                },
                email: {
                    value: '',
                    isRequired: true,
                },
                photo: {
                    value: '',
                    isRequired: false,
                },
                address: {
                    value: '',
                    isRequired: true,
                },
                team: {
                    value: '',
                    isRequired: false,
                },
            },
        },
    },
    signals: {
        /* cards */
        fillCardForm: sequences.fillCardForm,
        deleteCard: sequences.deleteCard,
        saveCard: sequences.saveCard,
        updateField: sequences.updateField,
    }
});
