import { render } from "svelte-email";
import EmailTemplate from "../../components/emails/EmailTemplate.svelte";
import sendgrid from "@sendgrid/mail";
import { SENDGRID_API_KEY, FROM_EMAIL_ADDRESS } from "$env/static/private";
import { json } from "@sveltejs/kit";

export async function POST({ request }) {
  sendgrid.setApiKey(SENDGRID_API_KEY);
  const { emailInput, subjectInput, nameInput, siteName, messageInput } =
    await request.json();
  const emailHtml = render({
    template: EmailTemplate,
    props: {
      fromName: nameInput,
      subject: subjectInput,
      message: messageInput,
      site: siteName,
      fromEmail: emailInput,
    },
    options: {
      plainText: false,
    },
  });

  const options = {
    from: FROM_EMAIL_ADDRESS,
    to: emailInput,
    subject: siteName + ": " + nameInput + " wants to " + subjectInput,
    html: emailHtml,
  };

  sendgrid
    .send(options)
    .then(() => {
      console.log("Email sent");
    })
    .catch((error) => {
      console.error(error);
    });
  return json(options);
}
