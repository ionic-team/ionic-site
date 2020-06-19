/**
 * An (incomplete) representation of the user model for the API
 */
export interface UserInfo {
  sub: string;
  name: string;
  preferred_username: string;
  picture: string;
  email: string;
  email_verified: boolean;
}
