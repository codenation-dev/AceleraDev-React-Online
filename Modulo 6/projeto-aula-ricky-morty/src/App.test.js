import React from "react";
import {
  fireEvent,
  render,
  waitForElement,
  getByTestId,
} from "@testing-library/react";
import App from "./App";

describe("App", () => {
  describe("Status", () => {
    it("shows all characters if clicked on all button", async () => {
      const { getAllByTestId, getByTestId } = render(<App />);

      const button = await waitForElement(() => getByTestId("all-status"));

      fireEvent.click(button.childNodes[0]);

      const character = await waitForElement(() => getAllByTestId("character"));

      expect(character.length).toBe(20);
    });

    it("sets status to alive", async () => {
      const { getByText, getAllByTestId } = render(<App />);

      const button = await waitForElement(() => getByText("Vivo"));
      fireEvent.click(button);

      const character = await waitForElement(() => getAllByTestId("character"));

      expect(character.length).toBe(8);
    });

    it("sets status to dead", async () => {
      const { getByText, getAllByTestId } = render(<App />);

      const button = await waitForElement(() => getByText("Morto"));
      fireEvent.click(button);

      const character = await waitForElement(() => getAllByTestId("character"));

      expect(character.length).toBe(6);
    });

    it("sets status to unknown", async () => {
      const { getAllByTestId, getByTestId } = render(<App />);

      const button = await waitForElement(() => getByTestId("all-status"));

      fireEvent.click(button.childNodes[button.childNodes.length - 1]);

      const character = await waitForElement(() => getAllByTestId("character"));

      expect(character.length).toBe(6);
    });
  });

  describe("Gender", () => {
    it("shows all characters if clicked on all button", async () => {
      const { getAllByTestId, getByTestId } = render(<App />);

      const button = await waitForElement(() => getByTestId("all-genders"));

      fireEvent.click(button.childNodes[0]);

      const character = await waitForElement(() => getAllByTestId("character"));

      expect(character.length).toBe(20);
    });

    it("sets gender to Male", async () => {
      const { getByText, getAllByTestId } = render(<App />);

      const button = await waitForElement(() => getByText("Homem"));
      fireEvent.click(button);

      const character = await waitForElement(() => getAllByTestId("character"));

      expect(character.length).toBe(15);
    });

    it("sets gender to Female", async () => {
      const { getByText, getAllByTestId } = render(<App />);

      const button = await waitForElement(() => getByText("Mulher"));
      fireEvent.click(button);

      const character = await waitForElement(() => getAllByTestId("character"));

      expect(character.length).toBe(4);
    });

    it("sets gender to unknown", async () => {
      const { getAllByTestId, getByTestId } = render(<App />);

      const button = await waitForElement(() => getByTestId("all-genders"));

      fireEvent.click(button.childNodes[button.childNodes.length - 1]);

      const character = await waitForElement(() => getAllByTestId("character"));

      expect(character.length).toBe(1);
    });
  });

  describe("Episodes", () => {
    it("filter characters by episode 1", async () => {
      const { findByTestId, getAllByTestId } = render(<App />);

      const select = await findByTestId("select");

      fireEvent.change(select, { target: { value: "1" } });

      const character = await waitForElement(() => getAllByTestId("character"));

      expect(character.length).toBe(2);
    });
  });
});
