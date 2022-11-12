import { useState } from "react";

//* components *//
import { IssueList } from "../components/IssueList";
import { LabelPicker } from "../components/LabelPicker";

//* hooks *//
import { useIssues } from "../../hooks";
import { LoadingIcon } from "../../shared/components/LoadingIcon";

//* interface *//
import { State } from "../../interfaces/issue";

export const ListView = () => {
  const [selectedLabel, setSelectedLabel] = useState<string[]>([]);
  const [state, setState] = useState<State>();

  const { issuesQuery } = useIssues({ labels: selectedLabel, state });

  const onLabelChange = (labelName: string) => {
    if (selectedLabel.includes(labelName)) {
      setSelectedLabel((prev) => prev.filter((label) => label !== labelName));
    } else {
      setSelectedLabel((prev) => [...prev, labelName]);
    }
  };

  return (
    <div className="row mt-5">
      <div className="col-8">
        {issuesQuery.isLoading ? (
          <LoadingIcon />
        ) : (
          <IssueList
            issues={issuesQuery.data || []}
            state={state}
            onStateChange={(newState) => setState(newState)}
          />
        )}

        <div className="d-flex mt-2 justify-content-between align-items-center">
          <button className="btn btn-outline-primary">Prev</button>
          <span>123</span>
          <button className="btn btn-outline-primary">Next</button>
        </div>
      </div>

      <div className="col-4">
        <LabelPicker
          selectedLabels={selectedLabel}
          onChange={(labelName) => onLabelChange(labelName)}
        />
      </div>
    </div>
  );
};
