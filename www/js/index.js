/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var App = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
        // Create an instance of Meny
			  var meny = Meny.create({
				    menuElement: document.getElementById('menu'),
				    contentsElement: document.getElementById('content'),
				    position: 'left',
				    width: Math.round(document.body.clientWidth * (4/5)),
				    threshold: 40,
            overlap: 0
			  });
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        //document.addEventListener('deviceready', function() { App.onDeviceReady(); }, false);
        document.addEventListener('DOMContentLoaded', function() { App.onDeviceReady(); }, false);
        $("#show-details").click(function() { App.showPage("details"); });
        $("#show-main").click(function() { App.showPage("main"); });
    },
    // deviceready Event Handler
    onDeviceReady: function() {
        this.showPage("main");
    },
    showPage: function(id) {
        $(".page.visible").filter(function(e) { return e.id != id; }).removeClass("visible");
        $("#" + id).addClass("visible");
    }
};
