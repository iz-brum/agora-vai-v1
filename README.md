# Defesa Civil - MT

![license](https://img.shields.io/badge/license-MIT-green) 
![HTML5](https://img.shields.io/badge/HTML5-Utilizado-orange) 
![CSS3](https://img.shields.io/badge/CSS3-Utilizado-blue) 
![JavaScript](https://img.shields.io/badge/JavaScript-Utilizado-yellow) 
![Node.js](https://img.shields.io/badge/Node.js-Backend-brightgreen) 
![QGIS](https://img.shields.io/badge/QGIS-Software-blueviolet)
![GitHub](https://img.shields.io/badge/GitHub-Repository-blue) 
![Contributions Welcome](https://img.shields.io/badge/Contributions-Welcome-brightgreen) 
![Mobile-Friendly](https://img.shields.io/badge/Mobile%20Friendly-100%25-brightgreen) 
![Responsive Design](https://img.shields.io/badge/Responsive%20Design-100%25-brightgreen) 

## 🌎 🇧🇷
Este projeto utiliza dados ambientais do estado de Mato Grosso para criar um mapa interativo com foco em monitoramento de **focos de incêndio**, **áreas desmatadas** e **estações hidrológicas** da **ANA** (Agência Nacional de Águas e Saneamento Básico). 🔥💧🌿

## 📁 Estrutura do Repositório

- **api/** 🌐: Contém o endpoint da API de dados das estações hidrológicas, usado para integração com o Vercel.
- **css/** 🎨: Arquivos de estilo para a interface.
- **data/** 📊: Dados brutos, como registros de focos de incêndio e áreas desmatadas.
- **js/** 🖥️: Scripts em JavaScript para manipulação de dados e interações.
- **legend/** 🗺️: Imagens de legendas para facilitar a interpretação dos dados.
- **markers/** 📌: Ícones personalizados para mapear diferentes tipos de dados.
- **src/** 🗃️: Backend em Node.js e configurações das estações hidrológicas.
- **webfonts/** ✒️: Fontes utilizadas na interface.
- **index.html** 📄: Página principal com o mapa interativo.
- **package.json** 📦: Configurações do Node.js e dependências.
- **.gitattributes** 🔍: Configurações de Git LFS para arquivos grandes.
- **.gitignore** 🚫: Arquivos ignorados pelo controle de versão.

## 🚀 Funcionalidades

1. **Mapa Interativo de Incêndios, Desmatamento e Dados Hidrológicos**
   - Pontos de calor para focos de incêndio e áreas desmatadas.
   - Estações hidrológicas categorizadas por nível de chuva:
     - Cinza: Dados indisponíveis.
     - Amarelo: 🌧️ Chuva < 50mm.
     - Laranja: 🌧️🌧️ Chuva entre 50mm e 100mm.
     - Vermelho: 🌧️🌧️🌧️ Chuva > 100mm.

2. **Agrupamento de Dados por Localização**
   - Agrupa dados similares para visualização em áreas densas.

3. **Janela de Informações Detalhadas**
   - Informações completas sobre cada ponto no mapa.

4. **Atualização Automática dos Dados**
   - Integração com a API de dados do Google Drive para atualização a cada 10 minutos.

## 📸 Imagens do Projeto

### Estrutura de Arquivos 📂
> Visualização da organização do projeto.

### Mapa Interativo 🌍
> Demonstração das funcionalidades do mapa.

### Janela de Informações 📝
> Exemplo de informações detalhadas ao clicar em um marcador.

## 👥 Como Contribuir

1. Faça um fork deste repositório.
2. Crie um branch (`git checkout -b feature/nova-feature`).
3. Commite suas mudanças (`git commit -m 'Adiciona nova feature'`).
4. Push para o branch (`git push origin feature/nova-feature`).
5. Abra um Pull Request.

## 📜 Licença

Este projeto está licenciado sob a licença MIT. Consulte o arquivo LICENSE para mais detalhes.

## 🏷️ Tags

`#monitoramento` `#meio-ambiente` `#mato-grosso` `#mapas-interativos` `#focos-de-incêndio` `#desmatamento` `#dados-hidrológicos` `#estações-hidrológicas` `#agência-nacional-de-aguas` `#ANA` `#defesa-civil` `#QGIS` `#satélites` `#sustentabilidade`