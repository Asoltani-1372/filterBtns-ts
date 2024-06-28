//enums
enum Buttons {
    Create = "CREATE",
    Edit = "EDIT",
    Delete = "DELETE",
    View = "VIEW"
  }
  
  enum UserRoles {
    Admin = "ADMIN",
    Editor = "EDITOR",
    Viewer = "VIEWER"
  }
  
  // Create a map for each Role
  const roleButtonMap = {
    [UserRoles.Admin]: [Buttons.Create, Buttons.Edit, Buttons.Delete, Buttons.View],
    [UserRoles.Editor]: [Buttons.Edit, Buttons.View],
    [UserRoles.Viewer]: [Buttons.View]
  };
  
  function filterButtonsForRole(buttons: Buttons[], userRole: UserRoles) : HTMLButtonElement[] {
    // get all the buttons
    const allUiButtons = document.querySelectorAll<HTMLButtonElement>("#btn")
    // convert it to Array
    const allUiButtonsArray = Array.from(allUiButtons)
    // create classlist Array based on MAP
    const allowedButtons = roleButtonMap[userRole] || [];
    const filteredButtons = buttons.filter(button => allowedButtons.includes(button));
    // filter all buttons based on classname
    return allUiButtonsArray.filter(uiBTn => filteredButtons.some(className => uiBTn.classList.contains(className)))
  }
  

const buttonsToFilter = [Buttons.Create, Buttons.Edit, Buttons.Delete, Buttons.View];

const adminButtons = filterButtonsForRole(buttonsToFilter, UserRoles.Editor);
console.log(adminButtons) 