declare namespace AppCatalog {
  // TODO: rename this.
  export interface Catalog {
    id: string;
    name: string;
    description: string;
    version: string;
    iconURL?: string;
    url?: string;
    readmeURL?: string;
    author?: string;
  }
}
