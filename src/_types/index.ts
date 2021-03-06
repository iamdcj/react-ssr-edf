import express from "express";

declare global {
  interface Window {
    __GEP_COMPOSITION_DATA__: any;
  }
}

export type Request = express.Request;
export type Response = express.Response;

export interface ServerGet {
  req: Request;
  res: Response;
}

export interface Document {}

export interface Fragment {
  content: Content;
  template: Template;
  id: string;
}

interface Content {
  image?: any;
  title?: string;
  inlineEditMarkup?: string;
  textAlignment: string;
  showBar?: boolean;
  showBreadcrumb?: boolean;
  showOverlay?: boolean;
}

export interface Template {
  id: string;
}

export interface Region {
  id: string;
  fragments: any[];
  extendedProperties: any;
  regions: Region[];
}

export interface Head {
  helmet: any;
  data: JSON;
  scriptTags: string;
  styles: any;
}

export interface Document extends Head {
  markup: string;
}

export interface Component {
  title?: string;
  text?: string;
}

export interface Metadata {}

export interface Composition {
  template: Template;
  info: any;
  metadata: any;
  regions: Region[];
}

export interface Application {
  loading: boolean;
  status: string;
  menuActive: boolean;
  footerVisible: boolean;
  polyfillsLoaded: boolean;
}
