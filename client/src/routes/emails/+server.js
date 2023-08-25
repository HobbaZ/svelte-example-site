import { render } from "svelte-email";
import EmailTemplate from "../../components/emails/EmailTemplate.svelte";
import sendgrid from "@sendgrid/mail";
import { SENDGRID_API_KEY, FROM_EMAIL_ADDRESS } from "$env/static/private";
import { json } from "@sveltejs/kit";
//import { emailInput } from "../contact/+page.svelte";

/*export function GET() {
  sendgrid.setApiKey(SENDGRID_API_KEY);

  const emailHtml = render({
    template: EmailTemplate,
    props: {},
    options: {
      plainText: true,
    },
  });

  const options = {
    from: FROM_EMAIL_ADDRESS,
    to: FROM_EMAIL_ADDRESS,
    subject: "hello world",
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
}*/

export async function POST({ request }) {
  sendgrid.setApiKey(SENDGRID_API_KEY);
  const { emailInput } = await request.json();
  const emailHtml = render({
    template: EmailTemplate,
    props: {},
    options: {
      plainText: true,
    },
  });

  const options = {
    from: FROM_EMAIL_ADDRESS,
    to: emailInput,
    subject: "hello world",
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
