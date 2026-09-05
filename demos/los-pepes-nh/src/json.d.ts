declare module "*.json" {
  const value: {
    colors: {
      background: string;
      foreground: string;
      brand: string;
      accent: string;
      surface: string;
      muted: string;
    };
  };
  export default value;
}
