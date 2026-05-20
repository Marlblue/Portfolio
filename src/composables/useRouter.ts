import { router } from "../router";

export const useRouter = () => {
  const push = (path: string) => {
    router.push(path);
  };

  const replace = (path: string) => {
    router.replace(path);
  };

  const back = () => {
    router.back();
  };

  return {
    push,
    replace,
    back,
  };
};
