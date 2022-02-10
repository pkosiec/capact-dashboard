import React from "react";
import { Breadcrumb } from "antd";
import { Link } from "react-router-dom";

import { ActionListContainer } from "@capactio/react-components";
import Page from "../layout/Page";
import { loadRuntimeConfig } from "../config/runtime";

function Actions() {
  const breadcrumb = (
    <Breadcrumb>
      <Breadcrumb.Item>
        <Link to="/actions">Actions</Link>
      </Breadcrumb.Item>
    </Breadcrumb>
  );

  const { queryRefetchIntervalMS } = loadRuntimeConfig();

  return (
    <Page breadcrumb={breadcrumb} title="Created Actions">
      <ActionListContainer refetchInterval={queryRefetchIntervalMS} />
    </Page>
  );
}

export default Actions;
