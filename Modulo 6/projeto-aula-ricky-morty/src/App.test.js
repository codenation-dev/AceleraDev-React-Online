import React from "react";
import { fireEvent, render, waitForElement } from "@testing-library/react";
import App from "./App";

import data from "./data/data.json";

describe("App", () => {
  beforeEach(() => {
    jest.spyOn(global, "fetch").mockImplementation(() =>
      Promise.resolve({
        status: 200,
        json: () => Promise.resolve(data)
      })
    );
  });

  describe("Status", () => {
    it("shows all characters if clicked on all button", async () => {
      const { findAllByTestId, getByTestId } = render(<App />);

      const button = getByTestId("all-status");

      fireEvent.click(button.childNodes[0]);

      const character = await findAllByTestId("character");

      expect(character.length).toBe(20);
    });

    it("sets status to alive", async () => {
      const { getByText, findAllByTestId } = render(<App />);

      const button = await getByText("Vivo");
      fireEvent.click(button);

      const character = await findAllByTestId("character");

      expect(character.length).toBe(8);
    });

    it("sets status to dead", async () => {
      const { getByText, findAllByTestId } = render(<App />);

      const button = getByText("Morto");
      fireEvent.click(button);

      const character = await findAllByTestId("character");

      expect(character.length).toBe(6);
    });

    it("sets status to unknown", async () => {
      const { findAllByTestId, getByTestId } = render(<App />);

      const button = getByTestId("all-status");

      fireEvent.click(button.childNodes[button.childNodes.length - 1]);

      const character = await findAllByTestId("character");

      expect(character.length).toBe(6);
    });
  });

  describe("Gender", () => {
    it("shows all characters if clicked on all button", async () => {
      const { findAllByTestId, getByTestId } = render(<App />);

      const button = getByTestId("all-genders");

      fireEvent.click(button.childNodes[0]);

      const character = await findAllByTestId("character");

      expect(character.length).toBe(20);
    });

    it("sets gender to Male", async () => {
      const { getByText, findAllByTestId } = render(<App />);

      const button = await getByText("Homem");
      await fireEvent.click(button);

      const character = await findAllByTestId("character");

      expect(character.length).toBe(15);
    });

    it("sets gender to Female", async () => {
      const { getByText, findAllByTestId } = render(<App />);

      const button = getByText("Mulher");
      fireEvent.click(button);

      const character = await findAllByTestId("character");

      expect(character.length).toBe(4);
    });

    it("sets gender to unknown", async () => {
      const { findAllByTestId, getByTestId } = render(<App />);

      const button = getByTestId("all-genders");

      fireEvent.click(button.childNodes[button.childNodes.length - 1]);

      const character = await findAllByTestId("character");

      expect(character.length).toBe(1);
    });
  });

  describe("Episodes", () => {
    it("filter characters by episode 1", async () => {
      const ricky = data.results[0];
      const { findByTestId, findAllByTestId } = render(<App />);

      const select = await findByTestId("select");

      fireEvent.change(select, { target: { value: "1" } });

      const character = await findAllByTestId("character");

      expect(character.length).toBe(2);
      expect(character[0]).toHaveTextContent(ricky.name);
      expect(character[0]).toHaveTextContent(ricky.status);
    });
  });
});
