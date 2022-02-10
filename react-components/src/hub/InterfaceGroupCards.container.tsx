import React from "react";
import { InterfaceGroupCards } from "./InterfaceGroupCards";
import {
  InterfaceGroup as InterfaceGroupGQL,
  useListInterfaceGroupsQuery,
} from "../generated/graphql";

export function InterfaceGroupCardsContainer() {
  const { data, error, isLoading } = useListInterfaceGroupsQuery();

  const groups = (data?.interfaceGroups as InterfaceGroupGQL[]) ?? [];
  return (
    <InterfaceGroupCards
      interfaceGroups={groups}
      error={error as Error}
      isLoading={isLoading}
    />
  );
}
