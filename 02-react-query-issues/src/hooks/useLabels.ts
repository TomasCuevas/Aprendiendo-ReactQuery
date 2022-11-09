import { useQuery } from "@tanstack/react-query";

//* helper *//
import { timeout } from "../helpers";

//* axios *//
import { githubApi } from "../api/githubApi";

//* interface *//
import { ILabel } from "../interfaces/label";

const getLabels = async (): Promise<ILabel[]> => {
  await timeout(2000);
  const { data } = await githubApi.get<ILabel[]>("/labels");
  return data;
};

export const useLabels = () => {
  const labelsQuery = useQuery(["labels"], getLabels, {
    staleTime: 1000 * 60 * 60,
  });

  return {
    labelsQuery,
  };
};
