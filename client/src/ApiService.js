const BASE_URL = 'http://localhost:3000';

const apiService = {};

apiService.fetchUserPlants = async (userId) => {
  return await fetch(`${BASE_URL}/mygarden/${userId}`, {
    method: 'GET',
    credentials: 'include',
    mode: 'cors',
    headers: { 'Content-Type': 'application/json' },
  })
  .then((res) => res.json())
  .catch((err) => console.log(err))
}

apiService.fetchPlantDetails = async (userId, plantId) => {
  return await fetch(`${BASE_URL}/mygarden/${userId}/${plantId}`, {
    method: 'GET',
    credentials: 'include',
    mode: 'cors',
    headers: { 'Content-Type': 'application/json' },
  })
  .then((res) => res.json())
  .catch((err) => console.log(err))
}

apiService.getAllPlants = async () => {
  return await fetch(`${BASE_URL}/getall`, {
    method: 'GET',
    credentials: 'include',
    mode: 'cors',
    headers: { 'Content-Type': 'application/json' },
  })
  .then((res) => res.json())
  .catch((err) => console.log(err))
}

apiService.updateWaterIn = async (userId, plantId, waterIn) => {
  return await fetch(`${BASE_URL}/mygarden/${userId}/${plantId}`, {
    method: 'PUT',
    credentials: 'include',
    mode: 'cors',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ userId: userId, waterIn: waterIn, plantId: plantId })
  })
  .then((res) => res.json())
  .catch((err) => console.log(err))
}

apiService.register = async (user) => {
  return await fetch(`${BASE_URL}/register`, {
    method: 'POST',
    credentials: 'include',
    mode: 'cors',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(user),
  })
    .then((res) => res.json())
    .catch((err) => console.log(err));
};

apiService.login = async (user) => {
  return await fetch(`${BASE_URL}/login`, {
    method: 'POST',
    credentials: 'include',
    mode: 'cors',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(user),
  })
    .then((res) => res.json())
    .catch((err) => console.log(err));
};

apiService.profile = async () => {
  return await fetch(`${BASE_URL}/me`, {
    method: 'GET',
    credentials: 'include',
    mode: 'cors',
    headers: { 'Content-Type': 'application/json' },
  })
    .then((res) => res.json())
    .catch((err) => console.log(err));
};

apiService.logout = async () => {
  return await fetch(`${BASE_URL}/logout`, {
    method: 'POST',
    credentials: 'include',
    mode: 'cors',
    headers: { 'Content-Type': 'application/json' },
  })
    .then((res) => res.json())
    .catch((err) => console.log(err));
};

export default apiService;
