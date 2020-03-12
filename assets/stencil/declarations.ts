/**
 * An (incomplete) representation of the user model for the API
 */
export interface ApiUser {
  has_enterprise_email: boolean;
  email: string;
  teams: any[];
  verified: boolean;
  id: number;
  signup_source: string;
  super_user: boolean;
  is_sso: boolean;
  has_studio: boolean;
  username: string;
  trial_purpose: string;
  name: string;
  avatars: {
    small: string,
    medium: string,
    large: string
  };
  [key:string]: any;
}