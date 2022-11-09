import { useQuery } from "@tanstack/react-query";

//* helper *//
import { timeout } from "../helpers/timeout";

//* axios *//
import { githubApi } from "../api/githubApi";

//* interface *//
import { IIssue } from "../interfaces/issue";

const getIssues = async (): Promise<IIssue[]> => {
  await timeout(2000);
  const { data } = await githubApi.get<IIssue[]>("/issues");
  return data;
};

export const useIssues = () => {
  const issuesQuery = useQuery(["issues"], getIssues, {
    staleTime: 1000 * 60 * 30,
  });

  return {
    issuesQuery,
  };
};
