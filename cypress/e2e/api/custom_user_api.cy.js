describe('API Testing con Fixtures y Custom Commands', () => {

  it('POST /users - Crear usuario usando fixture y custom command', () => {
    // 1. Cargamos el archivo JSON desde la carpeta fixtures
    cy.fixture('newUserPayload').then((userData) => {
      
      // 2. Ejecutamos nuestro Custom Command
      cy.createUserApi(userData).then((response) => {
        expect(response.status).to.eq(201);
        expect(response.body.name).to.eq(userData.name);
        expect(response.body.company.name).to.eq(userData.company.name);
        expect(response.body).to.have.property('id');
      });

    });
  });

});