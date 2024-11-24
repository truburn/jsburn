import { useCaseStudyClasses } from "@pages/CaseStudy";
import { PageTitle } from "@typography/PageTitle";
import { ReactElement } from "react";
import { useLoaderData } from "react-router-dom";

export interface CaseStudyItem {
  key: string;
  title: string;
  body: ReactElement;
  summary: string;
  image: ReactElement;
}

/**
 * Case Study
 */
export function CaseStudy() {
  const classes = useCaseStudyClasses();
  const data = useLoaderData() as CaseStudyItem;

  return (
    <>
      <PageTitle title={data.title ?? "Case Study"} />
      <div className={classes.root}>{data.body}</div>
    </>
  );
}
