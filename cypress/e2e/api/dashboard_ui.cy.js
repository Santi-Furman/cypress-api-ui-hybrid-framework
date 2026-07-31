import inventoryPage from '../../pages/InventoryPage';

describe('UI Testing con Bypass de Login (Hybrid Approach)', () => {

  beforeEach(() => {
    // Inyectamos la sesión antes de cargar la página
    cy.loginByCookie('standard_user');
    cy.visit('/inventory.html');
  });

  it('Verificar navegación directa al inventario y adición al carrito', () => {
    inventoryPage.verifyPageLoaded();
    inventoryPage.addBackpackToCart();
    inventoryPage.verifyCartBadgeCount('1');
  });

});