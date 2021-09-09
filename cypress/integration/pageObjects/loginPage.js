export class Login {
    
    elements = {
      getGoToDriveBtn: () => cy.contains('Go to Drive')
      
    };
  
    goToDrive(){
      this.elements.getGoToDriveBtn().click({force: true});
    }
  }
  
  export const loginPage = new Login();
  