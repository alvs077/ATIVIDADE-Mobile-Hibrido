# IronTracker

Aplicativo mobile acadêmico para acompanhamento de treinos, desenvolvido com React Native, Expo e TypeScript.

## Funcionalidades

- Tela de login com validação de e-mail e senha.
- Tela de cadastro com validação dos campos e confirmação de senha.
- Componentes reutilizáveis de entrada e botão.
- Navegação entre login e cadastro com Expo Router.
- Interface adaptada ao teclado e a telas menores.

## Estrutura

```text
assets/
  images/           Imagens e ícones do aplicativo
src/
  app/              Telas e rotas do Expo Router
  components/       Componentes reutilizáveis
app.json            Configuração do Expo
package.json        Dependências e comandos
tsconfig.json       Configuração do TypeScript
```

## Como executar

Requisitos: Node.js 22 ou superior e o aplicativo Expo Go no dispositivo móvel.

```bash
npm install
npm start
```

Depois, escaneie o QR Code exibido no terminal com o Expo Go.

## Verificações

```bash
npm run lint
npx tsc --noEmit
```
