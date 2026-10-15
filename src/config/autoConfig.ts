{/* Налаштування Microsoft 365 */}
{/* SPA (Single Page Application) — односторінкові сайти */}
import type { Configuration, PopupRequest } from '@azure/msal-browser';

export const msalConfig: Configuration = {
  auth: {
    clientId: 'f8cdef31-a31e-4b4a-93e4-5f571e91255a',
    authority: 'https://login.microsoftonline.com/common',
    redirectUri: window.location.origin,
  },
  cache: {
    cacheLocation: 'sessionStorage',
  },
};

export const loginRequest: PopupRequest = {
  scopes: ['User.Read'],
};
