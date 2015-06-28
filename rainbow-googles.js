var rainbow = document.createElement('div');
var colors = ['#e71c39',
  '#f58f23',
  '#f4ec25',
  '#57ad48',
  '#1c61ae',
  '#5b439b'
];
rainbow.setAttribute('style', 'height:100%;width:100%;position:fixed;top:0;left:0;opacity:0.5;z-index:99999;pointer-events:none');

for (var i = 0; i < colors.length; i++) {
  var color = document.createElement('div');
  color.setAttribute('style', 'background-color:'+colors[i]+';float:left;height:17%;width:100%;');
  rainbow.appendChild(color);
}

document.body.insertBefore( rainbow, document.body.firstChild )
