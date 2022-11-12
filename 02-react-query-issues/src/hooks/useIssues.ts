import { useState } from "react";
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
  page?: number;
}

const getIssues = async ({
  labels,
  page = 1,
  state,
}: Props): Promise<IIssue[]> => {
  await timeout(2000);

  const params = new URLSearchParams();
  if (state) params.append("state", state);
  if (labels.length > 0) {
    const labelString = labels.join(",");
    params.append("labels", labelString);
  }

  params.append("page", page.toString());
  params.append("per_page", "5");

  const { data } = await githubApi.get<IIssue[]>("/issues", { params });
  return data;
};

export const useIssues = ({ labels, state }: Props) => {
  const [page, setPage] = useState<number>(1);

  const issuesQuery = useQuery(
    ["issues", { labels, state, page }],
    () => getIssues({ labels, page, state }),
    {
      staleTime: 1000 * 60 * 30,
    }
  );

  const nextPage = () => {
    if (issuesQuery.data?.length! < 5) return;

    setPage((prev) => prev + 1);
  };

  const previousPage = () => {
    if (page > 1) setPage((prev) => prev - 1);
  };

  return {
    // properties
    issuesQuery,

    // getters
    page,

    // methods
    nextPage,
    previousPage,
  };
};
