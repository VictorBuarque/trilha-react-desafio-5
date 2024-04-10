import { api } from '../services/api';

export const getPosts = async () => {
  try {
    const response = await api.get('/posts');
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar posts:', error);
    throw error;
  }
};

//TODO: BUSCAR UM POST EM ESPECIFICO.
export const getPostBySlug = async (id) => {
  try {
    const { data } = await api.get(`/posts/{id}`);
    console.log(id);
    return data || {};
  } catch (error) {
    console.error(`Error fetching post with id ${id}:`, error);
    return {};
  }
};
