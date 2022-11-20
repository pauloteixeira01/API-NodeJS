import { Request, Response } from "express";

import { ListSpecificationsUseCase } from "./ListSpecificationsUseCase";

class ListSpecificationsController {
  constructor(private listSpecificationsUseCase: ListSpecificationsUseCase) {}

  handle(req: Request, res: Response): Response {
    const listSpecifications = this.listSpecificationsUseCase.execute();

    return res.status(200).json({
      error: false,
      data: listSpecifications,
    });
  }
}

export { ListSpecificationsController };
