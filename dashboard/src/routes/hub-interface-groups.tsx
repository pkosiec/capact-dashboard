import { Breadcrumb } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import { InterfaceGroupsContainer } from "@capactio/react-components";
import Page from "../layout/Page";

function InterfaceGroupCatalog() {
  const breadcrumb = (
    <Breadcrumb>
      <Breadcrumb.Item>Hub</Breadcrumb.Item>
      <Breadcrumb.Item>
        <Link to="/hub/interface-groups">InterfaceGroups</Link>
      </Breadcrumb.Item>
    </Breadcrumb>
  );
  return (
    <Page breadcrumb={breadcrumb} title="Public Hub">
      <InterfaceGroupsContainer />
    </Page>
  );
}

export default InterfaceGroupCatalog;
