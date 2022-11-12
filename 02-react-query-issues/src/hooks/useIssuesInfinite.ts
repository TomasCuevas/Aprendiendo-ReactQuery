import { useInfiniteQuery } from "@tanstack/react-query";

//* helpers *//
import { timeout } from "../helpers";

//* axios *//
import { githubApi } from "../api/githubApi";

//* interface *//
import { IIssue, State } from "../interfaces/issue";

interface Props {
  labels: string[];
  state?: State;
  pageParam?: number;
}

const getIssues = async ({
  labels,
  pageParam = 1,
  state,
}: Props): Promise<IIssue[]> => {
  await timeout(2000);

  const params = new URLSearchParams();
  if (state) params.append("state", state);
  if (labels.length > 0) {
    const labelString = labels.join(",");
    params.append("labels", labelString);
  }

  params.append("page", pageParam.toString());
  params.append("per_page", "5");

  const { data } = await githubApi.get<IIssue[]>("/issues", { params });
  return data;
};

export const useIssueInfinite = ({ state, labels }: Props) => {
  const issuesQuery = useInfiniteQuery(
    ["issues", "infinite", { state, labels, page: 1 }],
    ({ pageParam }) => getIssues({ pageParam, state, labels })
  );

  return {};
};
