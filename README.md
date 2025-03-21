---
title: Stream Toys
permalink: index.html
layout: default
---
# stream-toys

Personal split-flap display widgets for OBS, no business model attached.

## countdown

* Provide query option "s=x" for the countdown duration in seconds. Default is 300 seconds / 5 minutes.
* Provide query option "r=1" (HH:MM:SS) or "r=2" (HH:MM) for redirecting to clock when countdown reaches zero.
* Provide query option "d=1" for the countdown to disappear after expiration (redirect to about:blank).

### Examples

* [10 minutes](countdown.html?s=600)
* [15 minutes](countdown.html?s=900)
* [Default is 5 minutes](countdown.html)
* [10 minutes and redirect](countdown.html?s=600&r=1)
* [10 minutes and disappear](countdown.html?s=600&d=1)
* [Default 5 mins and redirect to HH:MM:SS](countdown.html?r=1)
* [6 mins and redirect to HH:MM](countdown.html?s=360&r=2)

## clock

### Examples

* [HH:MM:SS](clock-seconds.html)
* [HH:MM](clock-minutes.html)

## worldclock

### Examples
* [Default set of locations](clock-world.html)
* [Custom set of locations, passed as query string](clock-world.html?FRA=Europe/Berlin&NYC=America/New_York&MEL=Australia/Melbourne)

### Custom CSS

I personally run the world clock using a custom set of locations, own location first, with the following custom CSS in OBS browser to set the first line apart and to hide the blank flapper:

```
.clock:nth-of-type(1) { padding-bottom: 2em; }
.blank { visibility: hidden; }
```

# License information

## Bundled components

* Flapper Library
  * Copyright (c) 2012 Justin Kerr Sheckler
  * See license.txt in the bundled distribution
* jQuery
  * Copyright OpenJS Foundation and other contributors, https://openjsf.org/
  * http://jquery.org/license
* jQuery Transform
  * Copyright 2010, Grady Kuhnline
  * http://jquery.org/license

## Widgets

```
BSD Zero Clause License

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
```
