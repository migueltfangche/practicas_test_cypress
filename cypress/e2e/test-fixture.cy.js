/// <reference types="Cypress" />

describe('Test con Studio Cypress', () => {
  var mydata // 1 . creacion de la variable global
  beforeEach('Conexion a Instituto Web login', () => {
    cy.visit('https://www.institutoweb.com.ar/test/login.html')
    cy.fixture('./datos_test') // 2 . conectar con el archivo
    .then(test =>{  // 3 . cuando llegan los datos
      mydata = test // 4 . lo que llega lo paso a mydata
    })
  })


  it('passes', () => {
    mydata.forEach((data) => { // lee renglon a reglon de los 10 datos del json
      cy.visit('https://www.institutoweb.com.ar/test/login.html')
    
      cy.get('#tuusuario').type(data.usuario);
      cy.get('#tuclave').type(data.clave);
      cy.get('#tumail').type(data.email);
      cy.get(':nth-child(8)').click();
      cy.get('h3').should('have.text', 'Acceso correcto!');
      cy.get('#volver').click();
     
    })

    
  })
})