import { useQuery } from "@tanstack/react-query";

//* helper *//
import { timeout } from "../helpers/timeout";

//* axios *//
import { githubApi } from "../api/githubApi";

//* interface *//
import { IIssue, State } from "../interfaces/issue";

interface Props {
  selectedLabel: string[];
  state?: State;
}

const getIssues = async (
  labels: string[],
  state?: State
): Promise<IIssue[]> => {
  await timeout(2000);

  const params = new URLSearchParams();
  if (state) params.append("state", state);

  const { data } = await githubApi.get<IIssue[]>("/issues", { params });
  return data;
};

export const useIssues = ({ selectedLabel, state }: Props) => {
  const issuesQuery = useQuery(
    ["issues", { selectedLabel, state }],
    () => getIssues(selectedLabel, state),
    {
      staleTime: 1000 * 60 * 30,
    }
  );

  return {
    issuesQuery,
  };
};
