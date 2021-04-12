// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.



require("@rails/ujs").start()

require("@rails/ujs").start()

require("turbolinks").start()

require("@rails/activestorage").start()

require("channels")

require("jquery")

import '../css/application'

import 'materialize-css/dist/js/materialize'

import 'material-design-icons'

//$( document ).ready(function) block

$(document).on('turbolinks:load', function () {

    $(".dropdown-trigger").dropdown();

})

