Feature("LoginNavigate");

// Scenario('Login to Demo site', (I) => {
// I.amOnPage('http://localhost:4200/project/1/org-chart-hierarchy')

//     I.amOnPage('https://github.com/login');
//     within('#login', () => {
//       I.fillField('#login_field', 'sh951652@gmail.com');
//       I.fillField('#password', '0592555602reem');
//       I.click('.js-sign-in-button');
//       I.saveScreenshot("loggedIn.jpg")
//     });
//     I.see('reemsh2000');
//     I.saveScreenshot("afterlogin.jpg")
//     // I.see('There were problems creating your account.');
//     // I.see('There were problems creating your account.');

// });
// Scenario("after login", async (I) => {
//   I.amOnPage(
//     "https://keycloakrnd.ccc.net/auth/realms/AppsRND/protocol/openid-connect/auth?client_id=frontend&redirect_uri=http%3A%2F%2Flocalhost%3A4200%2Flogin-callback&response_type=code&scope=openid%20profile%20email&state=7e5d6bdeb6534072938af46b9cf84bbb&code_challenge=YYQqwJGM1wMEHtTYqikLad2dwwfy2MiNiX6PK76-0gc&code_challenge_method=S256&response_mode=query"
//   );
//   within("#kc-form-login", () => {
// I.fillField("#username", "gmoubarak");
//   I.fillField("#username", "kchoulias");
//   I.fillField("#password", "123");
//   I.click("#kc-login");
// });
// pause();
// I.amOnPage("")
// I.amOnPage("http://localhost:4200/project/1/org-chart-hierarchy");
// I.see("Managing Office Athens");
// within("#search_container", () => {
//   I.fillField("#employee", "Gerard Moubarak");
//   I.fillField("#position", "Timecard Approval");
//   I.fillField("#level", "1");
//   I.fillField("#order", "Asc");
//   I.fillField("#type", "All");
//   I.click("#search");
//   I.click("#search");
//   pause();
// });
// within("#result", () => {
//   I.see("Ghassan Tabanji");
//   I.saveScreenshot("aftersearch.jpg");
// });
// pause()

// });
// ********************************************************************************************************************************

// Scenario("1-Access Denied", async (I) => {
//   I.amOnPage(
//     "https://keycloakrnd.ccc.net/auth/realms/AppsRND/protocol/openid-connect/auth?client_id=frontend&redirect_uri=http%3A%2F%2Flocalhost%3A4200%2Flogin-callback&response_type=code&scope=openid%20profile%20email&state=7e5d6bdeb6534072938af46b9cf84bbb&code_challenge=YYQqwJGM1wMEHtTYqikLad2dwwfy2MiNiX6PK76-0gc&code_challenge_method=S256&response_mode=query"
//   );
//   within("#kc-form-login", () => {
//     // I.fillField("#username", "gmoubarak");
//     I.fillField("#username", "kchoulias");
//     I.fillField("#password", "123");
//     I.click("#kc-login");
//   });
//   pause();
//   I.amOnPage("http://localhost:4200/profile/admindelegations");
//   I.see("Access Denied");
//   I.saveScreenshot("accessDenied.jpg");
// });
// ********************************************************************************************************************************
// Scenario("2-Access Denied faild", async (I) => {
//   I.amOnPage(
//     "https://keycloakrnd.ccc.net/auth/realms/AppsRND/protocol/openid-connect/auth?client_id=frontend&redirect_uri=http%3A%2F%2Flocalhost%3A4200%2Flogin-callback&response_type=code&scope=openid%20profile%20email&state=7e5d6bdeb6534072938af46b9cf84bbb&code_challenge=YYQqwJGM1wMEHtTYqikLad2dwwfy2MiNiX6PK76-0gc&code_challenge_method=S256&response_mode=query"
//   );
//   within("#kc-form-login", () => {
//     I.fillField("#username", "gmoubarak");
//     I.fillField("#password", "123");
//     I.click("#kc-login");
//   });
//   pause();
//   I.amOnPage("http://localhost:4200/profile/admindelegations");
//   I.see("Access Denied");
//   I.saveScreenshot("accessDeniedFaild.jpg");
// });
// ********************************************************************************************************************************// ********************************************************************************************************************************

