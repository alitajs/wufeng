export interface ErrorResponse {
  code: number;
  rawMessage: string;
  error?: string;
}

export interface RegisterResponse {
  createdAt: string;
  email: string;
  emailVerified: boolean;
  mobilePhoneNumber: string;
  mobilePhoneVerified: boolean;
  objectId: string;
  sessionToken: string;
  updatedAt: string;
  username: string;
}
