const BASE_URL = 'http://localhost:3000';

const apiService = {};

apiService.fetchUserPlants = (userId) => {
  return fetch(`${BASE_URL}/mygarden/${userId}`, {
    method: 'GET',
    credentials: 'include',
    mode: 'cors',
    headers: { 'Content-Type': 'application/json' },
  })
  .then((res) => res.json())
  .catch((err) => console.log(err))
}

apiService.fetchPlantDetails = (userId, plantId) => {
  return fetch(`${BASE_URL}/mygarden/${userId}/${plantId}`, {
    method: 'GET',
    credentials: 'include',
    mode: 'cors',
    headers: { 'Content-Type': 'application/json' },
  })
  .then((res) => res.json())
  .catch((err) => console.log(err))
}

apiService.getAllPlants = () => {
  return fetch(`${BASE_URL}/getall`, {
    method: 'GET',
    credentials: 'include',
    mode: 'cors',
    headers: { 'Content-Type': 'application/json' },
  })
  .then((res) => res.json())
  .catch((err) => console.log(err))
}

apiService.updateWaterIn = (userId, plantId, waterIn) => {
  return fetch(`${BASE_URL}/mygarden/${userId}/${plantId}`, {
    method: 'PUT',
    credentials: 'include',
    mode: 'cors',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ userId: userId, waterIn: waterIn, plantId: plantId })
  })
  .then((res) => res.json())
  .catch((err) => console.log(err))
}

apiService.register = (user) => {
  return fetch(`${BASE_URL}/register`, {
    method: 'POST',
    credentials: 'include',
    mode: 'cors',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(user),
  })
    .then((res) => res.json())
    .catch((err) => console.log(err));
};

apiService.login = (user) => {
  return fetch(`${BASE_URL}/login`, {
    method: 'POST',
    credentials: 'include',
    mode: 'cors',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(user),
  })
    .then((res) => res.json())
    .catch((err) => console.log(err));
};

apiService.profile = () => {
  return fetch(`${BASE_URL}/me`, {
    method: 'GET',
    credentials: 'include',
    mode: 'cors',
    headers: { 'Content-Type': 'application/json' },
  })
    .then((res) => res.json())
    .catch((err) => console.log(err));
};

apiService.logout = () => {
  return fetch(`${BASE_URL}/logout`, {
    method: 'POST',
    credentials: 'include',
    mode: 'cors',
    headers: { 'Content-Type': 'application/json' },
  })
    .then((res) => res.json())
    .catch((err) => console.log(err));
};

export default apiService;
