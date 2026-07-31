class InventoryPage {
    elements = {
        title: () => cy.get('.title'),
        inventoryItems: () => cy.get('.inventory_item'),
        shoppingCartBadge: () => cy.get('.shopping_cart_badge'),
        addBackpackBtn: () => cy.get('[data-test="add-to-cart-sauce-labs-backpack"]')
    }

    verifyPageLoaded() {
        this.elements.title().should('have.text', 'Products');
    }

    addBackpackToCart() {
        this.elements.addBackpackBtn().click();
    }

    verifyCartBadgeCount(expectedCount) {
        this.elements.shoppingCartBadge().should('have.text', expectedCount);
    }
}

export default new InventoryPage();