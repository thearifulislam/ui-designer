declare module 'firebase/app' {
  import firebase from 'firebase/app';
  export * from 'firebase/app';
  export { firebase as default };
}

declare module 'firebase/database' {
  export * from 'firebase/database';
} 