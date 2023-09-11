import { Then, When } from "@cucumber/cucumber";
import { HomePage} from "../pages/homePage.page";
import { pageFixture } from "../setup/pageFixture";

let admin: HomePage







When('admin clicks the dropdown arror in the top right corner', async function () {
   admin = new HomePage(pageFixture.page);
   admin.clickArrowBtn()
  });


  When('logout option appears', async function () {
    admin.checkLogOutOption()
  });

  When('admin clicks the logout button', async function () {
    admin.logOut()
    admin.confirmLogOut()
  });

  Then('admin should be succesfully logged out', async function () {
    
  });
