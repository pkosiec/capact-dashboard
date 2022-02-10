import React from "react";
import { Link, useParams } from "react-router-dom";
import { Breadcrumb } from "antd";
import { ActionContainer } from "@capactio/react-components";
import Page from "../layout/Page";
import { loadRuntimeConfig } from "../config/runtime";

function Action() {
  const { name } = useParams();

  const actionName = name ?? "";
  if (actionName === "") {
    return <p>Action name cannot be empty</p>;
  }

  const breadcrumb = (
    <Breadcrumb>
      <Breadcrumb.Item>
        <Link to="/actions">Actions</Link>
      </Breadcrumb.Item>
      <Breadcrumb.Item>{actionName}</Breadcrumb.Item>
    </Breadcrumb>
  );

  const { queryRefetchIntervalMS, argoWorkflowsUIBaseURL } = loadRuntimeConfig();

  return (
    <Page breadcrumb={breadcrumb} title="Action details">
      <ActionContainer name={actionName} refetchInterval={queryRefetchIntervalMS} argoWorkflowsUIBaseURL={argoWorkflowsUIBaseURL}/>
    </Page>
  );
}

export default Action;
