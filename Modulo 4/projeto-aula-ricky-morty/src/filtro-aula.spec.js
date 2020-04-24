const filtro = require("./filtro-aula");
const data = require("./data/data.json");

describe("Filtro", () => {
  describe("Status", () => {
    it("retorna somente os vivos", () => {
      const response = filtro.filterByStatus(data.results, "Alive");
      expect(response.length).toBe(8);
    });

    it("retorna somente os mortos", () => {
      const response = filtro.filterByStatus(data.results, "Dead");
      expect(response.length).toBe(6);
    });

    it("retorna somente os mortos", () => {
      const response = filtro.filterByStatus(data.results, "unknown");
      expect(response.length).toBe(6);
    });
  });

  describe("Sexo", () => {
    it("retorna somente os Homens", () => {
      const response = filtro.filterByGender(data.results, "Male");
      expect(response.length).toBe(15);
    });

    it("retorna somente as Mulheres", () => {
      const response = filtro.filterByGender(data.results, "Female");
      expect(response.length).toBe(4);
    });
  });

  describe("Episodios", () => {
    it("retorna episode 6 da url", () => {
      const url = "https://rickandmortyapi.com/api/episode/6";
      expect(filtro.getEpisodeFromURL(url)).toBe("6");
    });

    it("retorna um array de numeros dos episodios", () => {
      const personagem = data.results[6];
      expect(personagem.name).toBe("Abradolf Lincler");
      expect(filtro.generateEpisodeList(personagem)).toEqual(["10", "11"]);
    });

    it("retorna um array de numeros dos episodios", () => {
      /**
       * {
       *  [10]: [Ricky, Abradolf],
       *  [11]: [Ricky, Abradolf],
       * }
       */
      const personagem = data.results[6];
      const ricky = data.results[0];
      const episodes = {
        "10": [ricky],
        "11": [ricky]
      };
      const response = filtro.mapCharacterToEpisodes(episodes, personagem);
      expect(response["10"].length).toBe(2);
      expect(response["10"][1].name).toBe(personagem.name);
    });

    it("Retorna somente Rick e Morty para o episodio 1", () => {
      const response = filtro.filterByEpisode(data.results, "1");
      expect(response.length).toBe(2);
      expect(response[1].name).toBe("Morty Smith");
    });
  });
});
