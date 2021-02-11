import { User } from 'modules/auth/models/User.model';

export interface UserState {
  user: User | null;
}
