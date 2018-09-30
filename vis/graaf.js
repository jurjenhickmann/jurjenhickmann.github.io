var greenish = '#7BE141';
var white = '#FFFFFF';
var yellow = '#FFFF00';

var nodes = new vis.DataSet([
  {id: 'start', label: 'Coderclass omgeving-0', color:white},
  //Level 1
  {id: 'py0', label: 'Python-0', color:white},
  {id: 'html0', label: 'HTML-CSS-0', color:white},
  {id: 'blender0', label: 'Blender-0', color:white},
  {id: 'blokjes0', label: 'Blokjesprogrammeren-0', color:white},

  //Level 2
  {id: 'py1', label: 'Python-1', color: yellow},
  {id: 'py2', label: 'Python-2', color: yellow},
  {id: 'jsweb0', label: 'Javascript voor web-0', color:yellow},
  {id: 'html1', label: 'HTML-CSS-1', color:yellow},

  {id: 'py3', label: 'Python-3'},

  {id: 'js1', label: 'Javascript-1'},
  {id: 'js2', label: 'Javascript-2'},

  {id: 'alg0', label: 'AlgDS-0'},
  {id: 'alg1', label: 'AlgDS-1'},
  {id: 'comp0', label: 'Complexiteit-0'},
  {id: 'comp1', label: 'Complexiteit-1'},
  {id: 'pygame0', label: 'Python for games-0'},
  {id: 'jsgame0', label: 'Javascript for games-0'},
  {id: 'unity0', label: 'Unity-0'},

  {id: 'linux0', label: 'Linux-0'},
  {id: 'linux1', label: 'Linux-1'},
  {id: 'hardware0', label: 'Hardware-0'},


  //{id: 11, label: ''}
]);

// create an array with edges
var edges = new vis.DataSet([
  // Level 1
  {from: 'start', to: 'blokjes0', arrows:'to'},
  {from: 'blokjes0', to: 'blender0', arrows:'to'},
  {from: 'blokjes0', to: 'py0', arrows:'to'},
  {from: 'blokjes0', to: 'html0', arrows:'to'},


  // Level 2
  {from: 'py1', to: 'py2', arrows:'to'},
  {from: 'py1', to: 'jsweb0', arrows:'to'},
  {from: 'html1', to: 'jsweb0', arrows:'to'},


  {from: 'py0', to: 'py1', arrows:'to'},
  {from: 'py2', to: 'py3', arrows:'to'},
  {from: 'py2', to: 'pygame0', arrows:'to'},
  {from: 'js2', to: 'jsgame0', arrows:'to'},
  {from: 'jsgame0', to: 'unity0', arrows:'to', dashes:'true'},
  {from: 'pygame0', to: 'unity0', arrows:'to', dashes:'true'},
  {from: 'py2', to: 'alg0', arrows:'to', dashes:'true'},
  {from: 'alg0', to: 'alg1', arrows:'to'},
  {from: 'comp0', to: 'comp1', arrows:'to'},
  {from: 'alg1', to: 'comp0', arrows:'to'},
  {from: 'js2', to: 'alg0', arrows:'to', dashes:'true'},
  {from: 'js0', to: 'js1', arrows:'to'},
  {from: 'js0', to: 'jsweb0', arrows:'to'},
  {from: 'js1', to: 'js2', arrows:'to'},
  {from: 'linux0', to: 'linux1', arrows:'to'},
  {from: 'html0', to: 'js0', arrows:'to'},
  {from: 'html0', to: 'html1', arrows:'to'}
  //{from: 1, to: 2, arrows:'to, from'},
  //{from: 2, to: 4, arrows:'to, middle'},
  //{from: 2, to: 5, arrows:'to, middle, from'},
  //{from: 5, to: 6, arrows:{to:{scaleFactor:2}}},
  //{from: 6, to: 7, arrows:{middle:{scaleFactor:0.5},from:true}}
]);

// create a network
var container = document.getElementById('mynetwork');
var data = {
  nodes: nodes,
  edges: edges
};
var options = {};
var network = new vis.Network(container, data, options);
