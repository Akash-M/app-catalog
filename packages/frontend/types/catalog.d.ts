declare namespace AppCatalog {
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
