import React from 'react';
import { fabric } from 'fabric';
import $ from 'jquery';
import { Link } from 'react-router-dom';
import './test.css';
const Customizeproduct = () => {
    var leftSideMug = require('./assets/img/left_handle_cup.jpg');
    var centerSideMug = require('./assets/img/canter_handle_cup.jpg');
    var rightSideMug = require('./assets/img/right_handle_cup.jpg');
    $(document).ready(function () {
        const canvas = new fabric.Canvas('canvas');
        $("#imageUpload").change(function (e) {
            const file = e.target.files[0];
            const reader = new FileReader();
            reader.onload = function (f) {
                let data = f.target.result;
                fabric.Image.fromURL(data, function (img) {
                    img.scale(.3);
                    canvas.add(img);
                });
            };
            reader.readAsDataURL(file);
        });
       
        $("#addText").click(function () {
            let oText = new fabric.IText('Tap and Type', {
                left: 100,
                top: 100,
            });            
            canvas.add(oText);
            canvas.setActiveObject(oText);
            // oText.fillStyle="red";
            // $('#fill, #font').trigger('change');
           // oText.set('fill', 'red');
            oText.bringToFront();
        });
        $('#changeColor').change(function (e) {                
            var obj = canvas.getActiveObject();
            if (obj) {
                 obj.set('fill', $(this).val());
            }
            canvas.renderAll();
        });        
        $('#font').change(function () {          
            let obj = canvas.getActiveObject();
            if (obj) {
                obj.set('fontFamily',$(this).val());               
            }
            canvas.renderAll();
        });
        
        function canvasLeft(collargeImage) {
            var canvas = document.getElementById("canvasLeft");
            var ctx = canvas.getContext("2d");
            var productImg = new Image();
            productImg.src = leftSideMug
            productImg.onload = function () {
                let iw = productImg.width;
                let ih = productImg.height;
                canvas.width = iw;
                canvas.height = ih;
                ctx.drawImage(productImg, 0, 0, productImg.width, productImg.height,
                    0, 0, iw, ih);

                let img = new Image();
                img.src = collargeImage;
                img.onload = function () {
                    var iw = img.width;
                    var ih = img.height;
                    var xOffset = 102, //left padding
                        yOffset = 110; //top padding

                    var a = 75.0; //image width
                    var b = 10; //round ness
                    var scaleFactor = iw / (4 * a);

                    // draw vertical slices
                    for (var X = 0; X < iw; X += 1) {
                        var y = b / a * Math.sqrt(a * a - (X - a) * (X - a)); // ellipsis equation
                        ctx.drawImage(img, X * scaleFactor, 0, iw / 9, ih, X + xOffset, y + yOffset, 1, 174);
                    }
                    console.log("-----1>", img);
                };
            };
        };
        function canvasMiddle(collargeImage) {
            var canvas = document.getElementById("canvasMiddle");
            var ctx = canvas.getContext("2d");
            var productImg = new Image();
            productImg.src = centerSideMug
            productImg.onload = function () {
                let iw = productImg.width;
                let ih = productImg.height;
                canvas.width = iw;
                canvas.height = ih;
                ctx.drawImage(productImg, 0, 0, productImg.width, productImg.height,
                    0, 0, iw, ih);

                let img = new Image();
                img.src = collargeImage;
                img.onload = function () {
                    var iw = img.width;
                    var ih = img.height;
                    var xOffset = 102, //left padding
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
            };
        };

        function canvasRight(collargeImage) {
            var canvas = document.getElementById("canvasRight");
            var ctx = canvas.getContext("2d");
            var productImg = new Image();
            productImg.src = rightSideMug
            productImg.onload = function () {
                let iw = productImg.width;
                let ih = productImg.height;
                canvas.width = iw;
                canvas.height = ih;
                ctx.drawImage(productImg, 0, 0, productImg.width, productImg.height,
                    0, 0, iw, ih);

                let img = new Image();
                img.src = collargeImage;
                img.onload = function () {
                    var iw = img.width;
                    var ih = img.height;
                    var xOffset = 102, //left padding
                        yOffset = 110; //top padding

                    var a = 75.0; //image width
                    var b = 10; //round ness
                    var scaleFactor = iw / (4 * a);

                    // draw vertical slices
                    for (var X = 0; X < iw; X += 1) {
                        var y = b / a * Math.sqrt(a * a - (X - a) * (X - a)); // ellipsis equation
                        ctx.drawImage(img, X * scaleFactor, 0, iw / 1.5, ih, X + xOffset, y + yOffset, 1, 174);
                    }
                    console.log("-----1>", img);
                };
            };
        };
        //document.querySelector('#txt').onclick = function (e) {
        $("#txt").click(function (e) {
            e.preventDefault();
             canvas.discardActiveObject();
            const collargeImage = canvas.toDataURL();
            canvasLeft(collargeImage);
            canvasMiddle(collargeImage);
            canvasRight(collargeImage);
        
            canvas.renderAll();
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

    return (
        <div>

            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-8">
                        <br />
                        <canvas id="canvas" width="600" height="400" style={{border:'1px solid #ececd5','box-shadow': '0px 0px 5px 0px'}}></canvas>
                        <br />
                        <a type="button" id='txt' className="btn btn-danger" data-toggle="modal" data-target="#myModal">See Your Final Product</a>
                    </div>
                    <div className="col-lg-4">
                        <div className="row">
                            <div className="z-depth-5" style={{ padding: '11px' }}>
                                <div className="col-lg-12">
                                    <input className="btn btn-primary" type="file" id="imageUpload" />
                                </div>
                                <div className="col-lg-12">
                                    <input type="color" id="changeColor" />
                                </div>                                
                                <div className="col-lg-12">
                                    <select id="font">
                                        <option>arial</option>
                                        <option>Courier New</option>
                                        <option>Comic Sans MS</option>
                                        <option>tahoma</option>
                                        <option>times new roman</option>
                                        <option>sans-serif</option>
                                    </select>
                                </div>                           
                                                             
                                <div className="col-lg-12">
                                    <button className="btn btn-primary" id="addText">Add Custom Text</button>
                                </div>
                             
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
                                                    <canvas id="canvasLeft"></canvas>
                                                </div>

                                                <div>
                                                    <canvas id="canvasMiddle"></canvas>
                                                </div>

                                                <div>
                                                    <canvas id="canvasRight"></canvas>
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
                                   <Link to="productCart" type="button" className="btn btn-danger">Order Now</Link>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Customizeproduct;
