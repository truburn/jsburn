import { CaseStudyItem } from "@pages/CaseStudy/CaseStudy";
import forceStructure from "@assets/force-structure.png";

export default {
  key: "odin",
  title: "ODIN & Force Structures",
  summary: "",
  image: forceStructure,
  body: (
    <>
      <p>This is the content for this page</p>
      <h2>Sample Subheader</h2>
      <ul>
        <li>List Item</li>
        <li>List Item</li>
      </ul>
    </>
  ),
  links: [
    {
      to: "https://odin.tradoc.army.mil/",
      label: "ODIN Website"
    }
  ]
} as CaseStudyItem;
