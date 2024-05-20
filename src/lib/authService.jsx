const API_BASE_URL = 'http://localhost:3000';

export const login = async (email, password) => {
  try {
    const response = await fetch(`${API_BASE_URL}/user/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
      credentials: 'include',
    });

    const data = await response.json();
    if (!response.ok) {
      throw new Error(data.error || 'Login failed. Please try again.');
    }
    return data;
  } catch (error) {
    throw new Error(error.message || 'An error occurred. Please try again.');
  }
};

export const logout = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/user/logout`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
    });

    const data = await response.json();
    if (!response.ok) {
      throw new Error(data.error || 'Logout failed. Please try again.');
    }
    return data;
  } catch (error) {
    throw new Error(error.message || 'An error occurred. Please try again.');
  }
};
