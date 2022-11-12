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
}

interface QueryProps {
  pageParam?: number;
  queryKey: (string | Props)[];
}

const getIssues = async ({
  pageParam = 1,
  queryKey,
}: QueryProps): Promise<IIssue[]> => {
  await timeout(2000);

  const [_first, _second, args] = queryKey;
  const { labels, state } = args as Props;

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
    getIssues
  );

  return {
    issuesQuery,
  };
};
