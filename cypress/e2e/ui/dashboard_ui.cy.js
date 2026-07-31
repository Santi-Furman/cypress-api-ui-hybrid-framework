import inventoryPage from '../../pages/InventoryPage';

describe('UI Testing con Bypass de Login (Hybrid Approach)', () => {

  beforeEach(() => {
    cy.login('standard_user', 'secret_sauce');
  });

  it('Verificar navegación directa al inventario y adición al carrito', () => {
    inventoryPage.verifyPageLoaded();
    inventoryPage.addBackpackToCart();
    inventoryPage.verifyCartBadgeCount('1');
  });

});