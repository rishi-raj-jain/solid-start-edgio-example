import { Router } from "@edgio/core";

export default new Router()
  .static("dist/public")
  .fallback(({ renderWithApp }) => {
    renderWithApp();
  });
