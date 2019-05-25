function init(){
  if (isMobileDevice()) {
    $("#leftCol").remove();
  }
}

function bomb(){
  flake.init();
  setPhDAdvisor();
}

var flakeIntervalID;
var flakeInited = false;

var textStr =  "Language designers usually need to implement parsers and printers. Despite being two intimately related programs, in practice they are often designed separately, and then need to be revised and kept consistent as the language evolves. It will be more convenient if the parser and printer can be unified and developed in one single program, with their consistency guaranteed automatically. ";
             + "Furthermore, in certain scenarios (like showing compiler optimisation results to the programmer), it is desirable to have a more powerful reflective printer that, when an abstract syntax tree corresponding to a piece of program text is modified, can reflect the modification to the program text while preserving layouts, comments, and syntactic sugar. "
             + "To address these needs, we propose a domain-specific language BiYacc, whose programs denote both a parser and a reflective printer for an unambiguous context-free grammar. BiYacc is based on the theory of bidirectional transformations, which helps to guarantee by construction that the pairs of parsers and reflective printers generated by BiYacc are consistent. We show that BiYacc is capable of facilitating many tasks such as Pombrio and Krishnamurthi’s “resugaring”, simple refactoring, and language evolution."
// wtf is js? String is not a list of Char
var textArr = (((textStr.split("")).filter(isPunc)).join("")).split(" ")

// is punctuation?
function isPunc(chr) {
    return (chr != '.' && chr != ',');
}

var flake = {

  init: function () {
    if (!flakeInited) {
      flake.callFontFlakes();
      flakeInited = true;
      $(document.body).css('font-family',"doge, sans-serif");
      $('#doge-img').attr('src',"img/dogeGlasses.png");
      $('#doge-it').css('filter',"invert(100%)");
    }
    else {
      flake.removeAll();
      flakeInited = false;
      $(document.body).css('font-family',"Roboto Slab, serif");
      $('#doge-img').attr('src',"img/doge.jpg");
      $('#doge-it').css('filter',"invert(0%)");
    }
  },

  callFontFlakes: function(){
    var intvID = window.setInterval(function(){
      flake.fontFlake();
    }, 100);
    flakeIntervalID = intvID;
  },

  fontFlake: function(){
      // let set some bloody vars
      var stageWidth = $(window).width();
      var stageHeight = $(window).height();
      // var stageHeight = maxHeight;
      var randomEntry = Math.ceil(Math.random()*stageWidth);
      var preRandomFontSize = Math.ceil(Math.random()*30);
      var randomFontSize = preRandomFontSize + 10;
      var flakeName = 'flake-'+randomEntry;
      var grayScale = Math.ceil(Math.random()*256);
      var hue = 'rgb('+grayScale+','+grayScale+','+grayScale+ ')';

      // ok time to create and animate this stupid thing.
      $('<div />', {
        // text: "doge",
        text: textArr[Math.floor(Math.random() * textArr.length)],
        // text: randomEntry,
        id: flakeName,
        // class: "fontFlake",
      }).appendTo('body').addClass('fontFlake').css('left', randomEntry).css('font-size', randomFontSize).css('color', hue).animate({
        "top": "+=" + stageHeight,
        opacity: 0
      }, 5000, function() {
        $('#'+flakeName).remove();
      });
  },

  removeAll: function(){
    $(".fontFlake").remove();
    clearInterval(flakeIntervalID);
  }
};


function setPhDAdvisor() {
  var ref = $("#reference");
  ref.empty();
  var advisor = "<p><a href='https://josh-hs-ko.github.io'>Hsiang-Shang Ko</a></p>";
  var addr = "<p>Assistant Professor by Special Appointment<br>National Institute of Informatics</p>";
  ref.append("<h2>PhD Advisor</h2>", advisor, addr);
}


function isMobileDevice() {
  var check = false;
  (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
  return check;
}
