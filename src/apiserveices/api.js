const API_BASE_URL = 'http://localhost:5000';
import axios from 'axios';

export const Apis = {
  createClub(formData) {
    const data = new FormData();
    data.append('name', formData.name);
    data.append('email', formData.email);
    data.append('password', formData.password);
    data.append('banner', formData.banner);
    data.append('logo', formData.logo);

    return axios.post(`${API_BASE_URL}/clubs`, data, {
      headers: {
        // 'Content-Type': 'multipart/form-data',
      },
    }).then(response => response.data);
  },
};
