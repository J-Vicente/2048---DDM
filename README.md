# 2048 - Jogo Mobile

Este é um projeto do jogo 2048 desenvolvido em [React Native](https://reactnative.dev/) usando [Expo](https://expo.dev/). O objetivo é combinar blocos para alcançar a maior pontuação possível. Este é o rojeto final da matéria Desenvolvimento de Dispositivos Móveis do curso de Análise e Desenvolvimento de Sistemas, ministrada pelo professor Jeferson Queiroga.

## Funcionalidades

- Jogue 2048 com interface intuitiva e responsiva
- Cadastro e login de usuários
- Salve e continue partidas
- Ranking com melhores pontuações
- Persistência de dados usando AsyncStorage
- Integração com API para registro e consulta de pontuações

## Estrutura do Projeto

- **app/**: Telas e rotas do aplicativo
- **components/**: Componentes reutilizáveis (botão, grid, input, modal, etc)
- **contexts/**: Contextos para gerenciamento de estado do jogo e usuário
- **hooks/**: Hooks customizados (ex: carregamento de fontes)
- **services/**: Serviços para comunicação com API (autenticação, ranking)
- **constants/**: Cores e constantes do projeto
- **assets/**: Imagens e fontes

## Instalação

1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/2048.git
   cd 2048
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

3. Inicie o projeto:
   ```bash
   npx expo start
   ```


## Tecnologias Utilizadas

- React Native
- Expo
- TypeScript
- AsyncStorage
- Axios
- Expo Router

## Como Jogar

- Deslize para combinar blocos e atingir pontuações maiores.
- Cadastre-se para salvar seus resultados e competir no ranking.
