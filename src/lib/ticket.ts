export type TicketInput = {
  name: string;
  email: string;
  message: string;
  subject: string;
};

export async function createTicket({
  name,
  email,
  message,
  subject,
}: TicketInput) {
  const response = await fetch(`https://magicbell.supportbee.com/tickets`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify({
      ticket: {
        subject,
        requester_name: name,
        requester_email: email,
        content: {
          text: message,
        },
      },
    }),
  });

  if (!response.ok) {
    return { error: response.statusText };
  }

  return response.json();
}
