import { useQuery } from "@tanstack/react-query";

//* axios *//
import { githubApi } from "../api/githubApi";
import { timeout } from "../helpers/timeout";

//* interface *//
import { ILabel } from "../interfaces/label";

const getLabels = async () => {
  await timeout(2000);
  const { data } = await githubApi.get<ILabel[]>("/labels");
  return data;
};

export const useLabels = () => {
  const labelsQuery = useQuery(["labels"], getLabels, {
    staleTime: 1000 * 60 * 60,
    placeholderData: [
      {
        id: 739777675,
        node_id: "MDU6TGFiZWw3Mzk3Nzc2NzU=",
        url: "https://api.github.com/repos/facebook/react/labels/Component:%20Component%20API",
        name: "Component: Component API",
        color: "d4c5f9",
        default: false,
      },
      {
        id: 2281766624,
        node_id: "MDU6TGFiZWwyMjgxNzY2NjI0",
        url: "https://api.github.com/repos/facebook/react/labels/Component:%20Scheduling%20Profiler",
        name: "Component: Scheduling Profiler",
        color: "1dc3d6",
        default: false,
      },
    ],
    // initialData: [],
  });

  return {
    labelsQuery,
  };
};
