import axios from 'axios';
import { CommentType, PostType, UserType } from '../../types';

// Define the base URL for the API
const API_BASE_URL = 'https://jsonplaceholder.typicode.com';

// Fetch posts from the API
export const fetchPosts = async (): Promise<{ data: PostType[] }> => {
  try {
    const response = await axios.get<PostType[]>(`${API_BASE_URL}/posts`);
    return { data: response.data }; // Return the data in a structured format
  } catch (error) {
    throw new Error('Failed to fetch posts'); // Throw an error if the request fails
  }
};

// Fetch comments from the API
export const fetchComments = async (): Promise<{ data: CommentType[] }> => {
    try {
        const response = await axios.get<CommentType[]>(`${API_BASE_URL}/comments`);
        return { data: response.data }; // Return the data in a structured format
    } catch (error) {
        throw new Error('Failed to fetch comments'); // Throw an error if the request fails
    }
};

// Fetch users from the API
export const fetchUsers = async (): Promise<{ data: UserType[] }> => {
    try {
        const response = await axios.get<UserType[]>(`${API_BASE_URL}/users`);
        return { data: response.data }; // Return the data in a structured format
    } catch (error) {
        throw new Error('Failed to fetch users'); // Throw an error if the request fails
    }
};

