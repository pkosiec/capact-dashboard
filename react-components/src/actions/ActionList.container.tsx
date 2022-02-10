import React from "react";

import { useActionListQuery } from "../generated/graphql";

import { ActionList, ActionItem } from "./ActionList";

export interface ActionListContainerProps {
  refetchInterval?: number;
}

export function ActionListContainer({ refetchInterval }: ActionListContainerProps) {
  const query = useActionListQuery(undefined, {
    refetchInterval,
  });

  const rawData = query.data?.actions ?? [];
  const data: ActionItem[] = rawData.map((item) => {
    const actionRef = `${item.actionRef?.path}:${item.actionRef?.revision}`;
    return {
      key: item.name,
      name: item.name,
      actionRef,
      createdAt: item.createdAt,
      status: item.status?.phase,
    };
  });

  return (
    <ActionList
      data={data}
      error={query.error as Error | undefined}
      isLoading={query.isLoading}
    />
  );
}
