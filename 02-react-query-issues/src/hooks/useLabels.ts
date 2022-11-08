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
    refetchOnWindowFocus: false,
  });

  return {
    labelsQuery,
  };
};
