declare module "@/assets/assets" {
  export const assets: { [key: string]: string };
  export const products: any[];
}

declare module "../assets/assets" {
  export const assets: { [key: string]: string };
  export const products: any[];
}
 
 // wildcard for different relative import paths that point to the same file
 declare module "*/assets/assets" {
   export const assets: { [key: string]: any };
   export const products: any[];
 }

declare module "react-toastify" {
  export const toast: any;
  export const ToastContainer: any;
  const _default: any;
  export default _default;
}

declare module "next/font/google" {
  // keep a permissive type to avoid build errors when importing fonts
  export function Geist(opts?: any): any;
  export function Geist_Mono(opts?: any): any;
}
