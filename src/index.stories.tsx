import { Meta, Story } from '@storybook/react';
import { SupportWidget } from './index';

import 'botz/styles.css';

const meta = {
  title: 'Botz',
  component: SupportWidget,
};

export default meta;
export const Basic = () => <SupportWidget />;
