declare namespace Catalog {
  export interface App {
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
