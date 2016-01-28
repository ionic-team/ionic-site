---
layout: "v2_fluid/docs_base"
version: "nightly"
versionHref: "/docs/v2"
path: ""
category: api
id: "{{Modal | slugify}}"
title: "Modal"
header_sub_title: "Class in module "
doc: "Modal"
docType: "class"
show_preview_device: true
preview_device_url: "/docs/v2/demos/modal/"
angular_controller: APIDemoCtrl 
---









<h1 class="api-title">


Modal






</h1>

<a class="improve-v2-docs" href='http://github.com/driftyco/ionic/edit/2.0/ionic/components/modal/modal.ts#L1'>
Improve this doc
</a>






<!-- description -->
<h2>Description</h2>

<p>A Modal is a content pane that goes over the user&#39;s current page.
Usually it is used for making a choice or editing an item. A modal uses the
<code>NavController</code> to
<a href='/docs/v2/api/components/nav/NavController/#present'>present</a>
itself in the root nav stack. It is added to the stack similar to how
<a href='/docs/v2/api/components/nav/NavController/#push'>NavController.push</a>
works.</p>
<p>When a modal (or any other overlay such as an alert or actionsheet) is
&quot;presented&quot; to a nav controller, the overlay is added to the app&#39;s root nav.
After the modal has been presented, from within the component instance The
modal can later be closed or &quot;dismissed&quot; by using the ViewController&#39;s
<code>dismiss</code> method. Additionally, you can dismiss any overlay by using <code>pop</code>
on the root nav controller.</p>
<p>A modal can also emit data, which is useful when it is used to add or edit
data. For example, a profile page could slide up in a modal, and on submit,
the submit button could pass the updated profile data, then dismiss the
modal.</p>

<!-- @usage tag -->

<h2>Usage</h2>

<pre><code class="lang-ts">import {Modal, NavController} from &#39;ionic/ionic&#39;;

@Page(...)
class HomePage {

 constructor(nav: NavController) {
   this.nav = nav;
 }

 presentContactModal() {
   let contactModal = Modal.create(ContactUs);
   this.nav.present(contactModal);
 }

 presentProfileModal() {
   let profileModal = Modal.create(Profile, { userId: 8675309 });
   profileModal.onDismiss(data =&gt; {
     console.log(data);
   });
   this.nav.present(profileModal);
 }

}

@Page(...)
class Profile {

 constructor(viewCtrl: ViewController) {
   this.viewCtrl = viewCtrl;
 }

 dismiss() {
   let data = { &#39;foo&#39;: &#39;bar&#39; };
   this.viewCtrl.dismiss(data);
 }

}
</code></pre>




<!-- @property tags -->


<!-- methods on the class --><!-- related link -->

<h2>Related</h2>

<a href='/docs/v2/components#modals'>Modal Component Docs</a><!-- end content block -->


<!-- end body block -->

