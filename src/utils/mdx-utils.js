import { api } from '../services/api';
import supabase from '../config/supabaseClient';

export const getPosts = async () => {
  try {
    const response = await api.get('/posts');
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar posts:', error);
    throw error;
  }
};

export const getPostById = async (id) => {
  try {
    let postId = id;

    const { data: post } = await supabase
      .from('posts')
      .select('*')
      .eq('id', id)
      .single();

    if (!post) {
      postId = 1;
    }

    const { data: foundPost } = await supabase
      .from('posts')
      .select('*')
      .eq('id', postId)
      .single();

    return foundPost || {}; 
  } catch (error) {
    console.error(`Error fetching post with id ${id}:`, error);
    return {}; // Em caso de erro, retornar um objeto vazio
  }
};



