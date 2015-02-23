---
layout: post
title:  "An Interview with Jeremy Wilken, Author of Ionic in Action"
date:   "2015-02-17 14:00:00"
categories: ionic
author: '<img src="https://s3.amazonaws.com/ionicframework.com/blog/katie-md.jpg" class="author-icon">Katie'
published: false
---

![Ionic in Action](/img/blog/ionic-in-action-header.jpg)

[Jeremy Wilken](https://twitter.com/gnomeontherun)’s book <i>[Ionic in Action](http://ionicinaction.com)</i>, is being published by [Manning](http://manning.com/wilken) and released X. 

The book is not yet in print, but you can [get the early access version today](http://ionicinaction.com) (Save 42% with code ionic42) and give Jeremy direct feedback in the author forum about what you like, don’t like, or any questions you might have or content you’d like to see added. Jeremy will respond to your posts himself. 

We talked with Jeremy about his background, his use of Ionic, and the process of writing the book. 

<!-- more --> 
<b>Can you tell us a little about yourself as a developer and writer?</b> 

Like many developers, I have always had an interest in tinkering and understanding the moving parts. I’ve been building websites since I was in junior high, and gradually grew my skills to the point where I spent many years freelancing. More recently, I’ve joined larger scale projects and now work primarily as a front end engineer. I love working on usability and user experience. My journey to developer and writer wasn’t my plan during my formal education (I’ve got a degree in the arts), but that is pretty common in our field.

As far as being a writer, that part is somewhat new to me. Most of my writing was done in college, and while I did write quite a few papers then, the style is very different from the writing done for a technical book. I’ve worked pretty hard to improve my skills and I am fairly proud of what I have written so far.

<b>When did you start using Ionic, and what about it was compelling enough to you to write a book about it?</b>

I started with Ionic in early 2014, after it had been available for only a few months. My position at the time was investigating the feasibility of building a mobile app for internal employee use only, and, because our toolkit was primarily Node/AngularJS apps, Ionic fit into our skill set very well. I was able to build a prototype in a few hours and deploy it to a mobile device, which surprised me, compared to working with native development tools. (Granted, native development can be rapid, too, but you need to learn different skills.)

I have always had a passion for helping others learn, whether by speaking at events or teaching in my work role, so writing a book was a natural interest of mine. The benefits and power of Ionic opened doors for me to build mobile apps with my current skill set, and I wanted to empower others the do the same.

<b>Can you talk about the process of writing this book?</b> 

Writing a book is like a marathon. There’s a lot of ground to cover, and it takes a good cadence to reach the goal. The good thing is that while I’m the author, I have several editors who are able to help me articulate ideas, plan out concepts and examples, and review my work. 

The general process starts with nailing an outline and working with a publisher to get the details ironed out. Then it’s a matter of meeting deadlines for chapters, getting them reviewed by editors, revising, getting more feedback, and so forth. The hardest part is getting the inspiration to write when I have the time blocked off. Writing is a form of art, and it takes the right mindset to get quality work done.

Manning is the publisher for <i>Ionic in Action</i>, and I have to say everyone I have worked with there has been extremely helpful and professional. They have helped to make the book a high-quality work.

<b>You built three Ionic apps during the writing process! Which UI elements did you use, and can you tell us more about the development process?</b>

I used nearly every Ionic component in the three apps I built for the book, so the book provides a good reference for using the components in an integrated manner.
The first is an app that a resort might use to provide value for their guests. It has the slide box, lists, cards, content containers, basic navigation, and other smaller elements. 
Demo: http://ionic-in-action-chapter4.herokuapp.com/
Source: https://github.com/ionic-in-action/chapter4 

The second is a bitcoin market app, which provides real-time currency rates for bitcoin. Some of the components it uses are pull to refresh, popovers, tabs, charts, advanced lists, and nested views. 
Demo: http://ionic-in-action-chapter5.herokuapp.com/
Source: https://github.com/ionic-in-action/chapter5 

The third is a weather app, with the ability to find locations and see the weather forecast. It leverages modals, custom scroll area (paginated scrolling), loading external data, side menus, a search view, and some other smaller elements. 
Demo: http://ionic-in-action-chapter6.herokuapp.com
Source: https://github.com/ionic-in-action/chapter6 

The demos were developed very carefully and actually took more time than writing the text did. I almost wish I could also have written about the process of building these apps, because while they look very straightforward to develop, for the book, it was a journey of writing and refactoring. I wanted to make sure the examples were not contrived or boring, but also not too complex. They needed to illustrate the key features I wanted to teach, so I would make the first prototype and then remove half of the code to simplify. I really hope they resonate with readers, and even if you don’t buy the book, you can still tinker with the samples.

<b>Can you talk more about the functionality and technical aspects of the apps that you feel are unique, interesting, important, etc.?</b> 

I think each app is unique and very quite robust. I’d say they are 80% ready to be deployed to an App Store, with some of the obvious missing pieces listed at the end of the chapter, as a challenge for readers to implement themselves. Considering the actual amount of code and the number of features, it should be pretty clear how much Ionic bolsters app development.

AngularJS is a primary part of Ionic apps, and I’ve gone to great strides to provide an Angular primer, tips about Angular, and to structure the examples in a way that scales. There are too many bad and outdated examples of Angular code out there, and while it might be helpful for learning, it is a disservice to readers. 

<b>Could you talk about how you went about differentiating the app for different platforms? What did you do to align with the iOS platform, for example, vs. Android?</b>

Since the examples leverage Ionic’s components almost exclusively, there isn’t much that I needed to do to support each platform in the examples. The beauty of Ionic components, such as the tabs component, is that Ionic will identify the platform and adapt the style appropriately. 

That said, this is extremely important and is covered in the advanced topics chapter. When you start to design your own interface elements or modify the default ones, it is critical to preview your app in multiple platforms. The book covers techniques to allow you to target a platform, such as you want to use the action sheet in iOS and the popover in Android. Developers should spend time familiarizing themselves with the interface guidelines for both platforms and make decisions about what to use, because it ultimately helps users.

<b>Why do you think Ionic users will love this book?</b>
