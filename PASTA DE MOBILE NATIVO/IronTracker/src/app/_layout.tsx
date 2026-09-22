import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

/**
 * Layout raiz do aplicativo.
 * Usa Stack Navigator para permitir navegação entre
 * as telas de Login (index) e Cadastro (signup).
 */
export default function RootLayout() {
  return (
    <>
      {/* Remove o header padrão de todas as telas */}
      <Stack screenOptions={{ headerShown: false }} />
      <StatusBar style="dark" />
    </>
  );
}
