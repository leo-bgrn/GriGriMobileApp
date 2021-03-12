export function getCurrentLocation() {
  console.info('Getting grigri current location');
  const url = 'http://grigriapp.herokuapp.com/custom/currentInfo';
  console.log('Get Current Location : ', url);
  return fetch(url)
    .then((response) => response.json())
    .then((response) => {
      console.log('res : ', response);
      return response;
    })
    .catch((error) => console.error(error));
}

export function getPoints() {
  console.info('Getting points');
  const url = 'http://grigriapp.herokuapp.com/points/';
  console.log('Get points : ', url);
  return fetch(url)
    .then((response) => response.json())
    .then((response) => {
      console.log('res : ', response);
      return response;
    })
    .catch((error) => console.error(error));
}

export function getHistoric() {
  console.info('Getting historic');
  const url = 'http://grigriapp.herokuapp.com/custom/historic';
  console.log('Get Historic : ', url);
  return fetch(url)
    .then((response) => response.json())
    .then((response) => {
      console.log('res : ', response);
      return response;
    })
    .catch((error) => console.error(error));
}

export function getUsers() {
  console.info('Getting users');
  const url = 'http://grigriapp.herokuapp.com/users/';
  console.log('Get Users : ', url);
  return fetch(url)
    .then((response) => response.json())
    .then((response) => {
      console.log('res : ', response);
      return response;
    })
    .catch((error) => console.error(error));
}

export function postNewLocation(userId) {
  console.info('Setting new grigri location');
  const url = 'http://grigriapp.herokuapp.com/grigriLocation/new';
  console.log('Post new location : ', url, userId);
  return fetch(url, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      userId: userId,
    }),
  }).catch((error) => console.error(error));
}
