describe('remix-nest', () => {
  beforeEach(() => cy.visit('/'))

  it('should have a title', () => {
    cy.findByRole('heading', { name: 'Welcome to Remix with Nest.js' }).should(
      'be.visible',
    )
  })
})
