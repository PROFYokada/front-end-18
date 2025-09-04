import Home from "./Home";

describe("Página Home", () => {
  it("deve carregar o título corretamente", () => {
    cy.visit("http://localhost:3000");
    cy.contains("Bem-vindo ao Projeto React!");
  });
});
