import { ChatFn } from 'botz';
import { createTicket, TicketInput } from './ticket';

export const chat: ChatFn = async (bot) => {
  const data: TicketInput = {
    subject: 'Support request',
    email: '',
    name: '',
    message: '',
  };

  data.message = await bot.ask('Write a message…');

  await bot.say(
    'Hi! Thank you for your message. Can you answer a few questions for me, so we can help you?'
  );
  await bot.say("Let's start with your name. How should we call you?");
  data.name = await bot.ask('Please enter your name…');

  await bot.say(
    `Thanks, ${data.name}! At what email address can we reach you?`
  );
  data.email = await bot.ask('Please enter your email…', {
    validate: async (value) => {
      if (/^.+@.+\.+.+$/.test(value)) return true;

      await bot.say(
        'Sorry, this does not look like a proper email address. Wanna try again?'
      );
      return false;
    },
  });

  await bot.say("Awesome! I'll forward this to our support staff. One sec.");

  const { error, ticket } = await createTicket(data);
  if (/Too Many Requests/i.test(error)) {
    await bot.alert(
      `Sorry, we've received a bunch of support requests from your IP address in a very short time. Please try again later.`
    );
  } else if (error) {
    await bot.say(`Sorry, something went wrong!`);
    await bot.alert(error);
  } else {
    await bot.say(`Done! Your ticket number is #${ticket.id}.`);
    await bot.say(`Our human staff will contact you soon. Thanks again!`);
  }
};
