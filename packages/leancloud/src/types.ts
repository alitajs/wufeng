import { User } from 'leancloud-storage';

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

export type LogInType = 'account' | 'phone' | 'email';
export interface LogInProps {
  username?: string;
  password?: string;
  phone?: string;
  email?: string;
  type: LogInType;
}

export interface RegisterProps {
  username: string;
  password: string;
  phone?: string;
  email?: string;
}
export interface CloudResponse {
  attributes: any;
  changed: any;
  cid: string;
  createdAt: string;
  id: string;
  updatedAt: any;
  _escapedAttributes: any;
  _flags: any;
  _hasData: any;
  _hashedJSON: any;
  _isCurrentUser: true;
  _opSetQueue: any;
  _pending: any;
  _previousAttributes: any;
  _serverData: any;
  _sessionToken: string;
  _silent: any;
}
