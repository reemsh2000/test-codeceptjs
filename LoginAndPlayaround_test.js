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
Scenario("after login", async (I) => {
  I.amOnPage(
    "https://keycloakrnd.ccc.net/auth/realms/AppsRND/protocol/openid-connect/auth?client_id=frontend&redirect_uri=http%3A%2F%2Flocalhost%3A4200%2Flogin-callback&response_type=code&scope=openid%20profile%20email&state=7e5d6bdeb6534072938af46b9cf84bbb&code_challenge=YYQqwJGM1wMEHtTYqikLad2dwwfy2MiNiX6PK76-0gc&code_challenge_method=S256&response_mode=query"
  );
  within("#kc-form-login", () => {
    I.fillField("#username", "gmoubarak");
    I.fillField("#password", "123");
    I.click("#kc-login");
  });
  pause();
  I.amOnPage("http://localhost:4200/project/1/org-chart-hierarchy");
  I.see("Managing Office Athens");
  within("#search_container", () => {
    I.fillField("#employee", "Gerard Moubarak");
    I.fillField("#position", "Timecard Approval");
    I.fillField("#level", "1");
    I.fillField("#order", "Asc");
    I.fillField("#type", "All");
    I.click("#search");
    I.click("#search");
    pause();
  });
  within("#result", () => {
    I.see("Ghassan Tabanji");
    I.saveScreenshot("aftersearch.jpg");
  });
  // pause()
});
