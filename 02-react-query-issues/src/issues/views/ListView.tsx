import { useState } from "react";

//* components *//
import { IssueList } from "../components/IssueList";
import { LabelPicker } from "../components/LabelPicker";

//* hooks *//
import { useIssues } from "../../hooks";
import { LoadingIcon } from "../../shared/components/LoadingIcon";

export const ListView = () => {
  const [selectedLabel, setSelectedLabel] = useState<string[]>([]);
  const { issuesQuery } = useIssues();

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
          <IssueList issues={issuesQuery.data} />
        )}
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
