import { cx } from "@emotion/css";
import { Button } from "@form/Button";
import { TextArea } from "@form/TextArea";
import { TextInput } from "@form/TextInput";
import { useContactClasses } from "@pages/Contact";
import { sendEmail } from "@pages/Contact/Contact.utils";
import { PageTitle } from "@typography/PageTitle";
import { useState } from "react";

export interface ContactFormValues {
  name: string;
  email: string;
  company?: string;
  website?: string;
  subject: string;
  message: string;
}

const DEFAULT_FORM_VALUES: ContactFormValues = {
  name: "",
  email: "",
  subject: "",
  message: ""
};

/**
 * Contact Page
 */
export function Contact() {
  const [formValues, setFormValues] =
    useState<ContactFormValues>(DEFAULT_FORM_VALUES);
  const [emailStatus, setEmailStatus] = useState<
    "error" | "success" | undefined
  >();
  const classes = useContactClasses();

  const handleChange = (field: string, newValue: string = "") =>
    setFormValues({
      ...formValues,
      [field]: newValue
    });

  return (
    <>
      <PageTitle
        title="Let's Build Something Together"
        subtitle="Send Me a Message and Let's Get Started"
      />
      <p>
        Every great project begins with a conversation. If you're ready to build
        something amazing, I'd love to hear from you. Let's make something
        happen!
      </p>
      {emailStatus === "error" ? (
        <p className={cx(classes.emailStatus, emailStatus)}>
          There was an error sending your email. Please try again.
        </p>
      ) : (
        emailStatus === "success" && (
          <p className={cx(classes.emailStatus, emailStatus)}>
            Your message has been sent. I will respond as soon as I am able.
          </p>
        )
      )}
      <form
        className={classes.root}
        onSubmit={async (evt) => {
          evt.preventDefault();
          try {
            await sendEmail(formValues);
            setEmailStatus("success");
            setFormValues(DEFAULT_FORM_VALUES);
          } catch (err) {
            setEmailStatus("error");
          }
        }}
      >
        <TextInput
          label="Name"
          required
          value={formValues.name}
          placeholder="Your Name"
          onChange={handleChange}
        />
        <TextInput
          label="Email"
          type="email"
          required
          value={formValues.email}
          placeholder="user@email.com"
          onChange={handleChange}
        />
        <TextInput
          label="Company"
          value={formValues.company}
          placeholder="Optional"
          onChange={handleChange}
        />
        <TextInput
          label="Website"
          value={formValues.website}
          placeholder="http://yoursite.com (optional)"
          onChange={handleChange}
        />
        <TextInput
          label="Subject"
          required
          value={formValues.subject}
          placeholder="Email subject"
          onChange={handleChange}
        />
        <TextArea
          label="Message"
          required
          value={formValues.message}
          onChange={handleChange}
        />
        <div className={classes.buttons}>
          <Button
            variant="outlined"
            onClick={() => setFormValues(DEFAULT_FORM_VALUES)}
          >
            <i className="fa-sharp fa-solid fa-ban"></i> Cancel
          </Button>
          <Button submit>
            <i className="fa-regular fa-paper-plane-top"></i> Submit
          </Button>
        </div>
        <p className={classes.note}>
          <strong>NOTE:</strong> Your information and message will not be stored
          in a database. Instead it will be sent to me via email.
        </p>
      </form>
    </>
  );
}
