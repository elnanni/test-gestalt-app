import * as React from "react";
import PersonalData from "../../../../../src/content/PersonalData";

describe("Validates Personal data UI", () => {
  it("Validates Personal data choose a Pokemon", () => {
    cy.mount(<PersonalData />);
    cy.get('[id="personal-data-0"]').click();
    cy.get('[data-test-id="choose-pokemon"]').should("be.visible");
    cy.get('[data-test-id="choose-pokemon-legend"]').should(
      "contain",
      "Choose a Pokemon",
    );
    cy.get('[data-test-id="test-searchfield-search-icon"]').should(
      "be.visible",
    );
    cy.get('[data-test-id="test-searchfield"]').clear().type("bu");
    cy.get('[data-test-id="test-searchfield-cancel-icon"]').should(
      "be.visible",
    );
    cy.get('[data-test-id="test-searchfield-search-icon"]').should("not.exist");
  });
  it("Validates Personal data choose a Pokemon auto complete", () => {
    cy.mount(<PersonalData />);
    cy.get('[id="personal-data-0"]').click();
    cy.get('[data-test-id="test-searchfield"]').clear().type("bu");
    cy.get('[data-test-id="test-search-accordion-text"]').should(
      "contain",
      "Search Pokemon",
    );
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
  it("Validates Personal data select a Pokemon", () => {
    cy.mount(<PersonalData />);
    cy.get('[id="personal-data-0"]').click();
    cy.get('[data-test-id="test-searchfield"]').clear().type("pikachu");
    cy.get('[data-test-id="filtered-pokemons"]').click();
    cy.get('[data-test-id="test-search-accordion-text"]').should("not.exist");
    cy.get('[data-test-id="test-searchfield"]').should(
      "have.attr",
      "value",
      "pikachu",
    );
    cy.get('[data-test-id="test-searchfield-cancel-icon"]').should(
      "be.visible",
    );
  });
  it("Validates Personal data clear Pokemon selected by using cancel icon", () => {
    cy.mount(<PersonalData />);
    cy.get('[id="personal-data-0"]').click();
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
