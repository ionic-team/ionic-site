declare global {
  interface Window {
    API_URL: string;
    DASHBOARD_URL: string;
    _hsq: any[];
    c: (cat, lbl, el?, val?) => void;
    grecaptcha?: any;
  }
}

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
