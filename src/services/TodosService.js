import api from './api';

export default {
  fetchTodos() {
    return api().get('/todos');
  },
};
