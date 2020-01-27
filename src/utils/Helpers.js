/**
 * @description Verificar se o valor é um valor numérico.
 */
export const isNumber = value => {
  if (typeof value === 'number') {
    return value - value === 0;
  }
  if (typeof num === 'string' && value.trim() !== '') {
    return Number.isFinite ? Number.isFinite(+value) : null;
  }
  return false;
};

/**
 * @description Verificar se o valor é um valor indefinido ou nulo.
 */
export const isNil = value => {
  return value === undefined || value === null;
};

/**
 * @description Verificar se o array está vazio.
 */
export const isEmpty = array => {
  return array instanceof Array && array.length === 0;
};

/**
 * @description Retorna a data chamada com uma representação sensível a região
 * de São Paulo.
 */
export const dateByTimeZoneSaoPaulo = date => {
  return new Date(date).toLocaleString('pt-BR', {
    timeZone: 'America/Sao_Paulo',
  });
};

/**
 * @description Retorna o array chamado ordenado pelo método de localeCompare.
 */
export const sortByLocaleCompare = (array, locale) => {
  const collection = [].concat(array);
  if (locale) {
    return collection.sort((a, b) => a[locale].localeCompare(b[locale]));
  }
  return collection.sort((a, b) => a.localeCompare(b));
};

/**
 * @description Retorna o valor da string chamada com a primeira palavra
 * convertida para maiúscula.
 */
export const capitalize = string => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

/**
 * @description Retorna o valor da string chamada com as iniciais do nome.
 */
export const getInitials = string => {
  return string
    .split(' ')
    .slice(0, 2)
    .map(letter => letter.charAt(0))
    .join('')
    .toUpperCase();
};

/**
 * @description Retorna o valor da string cortada se for maior do que 18
 * caracteres.
 */
export const truncate = string => {
  if (string.length > 18) {
    let slice = string.slice(0, 16);
    slice += '...';
    return slice;
  }
  return string;
};
