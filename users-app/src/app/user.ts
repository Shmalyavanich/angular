export interface User {
  id?: string;
  name: string;
  password?: string;
  age?: string;
  date_of_birth: string;
  date_of_first_login: string;
  date_of_next_notification: string;
  information: string;
  authorized?: boolean;
}
