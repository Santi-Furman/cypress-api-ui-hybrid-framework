describe('Pruebas de Integración Backend - API Users', () => {

  const baseUrl = 'https://jsonplaceholder.typicode.com';

  it('GET /users - Obtener lista de usuarios y validar contrato', () => {
    cy.request('GET', `${baseUrl}/users`).then((response) => {
      // 1. Validar que el código de estado sea HTTP 200 (OK)
      expect(response.status).to.eq(200);

      // 2. Verificar que 'response.body' sea un Array y tenga más de 0 elementos.
      expect(response.body).to.be.an('array').and.not.be.empty;
    });
  });

  it('POST /users - Crear un nuevo usuario exitosamente', () => {
    const newUser = {
      name: 'Santi QA',
      username: 'santiqa',
      email: 'santi@testing.com'
    };

    cy.request('POST', `${baseUrl}/users`, newUser).then((response) => {
      // 1. Validar código de creación exitosa HTTP 201
      expect(response.status).to.eq(201);

      // 2. Validar que la respuesta devuelva el mismo nombre enviado
      expect(response.body.name).to.eq(newUser.name);

      // 3. Validar que la respuesta contenga la propiedad 'id'
      expect(response.body).to.have.property('id');
    });
  });

});