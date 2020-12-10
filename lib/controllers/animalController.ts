// lib/controllers/nodes.controller.ts
import { Request, Response } from "express";

export class AnimalController {
  public index(req: Request, res: Response) {
    res.json({
      message: "Hello boi",
    });
  }
}