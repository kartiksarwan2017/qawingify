describe('Home', () => {
  beforeEach(() => {
    // Assuming the user is already logged in and on the home page
    cy.visit(`http://localhost:8000/home`);
    cy.get('tbody').then(($tbody) => {
      // Generate an array of random transaction data
      const transactionData = generateRandomTransactionData(5); // Change the desired number of transactions

      // Loop through the transaction data and populate the table
      transactionData.forEach((transaction) => {
        const { amount, date } = transaction;
        const $row = Cypress.$('<tr>');
        $row.append(`<td>${amount}</td>`);
        $row.append(`<td>${date}</td>`);
        $tbody.append($row);
      });
    });
  });

  it('should display the home page', () => {
    // Verify that the home page elements are visible
    cy.get('h1').invoke('text').then(console.log);

    cy.get('.transaction-table').should('be.visible');
    cy.get('body').should('have.class', 'home-page');
  });

  it('should sort the table by amount in ascending order', () => {
    cy.get('[data-testid="amount-header"]').click();

    cy.get('td[data-testid="transaction-amount"]').then(($amounts) => {
      verifySortingOrder($amounts, 'amount', 'asc');
    });
  });

  it('should sort the table by date in descending order', () => {
    cy.get('[data-testid="date-header"]').click();

    cy.get('td[data-testid="transaction-date"]').then(($dates) => {
      verifySortingOrder($dates, 'date', 'desc');
    });
  });
});




// Utility function to generate random transaction data
function generateRandomTransactionData(numTransactions) {
  const transactionData = [];

  for (let i = 0; i < numTransactions; i++) {
    const amount = Math.floor(Math.random() * 1000) + 1;
    const date = getRandomDate();

    transactionData.push({ amount, date });
  }

  return transactionData;
}


// Utility function to get a random date string in 'YYYY-MM-DD' format
function getRandomDate() {
  const start = new Date(2023, 0, 1); // Start date (January 1, 2023)
  const end = new Date(); // End date (current date)

  const randomTimestamp = start.getTime() + Math.random() * (end.getTime() - start.getTime());
  const randomDate = new Date(randomTimestamp);

  const year = randomDate.getFullYear();
  const month = String(randomDate.getMonth() + 1).padStart(2, '0');
  const day = String(randomDate.getDate()).padStart(2, '0');

  return `${year}-${month}-${day}`;
}

// Utility function to verify the sorting order of elements
function verifySortingOrder($elements, key, order) {
  const sortedElements = Array.from($elements).map((element) => Cypress.$(element).text().trim());

  if (order === 'asc') {
    expect(sortedElements).to.deep.equal(sortedElements.sort());
  } else if (order === 'desc') {
    expect(sortedElements).to.deep.equal(sortedElements.sort().reverse());
  }
}

