"use strict";
//enums
var Buttons;
(function (Buttons) {
    Buttons["Create"] = "CREATE";
    Buttons["Edit"] = "EDIT";
    Buttons["Delete"] = "DELETE";
    Buttons["View"] = "VIEW";
})(Buttons || (Buttons = {}));
var UserRoles;
(function (UserRoles) {
    UserRoles["Admin"] = "ADMIN";
    UserRoles["Editor"] = "EDITOR";
    UserRoles["Viewer"] = "VIEWER";
})(UserRoles || (UserRoles = {}));
// Create a map for each Role
const roleButtonMap = {
    [UserRoles.Admin]: [Buttons.Create, Buttons.Edit, Buttons.Delete, Buttons.View],
    [UserRoles.Editor]: [Buttons.Edit, Buttons.View],
    [UserRoles.Viewer]: [Buttons.View]
};
function filterButtonsForRole(buttons, userRole) {
    // get all the buttons
    const allUiButtons = document.querySelectorAll("#btn");
    // convert it to Array
    const allUiButtonsArray = Array.from(allUiButtons);
    // create classlist Array based on MAP
    const allowedButtons = roleButtonMap[userRole] || [];
    const filteredButtons = buttons.filter(button => allowedButtons.includes(button));
    // filter all buttons based on classname
    return allUiButtonsArray.filter(uiBTn => filteredButtons.some(className => uiBTn.classList.contains(className)));
}
const buttonsToFilter = [Buttons.Create, Buttons.Edit, Buttons.Delete, Buttons.View];
const adminButtons = filterButtonsForRole(buttonsToFilter, UserRoles.Editor);
console.log(adminButtons);
