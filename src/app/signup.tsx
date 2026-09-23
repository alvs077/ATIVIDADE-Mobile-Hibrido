import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  Alert,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
} from 'react-native';
import { Link, router } from 'expo-router';

import { Input } from '@/components/Input';
import { Button } from '@/components/Button';

export default function Signup() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmacaoSenha, setConfirmacaoSenha] = useState('');

  function handleCadastrar() {
    if (!nome.trim() || !email.trim() || !senha.trim() || !confirmacaoSenha.trim()) {
      Alert.alert(
        'Campos obrigatórios',
        'Por favor, preencha todos os campos antes de continuar.',
        [{ text: 'OK' }]
      );
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
      Alert.alert(
        'E-mail inválido',
        'Digite um endereço de e-mail válido.',
        [{ text: 'OK' }]
      );
      return;
    }

    if (senha.length < 6) {
      Alert.alert(
        'Senha muito curta',
        'A senha deve ter no mínimo 6 caracteres.',
        [{ text: 'OK' }]
      );
      return;
    }

    if (senha !== confirmacaoSenha) {
      Alert.alert(
        'Senhas não conferem',
        'A senha e a confirmação de senha são diferentes.\nVerifique e tente novamente.',
        [{ text: 'Corrigir' }]
      );
      return;
    }

    Alert.alert(
      'Conta criada com sucesso! 💪',
      `Bem-vindo ao IronTracker, ${nome.trim().split(' ')[0]}!`,
      [
        {
          text: 'Fazer Login',
          onPress: () => router.replace('./'),
        },
      ]
    );
  }

  return (
    <KeyboardAvoidingView
      style={styles.flex}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.container}>

          <View style={styles.logoArea}>
            <Image
              source={require('@/assets/images/logo-register.webp')}
              style={styles.logo}
              resizeMode="contain"
            />
          </View>

          <View style={styles.card}>
            <Text style={styles.title}>Criar nova conta</Text>
            <Text style={styles.subtitle}>
              Preencha os dados abaixo para começar sua jornada.
            </Text>

            <Input
              label="Nome completo"
              placeholder="João Silva"
              value={nome}
              onChangeText={setNome}
              autoCapitalize="words"
              returnKeyType="next"
              textContentType="name"
            />

            <Input
              label="E-mail"
              placeholder="seuemail@exemplo.com"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
              returnKeyType="next"
              textContentType="emailAddress"
            />

            <Input
              label="Senha"
              placeholder="Mínimo 6 caracteres"
              value={senha}
              onChangeText={setSenha}
              secureTextEntry
              returnKeyType="next"
              textContentType="newPassword"
            />

            <Input
              label="Confirmar senha"
              placeholder="Repita sua senha"
              value={confirmacaoSenha}
              onChangeText={setConfirmacaoSenha}
              secureTextEntry
              returnKeyType="done"
              textContentType="newPassword"
              onSubmitEditing={handleCadastrar}
            />

            <Button label="Cadastrar" onPress={handleCadastrar} />

            <View style={styles.divider}>
              <View style={styles.dividerLine} />
              <Text style={styles.dividerText}>ou</Text>
              <View style={styles.dividerLine} />
            </View>

            <View style={styles.footer}>
              <Text style={styles.footerText}>Já tem uma conta? </Text>
              <Link href="./" style={styles.footerLink}>
                Fazer login
              </Link>
            </View>
          </View>

        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  flex: {
    flex: 1,
    backgroundColor: '#F3F4F6',
  },
  scrollContent: {
    flexGrow: 1,
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingVertical: 36,
    justifyContent: 'center',
  },
  logoArea: {
    alignItems: 'center',
    marginBottom: 24,
  },
  logo: {
    width: 280,
    height: 140,
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 24,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 10,
    elevation: 4,
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
    color: '#111827',
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 13,
    color: '#6B7280',
    marginBottom: 20,
    lineHeight: 19,
  },
  divider: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 6,
  },
  dividerLine: {
    flex: 1,
    height: 1,
    backgroundColor: '#E5E7EB',
  },
  dividerText: {
    fontSize: 12,
    color: '#9CA3AF',
    marginHorizontal: 10,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 8,
  },
  footerText: {
    fontSize: 14,
    color: '#6B7280',
  },
  footerLink: {
    fontSize: 14,
    color: '#2563EB',
    fontWeight: '700',
  },
});
