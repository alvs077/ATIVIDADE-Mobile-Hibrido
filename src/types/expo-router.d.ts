declare module 'expo-router' {
  import type { ComponentType, ReactNode } from 'react';
  import type { TextProps } from 'react-native';

  export type Href = string;

  export interface LinkProps extends Omit<TextProps, 'style'> {
    href: Href;
    children?: ReactNode;
    style?: unknown;
  }

  export interface StackProps {
    screenOptions?: {
      headerShown?: boolean;
    };
  }

  export const Link: ComponentType<LinkProps>;
  export const Stack: ComponentType<StackProps>;

  export const router: {
    push(href: Href): void;
    replace(href: Href): void;
    back(): void;
  };
}
