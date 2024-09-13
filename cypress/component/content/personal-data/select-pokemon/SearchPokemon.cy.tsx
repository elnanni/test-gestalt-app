import * as React from "react";
import SearchPokemon from "../../../../../src/content/SearchPokemon";

describe("Validates Select Pokemon", () => {
  it("Validates choose a Pokemon", () => {
    cy.mount(<SearchPokemon />);
    cy.get('[data-test-id="choose-pokemon"]').should("be.visible");
    cy.get('[data-test-id="choose-pokemon-legend"]').should(
      "contain",
      "Choose a Pokemon",
    );
    cy.get('[data-test-id="test-searchfield-search-icon"]').should(
      "be.visible",
    );
    cy.get('[data-test-id="test-searchfield"]')
      .clear({ force: true })
      .type("bu", { force: true });
    cy.get('[data-test-id="test-searchfield-cancel-icon"]').should(
      "be.visible",
    );
    cy.get('[data-test-id="test-searchfield-search-icon"]').should("not.exist");
  });
  it("Validates choose a Pokemon auto complete", () => {
    cy.mount(<SearchPokemon />);
    cy.get('[data-test-id="test-searchfield"]').clear().type("bu");
    cy.get('[data-test-id="filtered-pokemons"]').should("have.length", 5);
    const pokemonsFiltered = [
      "bulbasaur",
      "butterfree",
      "electabuzz",
      "kabuto",
      "kabutops",
    ];
    let currentPokemon = 0;
    cy.get('[data-test-id="filtered-pokemons"] [data-test-id]').each(
      ($els, index, $list) => {
        cy.wrap($els[0]).should("contain", pokemonsFiltered[currentPokemon++]);
      },
    );
  });
  it("Validates select a Pokemon", () => {
    cy.mount(<SearchPokemon />);
    cy.get('[data-test-id="test-searchfield"]').clear().type("pikachu");
    cy.get('[data-test-id="filtered-pokemons"]').click();
    cy.get('[data-test-id="test-searchfield"]').should(
      "have.attr",
      "value",
      "pikachu",
    );
    cy.get('[data-test-id="test-searchfield-cancel-icon"]').should(
      "be.visible",
    );
  });
  it("Validates clear Pokemon selected by using cancel icon", () => {
    cy.mount(<SearchPokemon />);
    cy.get('[data-test-id="test-searchfield"]').clear().type("pikachu");
    cy.get('[data-test-id="filtered-pokemons"]').click();
    cy.get('[data-test-id="test-searchfield-cancel-icon"]').click();
    cy.get('[data-test-id="choose-pokemon-legend"]').click();
    cy.get('[data-test-id="test-searchfield-cancel-icon"]').should("not.exist");
    cy.get('[data-test-id="test-searchfield-search-icon"]').should(
      "be.visible",
    );
    cy.get('[data-test-id="test-searchfield"]').should(
      "have.attr",
      "value",
      "",
    );
  });
});
