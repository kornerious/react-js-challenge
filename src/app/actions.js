import * as UIkit from 'uikit';
import * as api from '../api/index';

/**
 * Edit card
 * @param state props
 */
export function fillCardForm({state, props}) {
    const formData = state.get('forms.cardEdit');
    if (props.card) {
        formData.id.value = props.card.id;
        formData.first_name.value = props.card.first_name;
        formData.last_name.value = props.card.last_name;
        formData.email.value = props.card.email;
        formData.photo.value = props.card.photo;
        formData.address.value = props.card.address;
        formData.team.value = props.card.team;
    }
    state.set('forms.cardEdit', formData);
}

/**
 * Save card
 * @param state props
 */
export const saveCard = async ({state}) => {
    state.set('closeModal', false);
    const cardsArray = state.get('data.cards');
    const formData = state.get('forms.cardEdit');
    const sendData = {};
    sendData.id = formData.id.value ? formData.id.value : cardsArray.length + 1;
    sendData.first_name = formData.first_name.value;
    sendData.last_name = formData.last_name.value;
    sendData.email = formData.email.value;
    sendData.photo = formData.photo.value;
    sendData.address = formData.address.value;
    sendData.team = formData.team.value;

    await api.fetchSaveCard(sendData).then(() => {
        if (formData.id.value) {
            state.set('data.cards', cardsArray.map(item => (item.id === sendData.id ? sendData : item)));
        } else {
            state.push('data.cards', sendData);
        }
        UIkit.notification({
            message: `${sendData.first_name} ${sendData.last_name} ${formData.id.value ? 'card edited' : 'card added'}`,
            pos: 'top-right',
            timeout: 3000
        });
        state.set('closeModal', true);
    });
};

/**
 * delete card
 * @param state props
 */
export const deleteCard = ({state, props}) => {
    const cards = state.get('data.cards').filter(cards => cards.id !== props.card.id);
    state.set('data.cards', cards);
    UIkit.notification({
        message: `${props.card.first_name} ${props.card.last_name} card removed`,
        status: 'danger',
        pos: 'top-right',
        timeout: 3000
    });
};
