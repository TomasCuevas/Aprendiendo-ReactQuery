import { useQuery } from "@tanstack/react-query";

//* helper *//
import { timeout } from "../helpers";

//* axios *//
import { githubApi } from "../api/githubApi";

//* interface *//
import { IIssue } from "../interfaces/issue";

const getIssue = async (issueNumber: number): Promise<IIssue> => {
  await timeout(2000);
  const { data } = await githubApi.get<IIssue>(`/issues/${issueNumber}`);
  return data;
};

const getIssueComments = async (issueNumber: number): Promise<IIssue[]> => {
  await timeout(2000);
  const { data } = await githubApi.get<IIssue[]>(
    `/issues/${issueNumber}/comments`
  );
  console.log(data);
  return data;
};

export const useIssue = (issueNumber: number) => {
  const issueQuery = useQuery(
    [`issue/${issueNumber}`],
    () => getIssue(issueNumber),
    {
      staleTime: 1000 * 60 * 30,
    }
  );

  const issueQueryComments = useQuery(
    [`issue/${issueNumber}/comments`],
    () => getIssueComments(issueNumber),
    {
      enabled: issueQuery.data !== undefined,
      staleTime: 1000 * 60 * 30,
    }
  );

  return {
    issueQuery,
    issueQueryComments,
  };
};
