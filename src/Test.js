import React from 'react';
import { fabric } from 'fabric';
import $ from 'jquery';
import './test.css';
const Test = () => {
    $(document).ready(function () {
        const canvas = new fabric.Canvas('canvas');
        $("#imageUpload").change(function (e) {
            var file = e.target.files[0];
            var reader = new FileReader();
            console.log("reader   " + reader);
            reader.onload = function (f) {
                let data = f.target.result;
                fabric.Image.fromURL(data, function (img) {
                    let scale = 100 / img.width;
                    img.set({
                        scaleX: scale,
                        scaleY: scale
                    });
                    canvas.add(img);
                });
            };
            reader.readAsDataURL(file);
            debugger;
        });

        $("#addText").click(function () {
            var oText = new fabric.IText('Tap and Type', {
                left: 100,
                top: 100,
            });
            canvas.add(oText);
            canvas.setActiveObject(oText);
            $('#fill, #font').trigger('change');
            oText.bringToFront();
        })

     
        $('#fill').change(function () {
            alert("1");
            var obj = canvas.getActiveObject();
            if (obj) {
                obj.setFill($(this).val());
            }
            canvas.renderAll();
        });

        $('#font').change(function () {
            var obj = canvas.getActiveObject();
            if (obj) {
                obj.setFontFamily($(this).val());
            }
            canvas.renderAll();
        });
      
      
        //document.querySelector('#txt').onclick = function (e) {
        $("#txt").click(function (e) {
            e.preventDefault();
            setTimeout(function () {
                canvas1()
            }, 1000);
            setTimeout(function () {
                canvas2()
            }, 2000);
            setTimeout(function () {
                canvas3()
            }, 3000);
           
         
            // canvas.discardActiveObject();
            canvas.renderAll();
            const b =canvas.toDataURL()
            console.log("image--->", canvas.toDataURL());
            console.log("--000--", b);
            //document.querySelector('#preview').src = canvas.toDataURL();
            $("#preview").attr("src", canvas.toDataURL());
            debugger;
            function canvas1() {
             
                var canvas = document.getElementById("canvas1");
                var ctx = canvas.getContext("2d");
    
                var productImg = new Image();
                productImg.onload = function () {
                    var iw = productImg.width;
                    var ih = productImg.height;
                    console.log("height");
                    debugger;
                    canvas.width = iw;
                    canvas.height = ih;
                    debugger;
                    ctx.drawImage(productImg, 0, 0, productImg.width, productImg.height,
                        0, 0, iw, ih);
                    
                    loadUpperIMage()
                };
    
                productImg.src = "http://res.cloudinary.com/pussyhunter/image/upload/c_scale,f_auto,h_350/left_handle_cup_i7ztfs.jpg"
    
    
                function loadUpperIMage() {
                    var img = new Image();   
                  
                    img.src = b;
                 
                    img.onload = function () {
    
                        var iw = img.width;
                        var ih = img.height;
    
                        var xOffset = 102, //left padding
                            yOffset = 110; //top padding
    
                        //                 //alert(ih)
                        var a = 75.0; //image width
                        var b = 10; //round ness
    
                        var scaleFactor = iw / (4 * a);
    
                        //                 // draw vertical slices
                        for (var X = 0; X < iw; X += 1) {
                            var y = b / a * Math.sqrt(a * a - (X - a) * (X - a)); // ellipsis equation
                            ctx.drawImage(img, X * scaleFactor, 0, iw / 9, ih, X + xOffset, y + yOffset, 1, 174);
                        }
                    };
                }
    
            };
        
        
        function canvas2() {

            var canvas = document.getElementById("canvas2");
            var ctx = canvas.getContext("2d");

            var productImg = new Image();
            productImg.onload = function () {
                var iw = productImg.width;
                var ih = productImg.height;
                console.log("height");

                canvas.width = iw;
                canvas.height = ih;

                ctx.drawImage(productImg, 0, 0, productImg.width, productImg.height,
                    0, 0, iw, ih);
                loadUpperIMage()
            };


            productImg.src = "http://res.cloudinary.com/pussyhunter/image/upload/h_350/canter_handle_cup_xyxhdd.jpg"

            function loadUpperIMage() {
                var img = new Image();

                img.src = b;

                img.onload = function () {

                    var iw = img.width;
                    var ih = img.height;

                    // alert(iw)

                    var xOffset = 101, //left padding
                        yOffset = 110; //top padding

                    var a = 75.0; //image width
                    var b = 10; //round ness

                    var scaleFactor = iw / (4 * a);

                    // draw vertical slices
                    for (var X = 0; X < iw; X += 1) {
                        var y = b / a * Math.sqrt(a * a - (X - a) * (X - a)); // ellipsis equation
                        ctx.drawImage(img, X * scaleFactor, 0, iw / 3, ih, X + xOffset, y + yOffset, 1, 174);

                    }
                };
            }

        };

        function canvas3() {

            var canvas = document.getElementById("canvas3");
            var ctx = canvas.getContext("2d");

            var productImg = new Image();
            productImg.onload = function () {
                var iw = productImg.width;
                var ih = productImg.height;

                canvas.width = iw;
                canvas.height = ih;

                ctx.drawImage(productImg, 0, 0, productImg.width, productImg.height,
                    0, 0, iw, ih);
                loadUpperIMage()
            };

            productImg.src = "http://res.cloudinary.com/pussyhunter/image/upload/h_350/right_handle_cup_dsdhr7.jpg"


            function loadUpperIMage() {
                var img = new Image();

                img.src = b;
                img.onload = function () {

                    var iw = img.width;
                    var ih = img.height;

                    //alert(iw)

                    var xOffset = 102, //left padding
                        yOffset = 110; //top padding

                    var a = 75.0; //image width
                    var b = 10; //round ness

                    var scaleFactor = iw / (3 * a);

                    //                 // draw vertical slices
                    for (var X = 0; X < iw; X += 1) {
                        var y = b / a * Math.sqrt(a * a - (X - a) * (X - a)); // ellipsis equation
                        ctx.drawImage(img, X * scaleFactor, 0, iw / 1.5, ih, X + xOffset, y + yOffset, 1, 174);
                    }
                };
            }

        };
    });
        function updateItems(delta) {
            var $items = $('#group').children();
            var $current = $items.filter('.current');
            $current = $current.length ? $current : $items.first();
            var index = $current.index() + delta;
            // Range check the new index
            index = (index < 0) ? 0 : ((index > $items.length) ? $items.length : index);
            $current.removeClass('current');
            $current = $items.eq(index).addClass('current');
            // Hide/show the next/prev
            $("#prev").toggle(!$current.is($items.first()));
            $("#next").toggle(!$current.is($items.last()));
        }
        $("#next").click(function () {
            updateItems(1);
        });
        $("#prev").click(function () {
            updateItems(-1);
        });
        // Cause initial selection
        updateItems(0);
    });


    // Listen for changes in UI
    // $('#tint').change(function () {
    //     // Get the selected colour
    //     var tintHex = $('#fillimage').val();

    //     if ($(this).is(':checked') === true) {
    //         applyTint(tintHex);
    //     } else {
    //         removeTint();
    //     }
    // });


    // function applyTint(tintHex) {
    //     // Get active object
    //     var object = canvas.getActiveObject();

    //     if (!object) {
    //         console.error('No image selected');
    //         return false;
    //         // Could prompt the user to select an image, or programmatically do it for them
    //     }

    //     // Apply the tint. Based on docs at: http://fabricjs.com/docs/fabric.Image.filters.Tint.html#initialize
    //     var tintFilter = new fabric.Image.filters.Tint({
    //         color: tintHex,
    //         //opacity: 0.5 // Could also pass in an opacity value
    //     });
    //     object.filters.push(tintFilter);
    //     object.applyFilters(canvas.renderAll.bind(canvas));
    // }


    // function removeTint() {
    //     // Get active object
    //     var object = canvas.getActiveObject();

    //     if (!object) {
    //         console.error('No image selected');
    //         return false;
    //         // Could prompt the user to select an image, or programmatically do it for them
    //     }

    //     object.filters = []; // Empty filters array
    //     object.applyFilters(canvas.renderAll.bind(canvas));
    // }








    // });






    return (
        <div>

            <div className="container">
                <div className="row">
                    <div className="col-lg-8">
                        <br />
                        <canvas id="canvas" width="600" height="400" style={{ border: '1px solid black' }}></canvas>
                        <br />
                        <a type="button" id='txt' className="btn btn-info btn-lg" data-toggle="modal" data-target="#myModal">Open Modal</a>
                    </div>
                    <div className="col-lg-4">
                        <div className="row">
                            <div className="z-depth-5" style={{ padding: '11px' }}>
                                <div className="col-lg-12">
                                    <input className="btn btn-primary" type="file" id="imageUpload" />
                                </div>
                                {/* <div className="col-lg-6">
                                    <input type="color" value="blue" id="fill" />
                                </div>
                                <div className="col-lg-6">
                                    <input className="btn btn-primary" type="checkbox" id="tint" /> Tint:
                            <input type="color" value="blue" id="fillimage" />
                                </div> */}
                                {/* <div className="col-lg-6">
                                    <select id="font">
                                        <option>arial</option>
                                        <option>tahoma</option>
                                        <option>times new roman</option>
                                    </select>
                                </div>
                              
                                <div className="col-lg-6">
                                    <input className="btn btn-primary" type="button" value="Clear Canvas" id="clear" />
                                </div>
                                <div className="col-lg-6">
                                    <input className="btn btn-primary" type="button" value="Reset" id="Reset" />
                                </div>
                                <div className="col-lg-6">
                                    <input className="btn btn-primary" type="button" id="saveImg" value="Save Image" />
                                </div> */}
                                <div className="col-lg-6">
                                    <button className="btn btn-primary" id="addText">Add Custom Text</button>
                                </div>
                                {/* <div className="col-lg-6">
                                    <select id="font">
                                        <option>arial</option>
                                        <option>tahoma</option>
                                        <option>times new roman</option>
                                    </select>
                                </div> */}
                            </div>
                        </div>
                    </div>

                    <div className="modal fade" id="myModal" role="dialog">
                        <div className="modal-dialog">


                            <div className="modal-content">
                                <div className="modal-header">
                                    <button type="button" className="close" data-dismiss="modal">&times;</button>
                                    <h4 className="modal-title">This Your Final Product After Customize</h4>
                                </div>
                                <div className="modal-body text-center container-fluid">
                                    <div className="row">
                                        <div className="col-lg-2">
                                            <div id="next">next</div>
                                        </div>
                                        <div className="col-lg-7">
                                            <div id="group">
                                                <div>
                                                    <canvas id="canvas1"></canvas>
                                                </div>

                                                <div>
                                                    <canvas id="canvas2"></canvas>
                                                </div>

                                                <div>
                                                    <canvas id="canvas3"></canvas>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-1">
                                            <div id="prev">prev</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                                    <button type="button" className="btn btn-danger">Order Now</button>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Test;
