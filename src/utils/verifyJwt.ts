import jwt_decode from 'jwt-decode';

export type JwtSubject = {
  exp: number;
  iat: number;
  sub: 'string';
  iss: any;
};

export const tokenIsExpired = async (accessToken: string) => {
  try {
    const decodeToken: JwtSubject = await jwt_decode(accessToken);
    console.log('deoce ', decodeToken);
    const today = new Date();
    if (decodeToken?.exp < today.getTime() / 1000) {
      return true;
    }
    return false;
  } catch (error) {
    console.log('error', error);
  }
};
