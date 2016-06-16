import { createStore } from 'redux';  //webpack sáhne pro redux do nainstalovaných NPM balíčků a zpřístupní z něj veřejnou funkci 'createStore'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import appReducers from './reducers';

//Zobrazovací komponenta
import App from './components/App';

//tohle je úvodní stav reduceru, dáme do něj dva úkoly
export const initialState = ["První úkol", "Druhý úkol"];

// Vytvoříme si náš Store objekt s jediným reducerem.
// Můžeme na něm volat ouze 3 funkce:
// - subscribe, getState - pro zjištění stavu aplikace
// - dispatch - pro změnu stavu aplikace
// export const store = createStore(todo);

export const store = createStore(appReducers);

//Zobrazovací komponenta je vložena do elementu #root

/** Odebrání položky TODO listu
* @param Number Id položky k odstranění
*/
var removeItem = function(id) {
  store.dispatch({ type: 'REMOVE', id: id }); //odstraníme druhý úkol
}

/** Přidání položky TODO listu
* @param String Text
*/
var addItem = function(text) {
  store.dispatch({ type: 'ADD', text: text });
}

render(
  <Provider store = {store}>
    <App />
  </Provider>,
  document.getElementById('app')
)

// Toto je jediný způsob jak měnit stav aplikace. Objekt který vkládáme
// se jmenuje akce a obsahuje identifikaci a data potřebná pro provedení akce.
store.dispatch({ type: 'ADD', text: "Třetí úkol" }); //vložíme dva úkoly
store.dispatch({ type: 'ADD', text: "Čtvrtý úkol" });
store.dispatch({ type: 'REMOVE', id: 1 }); //odstraníme druhý úkol
