---
layout: "v2_fluid/docs_base"
version: "1.0.8"
versionHref: "/docs/v2/native"
path: ""
category: native
id: "ble"
title: "BLE"
header_sub_title: "Class in module "
doc: "BLE"
docType: "class"
---








<h1 class="api-title">


BLE






</h1>

<a class="improve-v2-docs" href='http://github.com/driftyco/ionic/edit/2.0/src/plugins/ble.ts#L1'>
Improve this doc
</a>






<!-- description -->
<h2>Description</h2>

<p>This plugin enables communication between a phone and Bluetooth Low Energy (BLE) peripherals.</p>
<p>The plugin provides a simple JavaScript API for iOS and Android.</p>
<ul>
<li>Scan for peripherals</li>
<li>Connect to a peripheral</li>
<li>Read the value of a characteristic</li>
<li>Write new value to a characteristic</li>
<li>Get notified when characteristic&#39;s value changes</li>
</ul>
<p>Advertising information is returned when scanning for peripherals. Service, characteristic, and property info is returned when connecting to a peripheral. All access is via service and characteristic UUIDs. The plugin manages handles internally.</p>
<p>Simultaneous connections to multiple peripherals are supported.</p>
<h2 id="peripheral-data">Peripheral Data</h2>
<p>Peripheral Data is passed to the success callback when scanning and connecting. Limited data is passed when scanning.</p>
<pre><code>{
    &quot;name&quot;: &quot;Battery Demo&quot;,
    &quot;id&quot;: &quot;20:FF:D0:FF:D1:C0&quot;,
    &quot;advertising&quot;: [2,1,6,3,3,15,24,8,9,66,97,116,116,101,114,121],
    &quot;rssi&quot;: -55
}
</code></pre>
<p>After connecting, the peripheral object also includes service, characteristic and descriptor information.</p>
<pre><code>{
    &quot;name&quot;: &quot;Battery Demo&quot;,
    &quot;id&quot;: &quot;20:FF:D0:FF:D1:C0&quot;,
    &quot;advertising&quot;: [2,1,6,3,3,15,24,8,9,66,97,116,116,101,114,121],
    &quot;rssi&quot;: -55,
    &quot;services&quot;: [
        &quot;1800&quot;,
        &quot;1801&quot;,
        &quot;180f&quot;
    ],
    &quot;characteristics&quot;: [
        {
            &quot;service&quot;: &quot;1800&quot;,
            &quot;characteristic&quot;: &quot;2a00&quot;,
            &quot;properties&quot;: [
                &quot;Read&quot;
            ]
        },
        {
            &quot;service&quot;: &quot;1800&quot;,
            &quot;characteristic&quot;: &quot;2a01&quot;,
            &quot;properties&quot;: [
                &quot;Read&quot;
            ]
        },
        {
            &quot;service&quot;: &quot;1801&quot;,
            &quot;characteristic&quot;: &quot;2a05&quot;,
            &quot;properties&quot;: [
                &quot;Read&quot;
            ]
        },
        {
            &quot;service&quot;: &quot;180f&quot;,
            &quot;characteristic&quot;: &quot;2a19&quot;,
            &quot;properties&quot;: [
                &quot;Read&quot;
            ],
            &quot;descriptors&quot;: [
                {
                    &quot;uuid&quot;: &quot;2901&quot;
                },
                {
                    &quot;uuid&quot;: &quot;2904&quot;
                }
            ]
        }
    ]
}
</code></pre>
<h2 id="advertising-data">Advertising Data</h2>
<p>Bluetooth advertising data is returned in when scanning for devices. The format format varies depending on your platform. On Android advertising data will be the raw advertising bytes. iOS does not allow access to raw advertising data, so a dictionary of data is returned.</p>
<p>The advertising information for both Android and iOS appears to be a combination of advertising data and scan response data.</p>
<h3 id="android">Android</h3>
<pre><code> {
     &quot;name&quot;: &quot;demo&quot;,
     &quot;id&quot;: &quot;00:1A:7D:DA:71:13&quot;,
     &quot;advertising&quot;: ArrayBuffer,
    &quot;rssi&quot;: -37
}
</code></pre>
<p>Convert the advertising info to a Uint8Array for processing. <code>var adData = new Uint8Array(peripheral.advertising)</code></p>
<h3 id="ios">iOS</h3>
<p>Note that iOS uses the string value of the constants for the <a href="https://developer.apple.com/library/ios/documentation/CoreBluetooth/Reference/CBCentralManagerDelegate_Protocol/index.html#//apple_ref/doc/constant_group/Advertisement_Data_Retrieval_Keys">Advertisement Data Retrieval Keys</a>. This will likely change in the future.</p>
<pre><code>{
    &quot;name&quot;: &quot;demo&quot;,
    &quot;id&quot;: &quot;D8479A4F-7517-BCD3-91B5-3302B2F81802&quot;,
    &quot;advertising&quot;: {
        &quot;kCBAdvDataChannel&quot;: 37,
        &quot;kCBAdvDataServiceData&quot;: {
            &quot;FED8&quot;: {
                &quot;byteLength&quot;: 7 // data not shown
            }
        },
        &quot;kCBAdvDataLocalName&quot;: &quot;demo&quot;,
        &quot;kCBAdvDataServiceUUIDs&quot;: [&quot;FED8&quot;],
        &quot;kCBAdvDataManufacturerData&quot;: {
            &quot;byteLength&quot;: 7  // data not shown
        },
        &quot;kCBAdvDataTxPowerLevel&quot;: 32,
        &quot;kCBAdvDataIsConnectable&quot;: true
    },
    &quot;rssi&quot;: -53
}
</code></pre>
<h2 id="typed-arrays">Typed Arrays</h2>
<p>This plugin uses typed Arrays or ArrayBuffers for sending and receiving data.</p>
<p>This means that you need convert your data to ArrayBuffers before sending and from ArrayBuffers when receiving.</p>
<pre><code>// ASCII only
function stringToBytes(string) {
   var array = new Uint8Array(string.length);
   for (var i = 0, l = string.length; i &lt; l; i++) {
       array[i] = string.charCodeAt(i);
    }
    return array.buffer;
}

// ASCII only
function bytesToString(buffer) {
    return String.fromCharCode.apply(null, new Uint8Array(buffer));
}
</code></pre>
<p>You can read more about typed arrays in these articles on <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Typed_arrays">MDN</a> and <a href="http://www.html5rocks.com/en/tutorials/webgl/typed_arrays/">HTML5 Rocks</a>.</p>
<h2 id="uuids">UUIDs</h2>
<p>UUIDs are always strings and not numbers. Some 16-bit UUIDs, such as &#39;2220&#39; look like integers, but they&#39;re not. (The integer 2220 is 0x8AC in hex.) This isn&#39;t a problem with 128 bit UUIDs since they look like strings 82b9e6e1-593a-456f-be9b-9215160ebcac. All 16-bit UUIDs should also be passed to methods as strings.</p>

<!-- @usage tag -->


<!-- @property tags -->


<!-- methods on the class --><!-- related link --><!-- end content block -->


<!-- end body block -->

