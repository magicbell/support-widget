import React from 'react';
import { FloatingWidget, ChatFn } from 'botz';
import { Logo } from './logo';
import { chat as defaultChat } from '../lib/chat';

type SupportWidgetProps = {
  chat?: ChatFn;
};

/**
 * A custom Thing component. Neat!
 */
export function SupportWidget({ chat = defaultChat }: SupportWidgetProps) {
  return (
    <>
      <style>
        {`
      :root {
        --botz-color-primary: rgb(82, 37, 193);
        --botz-color-primary-dark: rgb(46, 21, 107);
        --botz-color-input-shadow: rgb(82, 37, 193, 0.15);
        --botz-bg-bot-bubble: var(--botz-color-primary);
      }
    `}
      </style>
      <FloatingWidget chat={chat} logo={<Logo />} />
    </>
  );
}
