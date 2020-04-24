const filter = require("./filter");
const data = require("./data/data.json");

describe("Filter", () => {
  describe("Gender", () => {
    it("Filtra por Male", () => {
      const response = filter.filterByGender(data.results, "Male");
      expect(response.length).toBe(15);
      expect(data.results.length).toBe(20);
    });

    it("Filtra por Female", () => {
      const response = filter.filterByGender(data.results, "Female");
      expect(response.length).toBe(4);
      expect(data.results.length).toBe(20);
    });

    it("Filtra por unknown", () => {
      const response = filter.filterByGender(data.results, "unknown");
      expect(response.length).toBe(1);
      expect(data.results.length).toBe(20);
    });

    it("retorna true se gender é o mesmo", () => {
      const response = filter.isGender(data.results[0], "Male");
      expect(response).toBe(true);
    });

    it("retorna false se gender não é o mesmo", () => {
      const response = filter.isGender(data.results[3], "Male");
      expect(response).toBe(false);
    });
  });

  describe("Gender", () => {
    it("Filtra por Dead", () => {
      const response = filter.filterByStatus(data.results, "Dead");
      expect(response.length).toBe(6);
    });

    it("Filtra por Alive", () => {
      const response = filter.filterByStatus(data.results, "Alive");
      expect(response.length).toBe(8);
    });

    it("Filtra por unknown", () => {
      const response = filter.filterByStatus(data.results, "unknown");
      expect(response.length).toBe(6);
    });

    it("retorna false se status não é o mesmo", () => {
      const response = filter.isAlive(data.results[3], "Dead");
      expect(response).toBe(false);
    });
  });

  describe("getEpisodeFromURL", () => {
    it("retorna episode 1", () => {
      const url = "https://rickandmortyapi.com/api/episode/1";
      const response = filter.getEpisodeFromURL(url);
      expect(response).toBe("1");
    });

    it("retorna episode 15", () => {
      const url = "https://rickandmortyapi.com/api/episode/15";
      const response = filter.getEpisodeFromURL(url);
      expect(response).toBe("15");
    });

    it("retorna episode 1500", () => {
      const url = "https://rickandmortyapi.com/api/episode/1500";
      const response = filter.getEpisodeFromURL(url);
      expect(response).toBe("1500");
    });
  });

  describe("generateEpisodeList", () => {
    it("retorna lista de episodios corretamente", () => {
      const character = data.results[0];
      const response = filter.generateEpisodeList(character);
      expect(response).toEqual([
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "10",
        "11",
        "12",
        "13",
        "14",
        "15",
        "16",
        "17",
        "18",
        "19",
        "20",
        "21",
        "22",
        "23",
        "24",
        "25",
        "26",
        "27",
        "28",
        "29",
        "30",
        "31"
      ]);
      expect(response.length).toBe(31);
    });
  });

  describe("addEpisode", () => {
    it("adiciona character para o objeto de episodios", () => {
      const character = data.results[2];
      const episodes = { "1": [data.results[0].name] };
      const response = filter.mapCharacterToEpisodes(episodes, character);
      expect(response["10"][0].name).toEqual("Summer Smith");
    });
  });

  describe("generateEpisodesCharacters", () => {
    it("gera lista de episódios com os characters", () => {
      const response = filter.generateEpisodesCharacters(data.results);
      expect(response["1"].length).toBe(2);
      expect(response["6"].length).toBe(5);
    });
  });
});
