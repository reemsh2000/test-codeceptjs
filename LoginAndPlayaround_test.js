Feature("CCC Tests");
// //*********************************************************************** */
// Scenario("1-Access Denied ", async (I) => {
//   I.amOnPage(
//     "https://keycloakrnd.ccc.net/auth/realms/AppsRND/protocol/openid-connect/auth?client_id=frontend&redirect_uri=http%3A%2F%2Flocalhost%3A4200%2Flogin-callback&response_type=code&scope=openid%20profile%20email&state=7e5d6bdeb6534072938af46b9cf84bbb&code_challenge=YYQqwJGM1wMEHtTYqikLad2dwwfy2MiNiX6PK76-0gc&code_challenge_method=S256&response_mode=query"
//   );
//   within("#kc-form-login", () => {
//     I.fillField("#username", "kchoulias");
//     I.fillField("#password", "123");
//     I.click("#kc-login");
//   });
//   await I.amOnPage("http://localhost:4200/profile/admindelegations");
//   I.see("Access Denied");
// });
// ////********************************************************************************************************************************

// Scenario("2-Access Admin", async (I) => {
//   I.amOnPage(
//     "https://keycloakrnd.ccc.net/auth/realms/AppsRND/protocol/openid-connect/auth?client_id=frontend&redirect_uri=http%3A%2F%2Flocalhost%3A4200%2Flogin-callback&response_type=code&scope=openid%20profile%20email&state=7e5d6bdeb6534072938af46b9cf84bbb&code_challenge=YYQqwJGM1wMEHtTYqikLad2dwwfy2MiNiX6PK76-0gc&code_challenge_method=S256&response_mode=query"
//   );
//   within("#kc-form-login", () => {
//     I.fillField("#username", "gmoubarak");
//     I.fillField("#password", "123");
//     I.click("#kc-login");
//   });
//   await I.amOnPage("http://localhost:4200/profile/admindelegations");
//   await I.waitForElement("#search_container", 5);
//   within("#search_container", () => {
//     I.fillField("#employeeName", "Robert");
//     const selected = locate('//*[@id="Robert"]');
//     I.click(selected);
//   });
//   await I.waitForElement("#card", 25);
//   within("#card", () => {
//     I.see("Secretary");
//   });
// });


// ////********************************************************************************************************************************// ********************************************************************************************************************************

Scenario("3-create new delegation Admin", async (I) => {
  I.amOnPage(
    "https://keycloakrnd.ccc.net/auth/realms/AppsRND/protocol/openid-connect/auth?client_id=frontend&redirect_uri=http%3A%2F%2Flocalhost%3A4200%2Flogin-callback&response_type=code&scope=openid%20profile%20email&state=7e5d6bdeb6534072938af46b9cf84bbb&code_challenge=YYQqwJGM1wMEHtTYqikLad2dwwfy2MiNiX6PK76-0gc&code_challenge_method=S256&response_mode=query"
  );
  await within("#kc-form-login", async () => {
    I.fillField("#username", "gmoubarak");
    I.fillField("#password", "123");
    await I.click("#kc-login");
  });
  await I.wait(2)
  await I.amOnPage("http://localhost:4200/profile/admindelegations/add/1");
  within(".profile-content", () => {
    I.see("Add new delegation role");
    I.fillField("#decription", "test");
    I.click("#roleId");
    const selectedFromDropDown = '//*[@id="23"]';
    I.click(selectedFromDropDown);
    I.fillField("#emploee", "ABED");
    const required = '//*[@id="ABED AL RAHMAN"]';
    I.click(required);
    const dateRangeEle = '//*[@id="end"]';
    I.click(dateRangeEle);
    I.click('//*[@id="mat-datepicker-0"]/mat-calendar-header/div/div/button[3]')
    const startDate =
      '//*[@id="mat-datepicker-0"]/div/mat-month-view/table/tbody/tr[1]/td[2]/div[1]';
    const endDate =
    '//*[@id="mat-datepicker-0"]/div/mat-month-view/table/tbody/tr[2]/td[5]/div[1]';
    I.click(startDate);
    I.click(endDate);
    I.click("#save");
  });
  await I.amOnPage("http://localhost:4200/profile/admindelegations");
});
// // ********************************************************************************************************************************
// Scenario("2-Access Denied faild", async (I) => {
//   I.amOnPage(
//     "https://keycloakrnd.ccc.net/auth/realms/AppsRND/protocol/openid-connect/auth?client_id=frontend&redirect_uri=http%3A%2F%2Flocalhost%3A4200%2Flogin-callback&response_type=code&scope=openid%20profile%20email&state=7e5d6bdeb6534072938af46b9cf84bbb&code_challenge=YYQqwJGM1wMEHtTYqikLad2dwwfy2MiNiX6PK76-0gc&code_challenge_method=S256&response_mode=query"
//   );
//   await within("#kc-form-login", async () => {
//     I.fillField("#username", "gmoubarak");
//     I.fillField("#password", "123");
//     await I.click("#kc-login");
//   });
//   await I.wait(2)
//   await I.amOnPage("http://localhost:4200/profile/admindelegations");
//   I.dontSee("Access Denied");
// });
// // // ********************************************************************************************************************************
// Scenario("5-delete delegation", async (I) => {
//   I.amOnPage(
//     "https://keycloakrnd.ccc.net/auth/realms/AppsRND/protocol/openid-connect/auth?client_id=frontend&redirect_uri=http%3A%2F%2Flocalhost%3A4200%2Flogin-callback&response_type=code&scope=openid%20profile%20email&state=7e5d6bdeb6534072938af46b9cf84bbb&code_challenge=YYQqwJGM1wMEHtTYqikLad2dwwfy2MiNiX6PK76-0gc&code_challenge_method=S256&response_mode=query"
//   );
//   within("#kc-form-login", () => {
//     I.fillField("#username", "gmoubarak");
//     I.fillField("#password", "123");
//     I.click("#kc-login");
//   });
//   await I.amOnPage("http://localhost:4200/profile/admindelegations");
//   I.see("Check Employee Delegations");
//   within("#search_container", () => {
//     I.fillField("#employeeName", "Robert");
//     const selected = locate('//*[@id="Robert"]');
//     I.click(selected);
//   });
//  await I.waitForElement('#card',25)

//    within("#card", () => {
//     const deleteIcon =
//       '//*[@id="card"]/cdk-virtual-scroll-viewport/div[1]/mat-card[3]/div/mat-card-title/div/span[3]/div/button[2]/span[1]/mat-icon';
//     I.click(deleteIcon);
//   });
//   const confirmation =
//   '//*[@id="mat-dialog-2"]/app-delete-confirm/mat-dialog-actions/button[2]';
//  await  I.click(confirmation);
// });
