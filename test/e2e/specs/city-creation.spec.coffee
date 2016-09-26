cityManagementPage = require '../pages/city-management.po.coffee'
cityCreationPage = require '../pages/city-creation.po.coffee'

describe 'City Creation when city name is not entered', ->

  Given ->
    cityManagementPage.go()

  When ->
    cityManagementPage.cityCreationLink.click()

  When ->
    cityCreationPage.saveWithCityNotEntered()

  Then ->
    expect(countryCreationPage.openAlertDialog()).toBe(true)

  describe 'create city when the name of city alredy Exist', ->
    When ->
      cityCreationPage.saveWithCityEntered('Peru')

    Then ->
      expect(countryCreationPage.openAlertDialog()).toBe(true)
