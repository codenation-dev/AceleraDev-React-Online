function isGender(character, gender) {
  return character.gender === gender;
}
function filterByGender(characters, gender) {
  return characters.filter(character => isGender(character, gender));
}

function isAlive(character, status) {
  return character.status === status;
}
function filterByStatus(characters, status) {
  return characters.filter(character => isAlive(character, status));
}

function getEpisodeFromURL(url) {
  const urlSplited = url.split("/");
  return urlSplited[urlSplited.length - 1];
}

function generateEpisodeList(character) {
  return character.episode.map(url => getEpisodeFromURL(url));
}

function mapCharacterToEpisodes(episodes, character) {
  const characterEpisodes = generateEpisodeList(character);
  let newEpisodes = { ...episodes };
  characterEpisodes.map(episode => {
    if (newEpisodes[episode]) {
      newEpisodes = {
        ...newEpisodes,
        [episode]: [...newEpisodes[episode], character]
      };
      return;
    }

    newEpisodes[episode] = [character];
  });
  return newEpisodes;
}

function generateEpisodesCharacters(characters) {
  return characters.reduce((episodes, character) => {
    return mapCharacterToEpisodes(episodes, character);
  }, {});
}

export {
  isGender,
  filterByGender,
  isAlive,
  filterByStatus,
  getEpisodeFromURL,
  generateEpisodeList,
  mapCharacterToEpisodes,
  generateEpisodesCharacters
};
