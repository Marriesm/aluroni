/// <reference types="vite/client" />
declare module "*.json"{
    const value:Array<{title: string}>;
    export default value;
}
