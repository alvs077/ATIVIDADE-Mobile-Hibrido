import React from 'react';
import {
  Pressable,
  Text,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';

type ButtonProps = React.ComponentProps<typeof Pressable> & {
  label: string;
  isLoading?: boolean;
  variant?: 'primary' | 'outline';
};

export function Button({
  label,
  isLoading = false,
  variant = 'primary',
  ...rest
}: ButtonProps) {
  const isPrimary = variant === 'primary';

  return (
    <Pressable
      style={({ pressed }) => ({
        width: '100%',
        height: 50,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 12,
        backgroundColor: isPrimary ? '#2563EB' : 'transparent',
        borderWidth: isPrimary ? 0 : 1.5,
        borderColor: '#2563EB',
        opacity: pressed ? 0.75 : rest.disabled ? 0.5 : 1,
      })}
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
