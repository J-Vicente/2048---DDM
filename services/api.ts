import { Platform } from 'react-native';
import axios from 'axios';

const getBaseUrl = () => {
  if (Platform.OS === 'android') {
    return 'http://192.168.2.153:3000/api'; 
  }
  return 'http://192.168.2.153:3000/api'; 
};

const BASE_URL =getBaseUrl();

interface NewRecordData {
  score:number;
  date:string;
  higherBlock:number;
  userName:string | null;
}


class RecordService {
  async cadastrar(recordData: NewRecordData) {
    try {
      const response = await fetch(`${BASE_URL}/records/newRecord`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(recordData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Erro no cadastro');
      }

      return data;
    } catch (error: any) {
      throw error;
    }
  }

async getByID(id: number): Promise<NewRecordData[]> {
    const response = await axios.get(`${BASE_URL}/records/${id}`);
    return response.data;
  }

  async getAll(): Promise<NewRecordData[]> {
      const response = await axios.get(`${BASE_URL}/records/`);
      return response.data;
    }

}

export const recordService = new RecordService();
