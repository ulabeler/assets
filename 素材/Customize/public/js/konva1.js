var width = document.getElementById('view').clientWidth;;
var height = document.getElementById('view').clientHeight;
const view = document.getElementById("view");
const colorElement = document.getElementById("color");
const numberElement = document.getElementById("number");
const familyElement = document.getElementById("font_style");
const gridbtn = document.getElementById("gridbtn");
const deletebtn = document.getElementById("delete")
const selecterp = document.getElementById("selecterp");

// サニタイジング
function h(str){
    return String(str).replace(/&/g,"&amp;")
      .replace(/"/g,"&quot;")
      .replace(/</g,"&lt;")
      .replace(/>/g,"&gt;")
}

let textNode1;
let textNode2;
let textNode3;
function colorchange1(e) {
    textNode1.fill(e.target.value);
}
function sizechange1(e){
    textNode1.fontSize(e.target.value);
}
function familychange1(e) {
    textNode1.fontFamily(e.target.value);
}
function colorchange2(e) {
    textNode2.fill(e.target.value);
}
function sizechange2(e){
    textNode2.fontSize(e.target.value);
}
function familychange2(e) {
    textNode2.fontFamily(e.target.value);
}
function colorchange3(e) {
    textNode3.fill(e.target.value);
}
function sizechange3(e){
    textNode3.fontSize(e.target.value);
}
function familychange3(e) {
    textNode3.fontFamily(e.target.value);
}

function common(textNode) {
    var tr = new Konva.Transformer({
        node: textNode,
        enabledAnchors: ['middle-left', 'middle-right'],
        // set minimum width of text
        boundBoxFunc: function (oldBox, newBox) {
            newBox.width = Math.max(30, newBox.width);
            return newBox;
        }
    });

    textNode.on('transform', function () {
        // reset scale, so only with is changing by transformer
        textNode.setAttrs({
            width: textNode.width() * textNode.scaleX(),
            scaleX: 1,
        });
    });

    layer.add(tr);

    textNode.on('dblclick dbltap', () => {
        // hide text node and transformer:
        textNode.hide();
        tr.hide();

        // create textarea over canvas with absolute position
        // first we need to find position for textarea
        // how to find it?

        // at first lets find position of text node relative to the stage:
        var textPosition = textNode.absolutePosition();

        // so position of textarea will be the sum of positions above:
        var areaPosition = {
            x: stage.container().offsetLeft + textPosition.x,
            y: stage.container().offsetTop + textPosition.y,
        };

        // create textarea and style it
        var textarea = document.createElement('textarea');
        document.body.appendChild(textarea);

        // apply many styles to match text on canvas as close as possible
        // remember that text rendering on canvas and on the textarea can be different
        // and sometimes it is hard to make it 100% the same. But we will try...
        textarea.value = textNode.text();
        textarea.minLength = 1;
        textarea.maxLength = 15;
        textarea.style.position = 'absolute';
        textarea.style.top = areaPosition.y + 'px';
        textarea.style.left = areaPosition.x + 'px';
        textarea.style.width = textNode.width() - textNode.padding() * 2 + 'px';
        textarea.style.height = textNode.height() - textNode.padding() * 2 + 5 + 'px';
        textarea.style.fontSize = textNode.fontSize() + 'px';
        textarea.style.border = "none";
        textarea.style.padding = '0px';
        textarea.style.margin = '0px';
        textarea.style.overflow = 'hidden';
        textarea.style.background = 'none';
        textarea.style.outline = 'none';
        textarea.style.resize = 'none';
        textarea.style.lineHeight = textNode.lineHeight();
        textarea.style.fontFamily = textNode.fontFamily();
        textarea.style.transformOrigin = 'left top';
        textarea.style.textAlign = textNode.align();
        textarea.style.color = textNode.fill();
        rotation = textNode.rotation();
        var transform = '';
        if (rotation) {
            transform += 'rotateZ(' + rotation + 'deg)';
        }

        var px = 0;
        // also we need to slightly move textarea on firefox
        // because it jumps a bit
        var isFirefox =
            navigator.userAgent.toLowerCase().indexOf('firefox') > -1;
        if (isFirefox) {
            px += 2 + Math.round(textNode.fontSize() / 20);
        }
        transform += 'translateY(-' + px + 'px)';

        textarea.style.transform = transform;

        // reset height
        textarea.style.height = 'auto';
        // after browsers resized it we can set actual value
        textarea.style.height = textarea.scrollHeight + 3 + 'px';

        textarea.focus();

        function removeTextarea() {
            textarea.parentNode.removeChild(textarea);
            window.removeEventListener('click', handleOutsideClick);
            textNode.show();
            tr.show();
            tr.forceUpdate();
        }

        function setTextareaWidth(newWidth) {
            if (!newWidth) {
                // set width for placeholder
                newWidth = textNode.placeholder.length * textNode.fontSize();
            }
            // some extra fixes on different browsers
            var isSafari = /^((?!chrome|android).)*safari/i.test(
                navigator.userAgent
            );
            var isFirefox =
            navigator.userAgent.toLowerCase().indexOf('firefox') > -1;
            if (isSafari || isFirefox) {
                newWidth = Math.ceil(newWidth);
            }

            var isEdge =
            document.documentMode || /Edge/.test(navigator.userAgent);
            if (isEdge) {
                newWidth += 1;
            }
            textarea.style.width = newWidth + 'px';
        }

        textarea.addEventListener('keydown', function (e) {
            // hide on enter
            // but don't hide on shift + enter
            if (e.keyCode === 13 && !e.shiftKey) {
                textNode.text(h(textarea.value));
                removeTextarea();
            }
            // on esc do not set value back to node
            if (e.keyCode === 27) {
                removeTextarea();
            }
        });

        textarea.addEventListener('keydown', function (e) {
            scale = textNode.getAbsoluteScale().x;
            setTextareaWidth(textNode.width() * scale);
            textarea.style.height = 'auto';
            textarea.scrollHeight + textNode.fontSize() + 'px';
        });

        function handleOutsideClick(e) {
            if (e.target !== textarea) {
            textNode.text(h(textarea.value));
            removeTextarea();
            }
        }

        setTimeout(() => {
            window.addEventListener('click', handleOutsideClick);
        });
    });
}

// グリッド
gridbtn.addEventListener("click", function() {
    var base64 = stage.toDataURL('image/png');
    view.classList.toggle("grid");
});

// リロードさせない
function form1submit() {
    return false;
}

// キャンバス作成
const stage = new Konva.Stage({
    container: 'container',
    id:"canvas",
    width: width,
    height: height,
});
const layer = new Konva.Layer();
stage.add(layer);

let cnt1 = 0;
let cnt2 = 0;
let cnt3 = 0;
const textarray = ["","",""];
function form2submit() {
    const messageElement = document.getElementsByName("message");
    let message = (messageElement[0].value);
    if(message != "") {
        if(textarray[0] == "") {
            textarray[0] = message;
            textNode1 = new Konva.Text({
                text: textarray[0],
                x: 50 * 2,
                y: 80,
                fontSize: 16,
                draggable: true,
                width: 200,
                fill: "#000000",
            });
            layer.add(textNode1);
            textNode1.on("click", function() {
                if(cnt1 % 2 == 0) {
                    selecterp.innerHTML = `${textNode1.text()}を選択中`;
                    colorElement.value = textNode1.fill();
                    numberElement.value = textNode1.fontSize();
                    familyElement.value = textNode1.fontFamily();
                    colorElement.addEventListener("change", colorchange1);
                    numberElement.addEventListener("change", sizechange1);
                    familyElement.addEventListener("change", familychange1);            
                    colorElement.removeEventListener("change", colorchange2);
                    numberElement.removeEventListener("change", sizechange2);
                    familyElement.removeEventListener("change", familychange2);
                    colorElement.removeEventListener("change", colorchange3);
                    numberElement.removeEventListener("change", sizechange3);
                    familyElement.removeEventListener("change", familychange3);
                }else {
                    selecterp.innerHTML = "";
                    colorElement.removeEventListener("change", colorchange1);
                    numberElement.removeEventListener("change", sizechange1);
                    familyElement.removeEventListener("change", familychange1);
                }
            cnt1++;
            });
            textNode1.on('dragstart', function () {
                this.moveToTop();
            });
            common(textNode1);
        }else if(textarray[1] == ""){
            textarray[1] = message;
            textNode2 = new Konva.Text({
                text: textarray[1],
                x: 50 * 10,
                y: 80,
                fontSize: 16,
                draggable: true,
                width: 200,
                fill: "#000000",
            });
            layer.add(textNode2);
            textNode2.on("click", function() {
                if(cnt2 % 2 == 0) {
                    selecterp.innerHTML = `${textNode2.text()}を選択中`;
                    colorElement.value = textNode2.fill();
                    numberElement.value = textNode2.fontSize();
                    familyElement.value = textNode2.fontFamily();
                    colorElement.addEventListener("change", colorchange2);
                    numberElement.addEventListener("change", sizechange2);
                    familyElement.addEventListener("change", familychange2);
                    colorElement.removeEventListener("change", colorchange1);
                    numberElement.removeEventListener("change", sizechange1);
                    familyElement.removeEventListener("change", familychange1);
                    colorElement.removeEventListener("change", colorchange3);
                    numberElement.removeEventListener("change", sizechange3);
                    familyElement.removeEventListener("change", familychange3);
                }else {
                    selecterp.innerHTML = "";
                    colorElement.removeEventListener("change", colorchange2);
                    numberElement.removeEventListener("change", sizechange2);
                    familyElement.removeEventListener("change", familychange2);
                }
            cnt1++;
            });
            textNode2.on('dragstart', function () {
                this.moveToTop();
            });
            common(textNode2);
        }else if(textarray[2] == ""){
            textarray[2] = message;
            textNode3 = new Konva.Text({
                text: textarray[2],
                x: 50 * 2,
                y: 110,
                fontSize: 16,
                draggable: true,
                width: 200,
                fill: "#000000",
            });
            layer.add(textNode3);
            textNode3.on("click", function() {
                if(cnt3 % 2 == 0) {
                    selecterp.innerHTML = `${textNode3.text()}を選択中`;
                    colorElement.value = textNode3.fill();
                    numberElement.value = textNode3.fontSize();
                    familyElement.value = textNode3.fontFamily();
                    colorElement.addEventListener("change", colorchange3);
                    numberElement.addEventListener("change", sizechange3);
                    familyElement.addEventListener("change", familychange3);
                    colorElement.removeEventListener("change", colorchange1);
                    numberElement.removeEventListener("change", sizechange1);
                    familyElement.removeEventListener("change", familychange1);
                    colorElement.removeEventListener("change", colorchange2);
                    numberElement.removeEventListener("change", sizechange2);
                    familyElement.removeEventListener("change", familychange2);
                }else {
                    selecterp.innerHTML = "";
                    colorElement.removeEventListener("change", colorchange3);
                    numberElement.removeEventListener("change", sizechange3);
                    familyElement.removeEventListener("change", familychange3);
                }
            cnt1++;
            });
            textNode3.on('dragstart', function () {
                this.moveToTop();
            });
            common(textNode3);
        }else {
            alert("３つ以上は追加出来ません。");
        }
    }else {
        alert("入力してください。")
    }
    return false;
}

// function to apply crop
function applyCrop(pos) {
    const img = layer.findOne('.image');
    img.setAttr('lastCropUsed', pos);
}


// スタンプ
function drowimg(num) {
    Konva.Image.fromURL(`../stamp/stamp${num}.png`,
        (img) => {
            img.setAttrs({
            width: 90,
            height: 90,
            x: 100 * num,
            y: 400,
            name: 'image',
            draggable: true,
    });
    layer.add(img);
    img.on("dblclick", function() {
        this.moveToTop();
    });
    // apply default left-top crop
    applyCrop('center-middle');
    }
    );
}

document.addEventListener('click' , (e) => {
    for(let i = 1; i <= 9; i++) {
      if(e.target.closest("#stp" + i)) {
        drowimg(i);
      }
    }
});

// スタンプここまで



// what is url of dragging element?
var itemURL = '';
document
.getElementById('drag-items')
.addEventListener('dragstart', function (e) {
    itemURL = e.target.src;
});

var con = stage.container();
con.addEventListener('dragover', function (e) {
e.preventDefault(); // !important
});

con.addEventListener('drop', function (e) {
e.preventDefault();
// now we need to find pointer position
// we can't use stage.getPointerPosition() here, because that event
// is not registered by Konva.Stage
// we can register it manually:
stage.setPointersPositions(e);

Konva.Image.fromURL(itemURL, function (image) {
    layer.add(image);
    image.position(stage.getPointerPosition());
    image.draggable(true);
    image.on("dblclick", function() {
        this.moveToTop();
    });
});
});
