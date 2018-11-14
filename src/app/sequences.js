import {set} from 'cerebral/operators';
import {props, state} from 'cerebral/tags';
import {resetForm} from '@cerebral/forms/operators';
import * as actions from './actions';

export const updateField = [
    set(state`forms.${props`form`}.${props`name`}.value`, props`value`),
    set(state`forms.${props`form`}.${props`name`}.isPristine`, false)
];

export const fillCardForm = [
    resetForm(state`forms.cardEdit`),
    actions.fillCardForm
];

export const deleteCard = actions.deleteCard;

export const saveCard = actions.saveCard;
