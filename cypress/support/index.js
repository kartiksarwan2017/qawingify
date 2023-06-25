Cypress.on('uncaught:exception', (err, runnable) => {
    // Do not fail the test on uncaught exceptions
    return false;
  });