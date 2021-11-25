declare module '*.yaml' {
  const content: {
    de: Record<string, unknown>;
    en: Record<string, unknown>;
  };
  export default content;
}

declare module '*.svg';

