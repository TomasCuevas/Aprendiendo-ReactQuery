//* helper *//
import { timeout } from "../helpers/timeout";

//* axios *//
import { githubApi } from "../api/githubApi";

//* interface *//
import { IIssue } from "../interfaces/issue";
import { useQuery } from "@tanstack/react-query";

const getIssues = async (): Promise<IIssue[]> => {
  await timeout(2000);
  const { data } = await githubApi.get("/issues");
  console.log(data);
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
