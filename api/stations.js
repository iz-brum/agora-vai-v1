// agora_vai_v1/api/stations.js
const axios = require('axios');

let cachedStationsData = null;
let lastFetchTime = null;

// Função para buscar dados do Google Drive
const fetchStationsData = async () => {
    const stationsJsonUrl = 'https://drive.google.com/uc?export=download&id=1y2XW6rMchYNcfTNgeI73LJjVcXfKJ6LX';

    // Verifica se o cache está atualizado (dentro de 30 minutos)
    const currentTime = new Date().getTime();
    if (cachedStationsData && lastFetchTime && (currentTime - lastFetchTime < 30 * 60 * 1000)) {
        return cachedStationsData;  // Retorna dados em cache se ainda válidos
    }

    try {
        const response = await axios.get(stationsJsonUrl);
        cachedStationsData = response.data;  // Atualiza o cache com os novos dados
        lastFetchTime = currentTime;  // Atualiza o tempo da última busca
        console.log('Dados atualizados do Google Drive:', cachedStationsData);
        return cachedStationsData;
    } catch (error) {
        console.error('Erro ao buscar dados das estações:', error);
        throw new Error('Falha ao buscar dados das estações');
    }
};

// Função de manipulação da API para Vercel
module.exports = async (req, res) => {
    try {
        const data = await fetchStationsData();
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ message: 'Dados não disponíveis no momento.' });
    }
};
