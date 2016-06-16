/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

	import { createStore } from 'redux';  //webpack sáhne pro redux do nainstalovaných NPM balíčků a zpřístupní z něj veřejnou funkci 'createStore'

	//tohle je úvodní stav reduceru, dáme do něj dva úkoly
	var initialState = ["První úkol", "Druhý úkol"];

	/** Toto je náš reducer - volá se pomocí dispatch(action)
	* @param Object state Aktuální state reduceru (současný stav)
	* @param Object action Akce na kterou jsme zavolali dispatch() (data změny + identifikace akce)
	* @return Object Vracíme nový stav
	*/
	function todo(state = initialState, action) { //zde využíváme 'defaultní hodnotu parametru' z ES6,
	                                              // použije se při prvním zavolání reduceru, kdy je state undefined
	  switch (action.type) {
	    case 'ADD':
	      //využijeme Spread ES6 vlastnost a vložíme pole s aktuálním stavem reduceru
	      // do nového pole s novým úkolem - změna je 'immutable'
	      return [...state, action.text]

	    case 'REMOVE':
	      //pomocí splice() odebereme prvek z pole, ktere jsem si nejprve zkopírovali
	      // pomocí ES6 Spread direktivy
	      var newState = [...state]
	      newState.splice(action.id, 1);
	      return newState;

	    default:
	      //Vracíme stav objektu bezezměny,
	      // akce patrně byla učena pro jiný reducer
	      return state
	  }
	}

	// Vytvoříme si náš Store objekt s jediným reducerem.
	// Můžeme na něm volat ouze 3 funkce:
	// - subscribe, getState - pro zjištění stavu aplikace
	// - dispatch - pro změnu stavu aplikace
	var store = createStore(todo);

	// Naše opravdu jednoduchá zobrazovací komponenta vypisuje do konzole a do stránky
	// aktuální stav aplikace
	store.subscribe(function() {
	  var state = store.getState();
	  console.log("Nový stav:", state);
	  document.body.innerHTML = "Aktuální stav:<br/>- " + state.join("<br/>- ")
	})

	// Toto je jediný způsob jak měnit stav aplikace. Objekt který vkládáme
	// se jmenuje akce a obsahuje identifikaci a data potřebná pro provedení akce.
	store.dispatch({ type: 'ADD', text: "Třetí úkol" }); //vložíme dva úkoly
	store.dispatch({ type: 'ADD', text: "Čtvrtý úkol" });
	store.dispatch({ type: 'REMOVE', id: 1 }); //odstraníme druhý úkol


/***/ }
/******/ ]);