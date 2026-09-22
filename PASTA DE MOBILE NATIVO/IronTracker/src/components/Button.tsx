import React from 'react';
import {
  Pressable,
  PressableProps,
  Text,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';

interface ButtonProps extends PressableProps {
  label: string;
  isLoading?: boolean;
  variant?: 'primary' | 'outline';
}

export function Button({
  label,
  isLoading = false,
  variant = 'primary',
  ...rest
}: ButtonProps) {
  const isPrimary = variant === 'primary';

  return (
    <Pressable
      style={({ pressed }) => [
        styles.button,
        isPrimary ? styles.primary : styles.outline,
        pressed && styles.pressed,
        rest.disabled ? styles.disabled : null,
      ]}
      {...rest}
    >
      {isLoading ? (
        <ActivityIndicator color={isPrimary ? '#FFFFFF' : '#2563EB'} size="small" />
      ) : (
        <Text style={[styles.label, isPrimary ? styles.labelPrimary : styles.labelOutline]}>
          {label}
        </Text>
      )}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    width: '100%',
    height: 50,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 12,
  },
  primary: {
    backgroundColor: '#2563EB',
  },
  outline: {
    backgroundColor: 'transparent',
    borderWidth: 1.5,
    borderColor: '#2563EB',
  },
  pressed: {
    opacity: 0.75,
  },
  disabled: {
    opacity: 0.5,
  },
  label: {
    fontSize: 15,
    fontWeight: '700',
    letterSpacing: 0.4,
  },
  labelPrimary: {
    color: '#FFFFFF',
  },
  labelOutline: {
    color: '#2563EB',
  },
});
