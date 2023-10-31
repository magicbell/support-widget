const SUPPORTBEE_URL = 'https://magicbell.supportbee.com';

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
  const response = await fetch(`${SUPPORTBEE_URL}/tickets`, {
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

export type ReplyInput = {
  ticketId: string;
  message: string;
};

export async function createReply({ ticketId, message }: ReplyInput) {
  const response = await fetch(
    `${SUPPORTBEE_URL}/tickets/${ticketId}/replies`,
    {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        reply: {
          content: {
            text: message,
          },
        },
      }),
    }
  );

  if (!response.ok) {
    return { error: response.statusText };
  }

  return response.json();
}
