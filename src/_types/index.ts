import express from "express";

export interface ServerGet {
  req: express.Request;
  res: express.Response;
}

export interface Document {}
