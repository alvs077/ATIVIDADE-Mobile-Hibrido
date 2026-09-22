# 🏋️‍♂️ IronTracker

> **Evolução de Cargas e Treinos**  
> Um aplicativo mobile desenvolvido para quem leva o ferro a sério. Organize suas rotinas, monitore sua progressão de cargas e mantenha o foco na hipertrofia.

## 📱 Sobre o Projeto

O **IronTracker** é um aplicativo mobile projetado para facilitar o registro de treinos de musculação e a estruturação de divisões de exercícios (como as clássicas rotinas ABC). 

Este projeto foi construído do zero como parte da disciplina de Desenvolvimento Mobile Híbrido no curso de Sistemas de Informação. O foco principal da arquitetura foi aplicar os melhores padrões de componentização, navegação moderna e gerenciamento de estado no ecossistema mobile.

## 🚀 Principais Funcionalidades

* **Onboarding e Autenticação:** Telas de Login e Cadastro desenvolvidas com foco em conversão e usabilidade.
* **Validação de Formulários:** Sistema robusto que impede submissões com campos vazios e garante a exata correspondência de senhas na criação da conta através da manipulação de estados (`useState`).
* **Componentização Inteligente:** Componentes de interface (`Input` e `Button`) 100% reutilizáveis e escaláveis, construídos para herdar propriedades nativas de forma dinâmica.
* **UX/UI Responsiva:** Interfaces fluidas construídas com `KeyboardAvoidingView` e `ScrollView` para garantir que o teclado do sistema não prejudique a navegação do usuário em nenhum momento.
* **Roteamento Dinâmico:** Fluxo entre telas gerenciado de forma limpa através da navegação por pastas do `expo-router`.

## 🛠️ Tecnologias Utilizadas

* **React Native:** Framework principal para desenvolvimento nativo multiplataforma.
* **Expo:** Ferramenta para estruturação, testes rápidos e compilação do projeto.
* **TypeScript:** Tipagem estática para um código mais seguro, escalável e fácil de manter.
* **Expo Router:** Sistema de navegação moderno baseado na estrutura de arquivos.

## ⚙️ Como Executar Localmente

Para rodar o aplicativo na sua máquina e testar no seu celular, siga os passos abaixo:

1. **Clone o repositório:**
   ```bash
   git clone [https://github.com/alvs077/ATIVIDADE-Mobile-Hibrido.git](https://github.com/alvs077/ATIVIDADE-Mobile-Hibrido.git)
