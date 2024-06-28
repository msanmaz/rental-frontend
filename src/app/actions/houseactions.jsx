'use server';

import { revalidatePath } from 'next/cache';
import { cookies } from 'next/headers';

const API_BASE_URL = "http://localhost:3000";

export const addHouse = async (formData) => {
  const houseData = {
    title: formData.get('title'),
    description: formData.get('description'),
    address: formData.get('address'),
    cityName: formData.get('cityName'),
    propertyType: formData.get('propertyType'),
    rooms: parseInt(formData.get('rooms'), 10),
    bathrooms: parseInt(formData.get('bathrooms'), 10),
    amenities: formData.get('amenities')?.split(',').map(item => item.trim()) || [],
    rentalDetail: formData.get('listingType') === 'rent' ? {
      rent: parseFloat(formData.get('rent')),
      availableFrom: formData.get('availableFrom'),
      availableTo: formData.get('availableTo')
    } : undefined,
    saleDetail: formData.get('listingType') === 'sale' ? {
      price: parseFloat(formData.get('price')),
      available: true // Assuming a property for sale is always available
    } : undefined,
  };

  const token = cookies().get('token')?.value;

  try {
    const response = await fetch(`${API_BASE_URL}/api/protected/houses`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
      body: JSON.stringify(houseData),
    });

    const data = await response.json();

    if (!response.ok) {
      if (data.error && Array.isArray(data.error)) {
        const errorMessages = data.error.map(err => `${err.path}: ${err.msg}`).join('; ');
        throw new Error(errorMessages);
      } else {
        throw new Error(data.message || 'Failed to add house');
      }
    }

    revalidatePath('/admin/houses');
    return { success: true, message: "House added successfully!", data: data };
  } catch (error) {
    console.error('Error adding house:', error);
    return { success: false, message: error.message };
  }
};