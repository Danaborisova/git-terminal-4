const { readData, writeData } = require("../utils/data"); // Чтение и запись данных в JSON-файл

const sendAllGames = (req, res) => {
    res.send(req.games);
  };
  
  const sendUpdatedGames = (req, res) => {
    res.send({
      games: req.games,
      updated: req.updatedObject
    });
  };
  
  module.exports = { sendAllGames, sendUpdatedGames }; 