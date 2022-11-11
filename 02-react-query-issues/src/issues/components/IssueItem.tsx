import { useNavigate } from "react-router-dom";
import { useQueryClient } from "@tanstack/react-query";

//* icons *//
import { FiInfo, FiMessageSquare, FiCheckCircle } from "react-icons/fi";

//* hook method *//
import { getIssue, getIssueComments } from "../../hooks";

//* interface *//
import { IIssue } from "../../interfaces/issue";

interface Props {
  issue: IIssue;
}

export const IssueItem: React.FC<Props> = ({ issue }) => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const prefetchData = () => {
    queryClient.prefetchQuery([`issue/${issue.number}`], () =>
      getIssue(Number(issue.number))
    );

    queryClient.prefetchQuery([`issue/${issue.number}/comments`], () =>
      getIssueComments(Number(issue.number))
    );
  };

  const preSetData = () => {
    queryClient.setQueryData([`issue/${issue.number}`], issue, {
      updatedAt: new Date().getTime() + 1000 * 60 * 30,
    });
  };

  return (
    <div
      onClick={() => navigate(`/issues/issue/${issue.number}`)}
      className="card mb-2 issue"
      // onMouseEnter={prefetchData}
      onMouseEnter={preSetData}
    >
      <div className="card-body d-flex align-items-center">
        {issue.state === "open" ? (
          <FiInfo size={30} color="green" />
        ) : (
          <FiCheckCircle size={30} color="purple" />
        )}

        <div className="d-flex flex-column flex-fill px-2">
          <span>{issue.title}</span>
          <span className="issue-subinfo">
            #{issue.number} opened 2 days ago by{" "}
            <span className="fw-bold">{issue.user.login}</span>
          </span>
          <div>
            {issue.labels.map((label) => (
              <span
                key={label.id}
                className="badge rounded-pill m-1"
                style={{ backgroundColor: `#${label.color}`, color: "black" }}
              >
                {label.name}
              </span>
            ))}
          </div>
        </div>

        <div className="d-flex align-items-center">
          <img
            src={issue.user.avatar_url}
            alt="User Avatar"
            className="avatar"
          />
          <span className="px-2">{issue.comments}</span>
          <FiMessageSquare />
        </div>
      </div>
    </div>
  );
};
