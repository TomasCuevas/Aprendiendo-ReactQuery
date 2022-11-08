import { useQuery } from "@tanstack/react-query";

//* axios *//
import { githubApi } from "../api/githubApi";

//* interface *//
import { ILabel } from "../interfaces/label";

const getLabels = async () => {
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
