import {
  SESClient,
  SendEmailCommand,
  SendEmailRequest,
} from "@aws-sdk/client-ses";
import { fromCognitoIdentityPool } from "@aws-sdk/credential-providers";
import { ContactFormValues } from "@pages/Contact";

const region = "us-east-1";

export async function sendEmail(formValues: ContactFormValues) {
  const client = new SESClient({
    region,
    credentials: fromCognitoIdentityPool({
      clientConfig: { region },
      identityPoolId: "us-east-1:25a9522b-e59a-412a-b9d5-d2cd4d091c42",
    }),
  });

  const input: SendEmailRequest = getEmailInput(formValues);
  const command = new SendEmailCommand(input);

  try {
    await client.send(command);
  } catch (err) {
    throw Error("There was an issue with sending the email. Check the logs.");
  }
}

function getEmailInput(formValues: ContactFormValues): SendEmailRequest {
  const emailBody = [
    `<p><strong>Name:</strong> ${formValues.name}</p>`,
    `<p><strong>Email:</strong> <a href="mailto:${formValues.email}">${formValues.email}</a></p>`,
    `<p><strong>Company:</strong> ${formValues.company ?? ""}</p>`,
    `<p><strong>Website:</strong> ${
      formValues.website
        ? `<a href="${formValues.website}">${formValues.website}</a></p>`
        : ""
    }`,
    `<p><strong>Subject:</strong> ${formValues.subject}</p>`,
    `<p><strong>Message:</strong></p>`,
    `<p>${formValues.message}</p>`,
  ];

  return {
    Source: "JSBurn.com <jennifer.seburn@gmail.com>",
    Destination: {
      ToAddresses: ["jennifer.seburn@gmail.com"],
    },
    Message: {
      Subject: {
        Data: formValues.subject,
      },
      Body: {
        Html: {
          Data: emailBody.join(""),
        },
      },
    },
    ReplyToAddresses: [`${formValues.name} <${formValues.email}>`],
  };
}
