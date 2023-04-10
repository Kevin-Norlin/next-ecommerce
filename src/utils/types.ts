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
    email: string;
    password: string;
    roles: [string];
  }

  export interface ProductType {
    name: string,
    imgUrl: string,
    desc: string,
    inStock: boolean
  }