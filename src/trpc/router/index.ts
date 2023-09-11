import { mergeRouters, router } from "../trpc";

export const appRouter = router({
  todo: mergeRouters(todoRouter),
});
