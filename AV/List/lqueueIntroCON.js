/*global ODSA */
"use strict";
// Written by Jun Yang and Cliff Shaffer
// List-based Queue Introduction.
$(document).ready(function () {
  var av_name = "lqueueIntroCON";
  // Load the config object with interpreter and code created by odsaUtils.js
  var config = ODSA.UTILS.loadConfig({"av_name": av_name}),
      interpret = config.interpreter,       // get the interpreter
      code = config.code;                   // get the code object
  var av = new JSAV(av_name);
  var pseudo = av.code(code);

  var leftMargin = 20;
  var topMargin = 50;
  var list = av.ds.list({nodegap: 30, left: leftMargin, top: topMargin});
  list.addFirst(25)
      .addFirst(10)
      .addFirst(5)
      .addFirst("null");
  var slash = list.get(3).addTail({left: 221});
  list.layout();
  var frontP = av.pointer("front", list.get(0));
  var rearP = av.pointer("rear", list.get(3));

  // Would like to put this in Slide 2, but the slash doesn't hide correctly
  var listInit = av.ds.list({nodegap: 30, left: leftMargin, top: topMargin});
  listInit.addFirst("null")
  var slashI = listInit.get(0).addTail();
  listInit.layout();
  var frontIP = setPointerL("front", listInit.get(0));
  var rearIP = setPointerR("rear", listInit.get(0));
  listInit.hide();
  slashI.hide();
  frontIP.hide();
  rearIP.hide();

  // Slide 1
  av.umsg(interpret("av_c1"));
  pseudo.highlight("vars");
  av.displayInit();

  // Slide 2
  av.umsg(interpret("av_c2"));
  var l0 = list.get(0);
  l0.highlight();
  pseudo.unhighlight("vars");
  av.step();

  // Slide 3
  l0.unhighlight();
  pseudo.highlight("init");
  list.hide();
  frontP.hide();
  rearP.hide();
  slash.hide();
  listInit.show();
  slashI.show();
  frontIP.show();
  rearIP.show();
  av.umsg(interpret("av_c3"));
  av.step();

  // Slide 4
  pseudo.unhighlight("init");
  listInit.hide();
  frontIP.hide();
  rearIP.hide();
  slashI.hide();
  list.show();
  frontP.show();
  rearP.show();
  slash.show();
  av.umsg(interpret("av_c4"));
  av.recorded();
});
