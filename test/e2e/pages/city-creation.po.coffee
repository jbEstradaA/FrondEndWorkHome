Page = require('astrolabe').Page

module.exports = Page.create
  url: get: -> browser.baseUrl + '#/cities/create'

  cityNameInput: get: -> element(By.valueBind('cityName'))
  saveButton: get: -> element(By.css('.btn.btn-default'))
  labelForInput: get: -> element(By.css('[for="cityName"]'))

  saveWithCityEntered: value: (citieName) ->
    @cityNameInput.sendKeys(cityName)
    @saveButton.click()

  saveWithCityNotEntered: value: () ->
    @saveButton.click()

  openAlertDialog: value: () ->
    browser.wait () ->
      browser.wait(ExpectedConditions.alertIsPresent(), 5000).then(
        browser.switchTo().alert().then(
          # use alert.accept instead of alert.dismiss which results in a browser crash
          accept = (alert) ->
            alert.accept()
            return true
          , () ->
            return false
        )
      )
