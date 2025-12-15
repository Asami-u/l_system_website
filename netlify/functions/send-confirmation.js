// netlify/functions/send-confirmation.js
import fetch from "node-fetch";

export const handler = async (event) => {
  const data = JSON.parse(event.body);
  const email = data.payload.data.email;
  const name = data.payload.data.name;

  // SendGridなどのメールAPIを使う
  await fetch("https://api.sendgrid.com/v3/mail/send", {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${process.env.SENDGRID_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      personalizations: [
        {
          to: [{ email }],
          subject: "【LSY】お問い合わせありがとうございます",
        },
      ],
      from: { email: "info@drivers-lsy.jp", name: "LSY 事務局" },
      content: [
        {
          type: "text/plain",
          value: `${name} 様\n\nお問い合わせありがとうございます。\n担当者より追ってご連絡いたします。\n\nLSY`,
        },
      ],
    }),
  });

  return { statusCode: 200, body: "ok" };
};
