+++
title = "Creating a blog with a POSIX ssg and Github pages"
date = "2020-09-22"
author = "antaxiom"
authorTwitter = "" #do not include @
cover = ""
tags = []
keywords = []
description = "Outdated blog post on how I made my old site (this is only here for preservation)"
showFullContent = false
readingTime = false
+++

**Note, this is a really old blogpost and isn't really representative of my current workflow, this is here for preservation purposes only**

## What is ssg?

Ssg is self described as "a static site generator written in shell. Optionally it converts Markdown files to HTML with lowdown(1) or Markdown.pl"

It's written by a fellow called [Roman Zolotarev](https://www.romanzolotarev.com/)

![ssg4-source](https://www.romanzolotarev.com/ssg4.png)
_image of the sgg4 source code as featured on Roman's site_
<br /><br />

It's very lightweight and easy to use, and as said earlier it's completely written in shell script

## Why should I use a script instead of a full static site generator?

Most static site generators are unecesarily heavy with a lot of features you won't need, especially for the purposes of a small site like mine

## How do I use ssg5?

Using ssg is pretty simple but I don't think I'm fit for the task of explaining the exact use cases so I'll leave some useful links here:

[The author's official page and guide](https://www.romanzolotarev.com/ssg.html)

[Wolfgang's Video on the subject](https://www.youtube.com/watch?v=N_ttw2Dihn8)

## My modifications

### Ssg5

Wolfgang has made a [modified version](https://notthebe.ee/src/ssg5) which he explains [in his video](https://www.youtube.com/watch?v=N_ttw2Dihn8)

Now the problem with this version is that it doesn't work on *most* Linux (and other systems that use GNU cut) since [cut is a bit different](https://stackoverflow.com/questions/43171648/sed-gives-sed-cant-read-no-such-file-or-directory) on MacOS

[My version](https://raw.githubusercontent.com/antaxiom/antaxiom.github.io/master/bin/ssg5) has a check so it should work on both MacOS and Linux

## Makefile

I'm currently in the process of adding templates for when I make blog posts to the site.
I'm managing them using them makefile

## Plans going forward

I'm planning to write a bit more often on here and I want to add some minor optional Javascript

Before you get scared I have no plans on **_BLOATING_** the site up, but I'd like some more features.
Currently I'm working on getting a system for sorting and displaying all blog posts without me adding them into the `index.md` while also allowing you to sort by dates possibly categories (when I add those in the future)


## Github pages integration

This is where I come in,
since I don't have my own server I decided to use Github pages as means of hosting my site

First thing to note, Github requires to have your site either in the `/` or the `docs/` folder of your repo

![github-pages-picker](/img/github-pages-picker.png)

So you have to make sure ssg5 exports to `/docs` as `/` is obviously not viable

You can facilitate building with a [makefile](https://makefiletutorial.com/), you can reference [mine](https://github.com/antaxiom/antaxiom.github.io/blob/master/makefile) as a example of what _not_ to do

## You're done!

The site you're looking at right here was made using this exact method (could you tell?) if you want to look into some of the source feel free, it's available [here](https://github.com/antaxiom/antaxiom.github.io)

After this you can add some css to the site ([here's mine](https://github.com/antaxiom/antaxiom.github.io/blob/master/src/style.css)) and add something like a `.htaccess` file so you can get a clean address bar
