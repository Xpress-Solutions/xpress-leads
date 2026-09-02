/// <reference types="vite/client" />

declare module "*.json" {
  const value: import("../../../lib/brand").BrandIdentity;
  export default value;
}
