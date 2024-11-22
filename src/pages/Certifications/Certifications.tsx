import { Card } from "@components/Card";
import { useCertificationsClasses } from "@pages/Certifications";
import { PageTitle } from "@typography/PageTitle";
import { SectionTitle } from "@typography/SectionTitle";
import aiwLogo from "@assets/aiw-logo.png";
import csmBadge from "@assets/csm-badge.png";
import cspoBadge from "@assets/cspo-badge.png";
import salesforce from "@assets/Platform-Developer-I.png";
import { cx } from "@emotion/css";
import { Link } from "@navigation/Link";

/**
 * Certifications
 */
export function Certifications() {
  const classes = useCertificationsClasses();

  return (
    <>
      <PageTitle title="My Quest for Knowledge" />
      <p>
        Mastery is a journey, not a destination. Along my path, I've cultivated
        knowledge through formal education and hands-on experience while earning
        certifications that reflect my dedication to growth. From foundational
        studies in multimedia and web development to specialized training in
        Agile methodologies and Salesforce development, each step has sharpened
        my skills and prepared me to tackle new challenges. Explore the
        milestones that define my commitment to excellence.
      </p>
      <SectionTitle title="Certifications" />
      <p>
        My certifications represent milestones in my ongoing journey of
        professional growth. They reflect my commitment to learning and the
        specialized knowledge I've gained in areas such as Agile methodologies.
        I'm currently working towards my Salesforce Platform Developer I
        certification, advancing my expertise through hands-on projects and
        Trailhead modules. Each certification empowers me to deliver
        high-quality, innovative solutions and lead teams with confidence.
      </p>
      <div className={classes.certs}>
        <Card className={cx(classes.card, classes.certCard)}>
          <img src={csmBadge} alt="Scrum Alliance - Certified Scrum Master" />
          <p className={classes.certTitle}>Certified Scrum Master®</p>
          <p>
            <strong>Issued By:</strong> Scrum Alliance
          </p>
          <p>
            <strong>Issued:</strong> October 2023
          </p>
          <p>
            <strong>Expires:</strong> October 2025
          </p>
          <p>
            <strong>ID:</strong>{" "}
            <Link to="https://bcert.me/sfmokyzqu" newTab>
              1856528
            </Link>
          </p>
        </Card>
        <Card className={cx(classes.card, classes.certCard)}>
          <img
            src={cspoBadge}
            alt="Scrum Alliance - Certified Scrum Product Owner"
          />
          <p className={classes.certTitle}>Certified Scrum Product Owner®</p>
          <p>
            <strong>Issued By:</strong> Scrum Alliance
          </p>
          <p>
            <strong>Issued:</strong> January 2022
          </p>
          <p>
            <strong>Expires:</strong> October 2025
          </p>
          <p>
            <strong>ID:</strong>{" "}
            <Link to="https://bcert.me/seywsupzb" newTab>
              1510109
            </Link>
          </p>
        </Card>
        <Card className={cx(classes.card, classes.certCard)}>
          <div className={classes.pending}>
            <img src={salesforce} alt="Platform Developer I" />
          </div>
          <p className={classes.certTitle}>Salesforce Platform Developer I</p>
          <p>
            <strong>Issued By:</strong> TBD
          </p>
          <p>
            <strong>Issued:</strong> Pending
          </p>
          <p>
            <strong>Expires:</strong> Pending
          </p>
          <p>
            <strong>ID:</strong> TBD
          </p>
        </Card>
      </div>
      <SectionTitle title="Education" />
      <p>
        While my formal education laid the foundation for my career, my real
        education has been the hands-on experience gained over two decades in
        the industry. My Associate of Science in Multimedia & Web Development
        from the Art Institute of Washington, combined with continuous learning,
        has allowed me to stay at the forefront of technology and design trends.
      </p>
      <Card className={cx(classes.card, classes.edCard)}>
        <img src={aiwLogo} alt="Art Institute of Washington" />
        <p>
          <strong>School:</strong> Art Institute of Washington
        </p>
        <p>
          <strong>Degree:</strong> Associate of Science
        </p>
        <p>
          <strong>Subject:</strong> Multimedia & Web Design
        </p>
        <p>
          <strong>Dates:</strong> Oct 2001 - Oct 2003
        </p>
        <p>
          <strong>Location:</strong> Arlington, VA
        </p>
      </Card>
    </>
  );
}
