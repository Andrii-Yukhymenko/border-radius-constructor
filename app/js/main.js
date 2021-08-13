"use strict";

var figure = document.querySelector('.figure'),
    borderInputs = document.querySelectorAll('.figure__border-input'),
    figureResult = figure.querySelector('.figure__result'),
    checkboxCss = document.querySelector('input#css'),
    checkboxWebkit = document.querySelector('input#webkit'),
    checkboxGecko = document.querySelector('input#gecko'),
    checkboxList = document.querySelector('.figure__checkbox-list');
figure.addEventListener('input', function (event) {
  if (event.target.classList.contains('figure__border-input--top-left') || event.target.classList.contains('figure__border-input--top-right') || event.target.classList.contains('figure__border-input--bottom-left') || event.target.classList.contains('figure__border-input--bottom-right')) {
    calculate();
  }
});
checkboxList.addEventListener('click', function (event) {
  if (event.target.classList.contains('checkbox__input')) {
    calculate();
  }
});

function calculate() {
  figureResult.innerText = '';
  figure.style = '';
  borderInputs.forEach(function (item) {
    if (item.value !== '' && item.value !== null) {
      var position = item.id;

      if (checkboxCss.checked === true) {
        figureResult.innerHTML += 'border-' + position + '-radius: ' + item.value + 'px; <br>';
      }

      if (checkboxWebkit.checked === true) {
        figureResult.innerHTML += '-webkit-border-' + position + '-radius: ' + item.value + 'px; <br>';
      }

      if (checkboxGecko.checked === true) {
        figureResult.innerHTML += '-moz-border-radius-' + position + ': ' + item.value + 'px; <br>';
      }

      var reformatPosition = reformatStyles(position);
      console.log(reformatPosition);
      var radiusValue = {};
      var radiusPosition = 'border' + reformatPosition + 'Radius';
      radiusValue[radiusPosition] = item.value + 'px';
      console.log(radiusValue);
      Object.assign(figure.style, radiusValue);
      console.log(figure.style);
    }
  });
} // function renderBorders() {
//   figure.style = '';
//   borderInputs.forEach((item) =>{
//     let radiusValue = 'border-' + position + '-radius: ' + item.value + 'px;'
//   })
// }


function reformatStyles(p) {
  var reformatedStyles = p.split('-');
  reformatedStyles = reformatedStyles[0].charAt(0).toUpperCase() + reformatedStyles[0].slice(1).toLowerCase() + reformatedStyles[1].charAt(0).toUpperCase() + reformatedStyles[1].slice(1).toLowerCase();
  return reformatedStyles;
}
//# sourceMappingURL=main.js.map
