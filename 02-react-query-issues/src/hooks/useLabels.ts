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
  });

  return {
    labelsQuery,
  };
};
