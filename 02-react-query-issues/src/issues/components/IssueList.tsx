//* components *//
import { IssueItem } from "./IssueItem";

//* interface *//
import { IIssue, State } from "../../interfaces/issue";

interface Props {
  issues: IIssue[];
  state?: State;
  onStateChange: (newState?: State) => void;
}

export const IssueList: React.FC<Props> = ({
  issues,
  state,
  onStateChange,
}) => {
  return (
    <div className="card border-white">
      <div className="card-header bg-dark">
        <ul className="nav nav-pills card-header-pills">
          <li className="nav-item">
            <a
              className={`nav-link ${state ? null : "active"}`}
              onClick={() => onStateChange(undefined)}
            >
              All
            </a>
          </li>
          <li className="nav-item">
            <a
              className={`nav-link ${state === "open" ? "active" : null}`}
              onClick={() => onStateChange("open")}
            >
              Open
            </a>
          </li>
          <li className="nav-item">
            <a
              className={`nav-link ${state === "closed" ? "active" : null}`}
              onClick={() => onStateChange("closed")}
            >
              Closed
            </a>
          </li>
        </ul>
      </div>
      <div className="card-body text-dark">
        {issues.map((issue) => (
          <IssueItem key={issue.id} issue={issue} />
        ))}
      </div>
    </div>
  );
};
