import { Link } from "@navigation/Link";
import { useLegalClasses } from "@pages/Legal";
import { PageTitle } from "@typography/PageTitle";
import { SectionTitle } from "@typography/SectionTitle";

/**
 * Terms of Use
 */
export function TermsOfUse() {
  const classes = useLegalClasses();

  return (
    <>
      <PageTitle title="Terms of Use" subtitle="Last Updated: 11/18/2024" />
      <SectionTitle className={classes.title} title="Introduction" />
      <p>
        Welcome to jsburn.com. By accessing or using this website, you agree to
        the following terms and conditions.
      </p>
      <ol>
        <li>
          <SectionTitle
            className={classes.title}
            title="Use of Content"
            depth="3"
          />
          <p>
            All content on this site, including the downloadable resume, is
            owned by me, Jennifer Seburn, and is for personal use only.
            Reproduction or distribution of the content without permission is
            prohibited.
          </p>
        </li>
        <li>
          <SectionTitle
            className={classes.title}
            title="Disclaimer"
            depth="3"
          />
          <p>
            This website is provided “as is” without warranties of any kind. I
            am not liable for any errors, interruptions, or issues caused by
            using this website.
          </p>
        </li>
        <li>
          <SectionTitle
            className={classes.title}
            title="Contact Form Usage"
            depth="3"
          />
          <p>
            Messages submitted through the contact form must not contain
            offensive, illegal, or harmful content.
          </p>
          <p>
            I reserve the right to respond at my discretion or not respond to
            inquiries.
          </p>
        </li>
        <li>
          <SectionTitle
            className={classes.title}
            title="Resume Downloads"
            depth="3"
          />
          <p>
            The resume provided is for professional opportunities only and may
            not be used for other purposes without explicit permission.
          </p>
        </li>
        <li>
          <SectionTitle
            className={classes.title}
            title="Governing Law"
            depth="3"
          />
          <p>These terms are governed by the laws of Maryland, USA.</p>
        </li>
        <li>
          <SectionTitle
            className={classes.title}
            title="Open-Source Code"
            depth="3"
          />
          <p>
            Portions of this website's code are available on GitHub under
            [insert license type, e.g., MIT License].
          </p>
          <p>
            By accessing or using the code, you agree to comply with the terms
            of the applicable license, which is available in the repository.
          </p>
          <p>
            I am not liable for any issues, errors, or damages resulting from
            the use of the code.
          </p>
        </li>
      </ol>
      <SectionTitle className={classes.title} title="Contact" />
      <p>
        <Link to="/contact">Contact me</Link>, if you have questions about these
        terms.
      </p>
    </>
  );
}
