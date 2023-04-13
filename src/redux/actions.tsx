import * as actions from './actionsType';

export function addSearchValue() {
  return { type: actions.SEARCH_VALUE_ADD };
}

export function requestCard() {
  return { type: actions.REQUEST_CARD };
}

export function receiveCard() {
  return { type: actions.RECEIVE_CARD };
}

export function failGettingCard() {
  return { type: actions.FAIL_GETTING_CARD };
}
