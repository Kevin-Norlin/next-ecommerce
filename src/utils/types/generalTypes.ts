// Interface to defining object of response functions
export interface ResponseFuncs {
    GET?: Function
    POST?: Function
    PUT?: Function
    DELETE?: Function
  }
  
  // Interface to define User model on the frontend
  export interface UserType {
    _id?: number;
    name: string;
    email: string;
    password: string;
    roles: [string];
    
  }

