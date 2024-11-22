import { Source, useOf } from "@storybook/blocks";
import React from "react";

export const ImportStatement = (props) => {
  const resolvedOf = useOf(props.of || "story", ["story", "meta"]);

  if (resolvedOf.type === "story") {
    const { title } = resolvedOf.story;
    const name = title.split("/").pop();
    return <Source code={`import { ${name} } from "@${title}";`} />;
  }

  return null;
};