// Scenario("3-Access Admin", (I) => {
//   I.amOnPage(
//     "https://keycloakrnd.ccc.net/auth/realms/AppsRND/protocol/openid-connect/auth?client_id=frontend&redirect_uri=http%3A%2F%2Flocalhost%3A4200%2Flogin-callback&response_type=code&scope=openid%20profile%20email&state=7e5d6bdeb6534072938af46b9cf84bbb&code_challenge=YYQqwJGM1wMEHtTYqikLad2dwwfy2MiNiX6PK76-0gc&code_challenge_method=S256&response_mode=query"
//   );
//   within("#kc-form-login", () => {
//     I.fillField("#username", "gmoubarak");
//     I.fillField("#password", "123");
//     I.click("#kc-login");
//   });
//   pause();
//   I.amOnPage("http://localhost:4200/profile/admindelegations");
//   I.see("Check Employee Delegations");
//   I.saveScreenshot("accessDeniedFaild.jpg");
//   within("#search_container", () => {
//     I.fillField("#employeeName", "Robert");
//     pause();
//     const selected = locate('//*[@id="Robert"]');
//     I.click(selected);
//   });
//   pause();
//   within("#card", () => {
//     I.see("No Delegation Rules Found");
//   });
// });

// ********************************************************************************************************************************
// Scenario("4-create new delegation Admin", (I) => {
//   I.amOnPage(
//     "https://keycloakrnd.ccc.net/auth/realms/AppsRND/protocol/openid-connect/auth?client_id=frontend&redirect_uri=http%3A%2F%2Flocalhost%3A4200%2Flogin-callback&response_type=code&scope=openid%20profile%20email&state=7e5d6bdeb6534072938af46b9cf84bbb&code_challenge=YYQqwJGM1wMEHtTYqikLad2dwwfy2MiNiX6PK76-0gc&code_challenge_method=S256&response_mode=query"
//   );
//   within("#kc-form-login", () => {
//     I.fillField("#username", "gmoubarak");
//     I.fillField("#password", "123");
//     I.click("#kc-login");
//   });
//   pause();
//   I.amOnPage("http://localhost:4200/profile/admindelegations/add/1");
//   within(".profile-content", () => {
//     I.see("Add new delegation role");
//     I.fillField("#decription", "test");
//     I.click('#roleId')
//     const selectedFromDropDown ='//*[@id="23"]'
//     I.click(selectedFromDropDown)
//     I.fillField("#emploee", "ABED");
//     const required = '//*[@id="ABED AL RAHMAN"]'
//     I.click(required)
//     const dateRangeEle='//*[@id="end"]'
//     I.click(dateRangeEle)
//     const startDate = '//*[@id="mat-datepicker-0"]/div/mat-month-view/table/tbody/tr[4]/td[2]'
//     const endDate = '//*[@id="mat-datepicker-0"]/div/mat-month-view/table/tbody/tr[4]/td[3]'
//    I.click(startDate)
//    I.click(endDate)
//     I.click('#save');
//   });
//   pause();
//   I.amOnPage("http://localhost:4200/profile/admindelegations");
// });

// ********************************************************************************************************************************
Scenario("5-delete delegation", (I) => {
  I.amOnPage(
    "https://keycloakrnd.ccc.net/auth/realms/AppsRND/protocol/openid-connect/auth?client_id=frontend&redirect_uri=http%3A%2F%2Flocalhost%3A4200%2Flogin-callback&response_type=code&scope=openid%20profile%20email&state=7e5d6bdeb6534072938af46b9cf84bbb&code_challenge=YYQqwJGM1wMEHtTYqikLad2dwwfy2MiNiX6PK76-0gc&code_challenge_method=S256&response_mode=query"
  );
  within("#kc-form-login", () => {
    I.fillField("#username", "gmoubarak");
    I.fillField("#password", "123");
    I.click("#kc-login");
  });
  pause();
  I.amOnPage("http://localhost:4200/profile/admindelegations");
  I.see("Check Employee Delegations");
  within("#search_container", () => {
    I.fillField("#employeeName", "Robert");
    pause();
    const selected = locate('//*[@id="Robert"]');
    I.click(selected);
  });
  pause();
  within("#card", () => {
    const deleteIcon =
      '//*[@id="card"]/cdk-virtual-scroll-viewport/div[1]/mat-card[5]/div/mat-card-title/div/span[3]/div/button[2]/span[1]/mat-icon';
    I.click(deleteIcon);
  });
  const confirmation =
    '//*[@id="mat-dialog-2"]/app-delete-confirm/mat-dialog-actions/button[2]';
  I.click(confirmation);
  pause();
});
