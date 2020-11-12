export function getCurrentLocation() {
  console.info('Getting grigri current location');
  const url = 'http://grigriapp.herokuapp.com/custom/currentInfo';
  return fetch(url)
    .then((response) => response.json())
    .catch((error) => console.error(error));
}

export function getPoints() {
  console.info('Getting points');
  const url = 'http://grigriapp.herokuapp.com/points/';
  return fetch(url)
    .then((response) => response.json())
    .catch((error) => console.error(error));
}

export function getHistoric() {
  console.info('Getting historic');
  const url = 'http://grigriapp.herokuapp.com/custom/historic';
  return fetch(url)
    .then((response) => response.json())
    .catch((error) => console.error(error));
}

export function getUsers() {
  console.info('Getting users');
  const url = 'http://grigriapp.herokuapp.com/users/';
  return fetch(url)
    .then((response) => response.json())
    .catch((error) => console.error(error));
}
