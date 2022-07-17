describe("The Home Page", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("game running test", () => {
    cy.get("input#car-name__input").type("상민, 대환, 명훈, 서현, 준찌");
    cy.get("button.car-name__button").click();

    cy.get("input#game-count__input").type("10");
    cy.get("button.game-count__button").click();
  });

  // it("check race result is normal", () => {});
});
