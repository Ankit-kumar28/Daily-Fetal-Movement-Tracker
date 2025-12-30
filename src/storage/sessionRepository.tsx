import AsyncStorage from '@react-native-async-storage/async-storage';
import { FetalSession } from '../types/session';

const KEY = 'FETAL_SESSIONS';

export const SessionRepository = {
  async getAll(): Promise<FetalSession[]> {
    const raw = await AsyncStorage.getItem(KEY);
    if (!raw) return [];
    return JSON.parse(raw).sort(
      (a: FetalSession, b: FetalSession) => b.createdAt - a.createdAt
    );
  },

  async save(session: FetalSession) {
    const existing = await this.getAll();
    await AsyncStorage.setItem(KEY, JSON.stringify([session, ...existing]));
  },
};
