// upch.js
const fs = require('fs');

let targetChannelData = { id: '120363420029967952@newsletter' };

const loadTargetChannel = () => {
    try {
        if (fs.existsSync('./targetChannel.json')) {
            const file = fs.readFileSync('./targetChannel.json', 'utf-8');
            targetChannelData = JSON.parse(file);
        } else {
            saveTargetChannel();
        }
    } catch (err) {
        console.error('Gagal load target channel:', err);
    }
};

const saveTargetChannel = () => {
    try {
        fs.writeFileSync('./targetChannel.json', JSON.stringify(targetChannelData, null, 2));
    } catch (err) {
        console.error('Gagal save target channel:', err);
    }
};

// Load otomatis saat file di require
loadTargetChannel();

// Export supaya bisa dipakai di case.js
module.exports = { targetChannelData, loadTargetChannel, saveTargetChannel };