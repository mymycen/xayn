describe("Counter App", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it('increments to 1 when "increment" is clicked', () => {
    cy.contains("increment").click();
    cy.contains("1");
  });

  it('does not go below 0 when "decrement" is clicked at 0', () => {
    cy.contains("decrement").click();
    cy.contains("0");
  });

  it("increments then decrements back to 0", () => {
    cy.contains("increment").click();
    cy.contains("decrement").click();
    cy.contains("0");
  });
});
