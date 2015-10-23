---
layout: v2_fluid/docs_base
category: platform
id: contacts
title: Contacts | Ionic Native Plugins
header_title: Contacts
header_sub_title: Access and create contacts on the device
---

<h1 class="title">Contacts</h1>

<a class="improve-docs" href='https://github.com/driftyco/ionic-site/edit/ionic2/docs/v2/platform/contact/index.md'>
  Improve this doc
</a>

```bash
$ ionic plugin install cordova-plugin-contacts
```

Use the `Contacts` class to access contacts from the user's address book, or to create and modify contacts.

```javascript
import {Contacts} from 'ionic/ionic'

class MyPage {

  newContact(info) {
    /** Valid fields for the info object:
    * {
    * id: A globally unique identifier.
    * displayName: The name of this Contact, suitable for display to end-users.
    * name: An object containing all components of a persons name.
    * nickname: A casual name by which to address the contact.
    * phoneNumbers: An array of all the contact's phone numbers.
    * emails: An array of all the contact's email addresses.
    * addresses: An array of all the contact's addresses.
    * ims: An array of all the contact's IM addresses.
    * organizations: An array of all the contact's organizations.
    * birthday: The birthday of the contact.
    * note: A note about the contact.
    * photos: An array of the contact's photos.
    * categories: An array of all the user-defined categories associated with the contact.
    * urls: An array of web pages associated with the contact.
    * }
    */

    Contacts.save(info).then((contact) => {
      // New contact is in contact
    }, (err) => {
      // Handle an error
    })
  }

  getContact() {
    // Let the user pick a contact from the address book
    Contacts.pickContact((contact) => {
      // Got a contact
    })
  }

  findContact(query) {

    // Search for a displayName of 'Max' (set fields to one of the above fields to change the search field)
    Contacts.find({filter: 'Max' }).then((contact) => {
    })
  }
}
```
