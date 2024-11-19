import { Link } from "@navigation/Link";
import { useLegalClasses } from "@pages/Legal";
import { PageTitle } from "@typography/PageTitle";
import { SectionTitle } from "@typography/SectionTitle";

/**
 * Privacy Policy
 */
export function PrivacyPolicy() {
  const classes = useLegalClasses();

  return (
    <>
      <PageTitle title="Privacy Policy" subtitle="Updated: 11/18/2024" />
      <SectionTitle className={classes.title} title="Introduction" />
      <p>
        Your privacy is important to me, Jennifer Seburn. This Privacy Policy
        explains how I collect, use, and protect your information when you visit
        my website, jsburn.com.
      </p>
      <ol className={classes.list}>
        <li className={classes.listItem}>
          <SectionTitle
            className={classes.title}
            depth="3"
            title="Information I Collect"
          />
          <p>
            <strong>Contact Form Submissions:</strong> When you fill out the
            contact form, I collect your name, email address, and message
            content.
          </p>
          <p>
            <strong>Resume Downloads:</strong> If you download my resume, no
            personal data is collected unless you opt to contact me.
          </p>
          <p>
            <strong>Cookies and Analytics:</strong> I may use cookies or
            analytics tools to track website usage and improve functionality.
          </p>
        </li>
        <li className={classes.listItem}>
          <SectionTitle
            className={classes.title}
            depth="3"
            title="How I Use Your Information"
          />
          <p>To respond to inquiries sent through the contact form.</p>
          <p>To analyze website performance and optimize user experience.</p>
          <p>
            Your information will not be shared, sold, or used for marketing
            purposes without your consent.
          </p>
        </li>
        <li className={classes.listItem}>
          <SectionTitle
            className={classes.title}
            depth="3"
            title="Data Security"
          />
          <p>
            I take reasonable steps to protect your information. However, no
            method of online transmission or storage is 100% secure.
          </p>
        </li>
        <li className={classes.listItem}>
          <SectionTitle
            className={classes.title}
            depth="3"
            title="Your Rights"
          />
          <p>
            You have the right to request access to, correction of, or deletion
            of your data. <Link to="/contact">Contact me</Link> for assistance.
          </p>
        </li>
        <li className={classes.listItem}>
          <SectionTitle
            className={classes.title}
            depth="3"
            title="Changes to this Policy"
          />
          <p>
            This Privacy Policy may be updated from time to time. Please review
            it periodically for changes.
          </p>
        </li>
      </ol>
      <SectionTitle className={classes.title} title="Contact" />
      <p>
        <Link to="/contact">Contact me</Link> if you have questions about this
        policy.
      </p>
    </>
  );
}
