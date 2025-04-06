describe("Counter App", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("increments the counter to 1 when clicking increment", () => {
    cy.contains("increment").click();
    cy.contains("1");
  });
});
