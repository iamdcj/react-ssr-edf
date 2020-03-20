import express from "express";

declare global {
  interface Window {
    __GEP_COMPOSITION_DATA__: any;
  }
}

export interface ServerGet {
  req: express.Request;
  res: express.Response;
}

export interface Document {}
