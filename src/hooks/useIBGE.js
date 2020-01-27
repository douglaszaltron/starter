import { useEffect, useState } from 'react';
import collect from 'collect.js';

const CIDADES = require('../assets/ibge/cidades.json');
const ESTADOS = require('../assets/ibge/estados.json');

/**
 * @description Ordenar uma lista por LocaleCompare.
 * @param {array} items
 * @param {string} [value]
 * @returns {array} Array contendo a lista em ordem alfabética ordenado pelo value.
 */
function sortByLocaleCompare(items, value) {
  const collection = [].concat(items);
  if (value) {
    collection.sort((a, b) => a[value].localeCompare(b[value]));
  } else {
    collection.sort((a, b) => a.localeCompare(b));
  }
  return collection;
}

/**
 * @description Método para buscar as cidades vinculadas ao estado.
 * @returns {array} Objeto de promessa contendo um array com os objetos da cidade.
 */
const useCidade = estado_id => {
  const [cidades, setCidades] = useState([]);

  useEffect(() => {
    const collection = collect(CIDADES.items)
      .where('estado_id', estado_id)
      .all();

    setCidades(sortByLocaleCompare(collection, 'nome'));
  }, [estado_id]);

  return cidades;
};

/**
 * @description Método para buscar todos os estados.
 * @returns {promise} Objeto de promessa contendo um array com os objetos do estado.
 */
const useEstado = () => {
  const [estados, setEstados] = useState([]);

  useEffect(() => {
    const collection = collect(ESTADOS.items).all();
    setEstados(sortByLocaleCompare(collection, 'nome'));
  }, []);

  return estados;
};

/**
 * @description Método para buscar o id do estado pelo id da cidade.
 */
const getEstadoByCidade = cidade_id => {
  const { estado_id } = collect(CIDADES.items).firstWhere('id', cidade_id);
  return estado_id;
};

export { useCidade, useEstado, getEstadoByCidade };
