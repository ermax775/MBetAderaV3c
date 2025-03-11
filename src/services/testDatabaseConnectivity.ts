import { supabase } from './supabaseClient';

export const testDatabaseConnectivity = async () => {
  try {
    const { data, error } = await supabase
      .from('parcels')
      .select('*');

    if (error) {
      console.error('Error fetching parcels:', error);
      return;
    }

    console.log('Fetched parcels:', data);
  } catch (error) {
    console.error('Unexpected error:', error);
  }
}; 