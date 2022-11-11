import { useQuery } from "@tanstack/react-query";

//* helper *//
import { timeout } from "../helpers/timeout";

//* axios *//
import { githubApi } from "../api/githubApi";

//* interface *//
import { IIssue, State } from "../interfaces/issue";

interface Props {
  labels: string[];
  state?: State;
}

const getIssues = async (
  labels: string[],
  state?: State
): Promise<IIssue[]> => {
  await timeout(2000);

  const params = new URLSearchParams();
  if (state) params.append("state", state);
  if (labels.length > 0) {
    const labelString = labels.join(",");
    params.append("labels", labelString);
  }

  params.append("page", "1");
  params.append("per_page", "5");

  const { data } = await githubApi.get<IIssue[]>("/issues", { params });
  return data;
};

export const useIssues = ({ labels, state }: Props) => {
  const issuesQuery = useQuery(
    ["issues", { labels, state }],
    () => getIssues(labels, state),
    {
      staleTime: 1000 * 60 * 30,
    }
  );

  return {
    issuesQuery,
  };
};
