describe ('login', () => {
    it ("login, search for the item: Macbook, on the search bar.", () => {
        cy.register ('applytesters@mydomain.com', 'Apply123!!!');
        cy.search('search');
        cy.logout('logout');
    })
})