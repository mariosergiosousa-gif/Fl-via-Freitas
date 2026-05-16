# Flávia Freitas | Excelência em Odontologia

Este é o site oficial da clínica odontológica da Dra. Flávia Freitas, desenvolvida para proporcionar uma experiência digital de alta qualidade, refletindo a excelência clínica e estética da marca.

## 🚀 Como executar localmente

Siga os passos abaixo para rodar o projeto na sua máquina:

1. **Instalar dependências**
   No diretório raiz do projeto, execute:
   ```bash
   npm install
   ```

2. **Configurar variáveis de ambiente**
   Crie um arquivo `.env` na raiz do projeto (ou copie o `.env.example`) e adicione as suas chaves se necessário:
   ```bash
   cp .env.example .env
   ```
   *Nota: O `GEMINI_API_KEY` só é necessário se você estiver utilizando funcionalidades de IA da Google.*

3. **Iniciar o servidor de desenvolvimento**
   Execute o comando:
   ```bash
   npm run dev
   ```
   O site estará disponível em `http://localhost:5173` (ou na porta indicada no terminal).

## 🔨 Build e Deploy

Para gerar a versão de produção do site:

```bash
npm run build
```

Os arquivos gerados estarão na pasta `dist/`.

### Publicação no GitHub Pages

Este projeto já inclui um workflow do GitHub Actions (`.github/workflows/deploy.yml`) que automatiza o deploy para o GitHub Pages.

### ⚠️ Passo Obrigatório no GitHub (O site não funcionará sem isso):

O erro `HttpError: Not Found` acontece porque o GitHub vem configurado por padrão para usar branches em vez de Actions. Siga estes 3 passos:

1. Vá para o seu repositório no GitHub.
2. Clique em **Settings** (Configurações) no topo.
3. No lado esquerdo, clique em **Pages**.
4. Abaixo de **Build and deployment**, mude a opção **Source** de "Deploy from a branch" para **"GitHub Actions"**.

Após fazer isso, o deploy será feito automaticamente em todos os novos envios (push).

### 🛠️ Tecnologias Utilizadas

- **React 19**
- **Vite 6**
- **Tailwind CSS 4**
- **Motion** (para animações)
- **Lucide React** (ícones)
- **TypeScript**

## 📂 Estrutura do Projeto

- `src/components/`: Componentes modulares da interface.
- `src/App.tsx`: Layout principal do site.
- `public/`: Arquivos estáticos como imagens e vídeos.
- `public/videos/`: Contém os vídeos dos tours da clínica.
