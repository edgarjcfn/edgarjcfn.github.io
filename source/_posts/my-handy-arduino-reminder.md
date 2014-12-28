title: My handy Arduino reminder
date: 2014-03-16 17:05:49
tags:
 - arduino
 - programming
 - making
categories:
 - Arduino
---
A while ago I got my first Arduino kit as a backer for an [Indiegogo Campaign](http://www.indiegogo.com).

<!-- more -->

It was a reward for backing with only 9 USD and it came fully equipped with an [Arduino Leonardo](http://arduino.cc/en/Main/ArduinoBoardLeonardo#.UyWnhGRDsb4), a small breadboard, some prototyping wires, LEDs, resistors and some other stuff. It was a pretty good deal for its price, even though [the author of the campaign](http://borderlesselectronics.org/) doesn't seem to have put up an online store where I could purchase additional kits.

The kit was sitting around for a while until I decided to give it a try. After downloading the [Arduino Software](http://arduino.cc/en/Main/Software#.UyWqUGRDsb4) and following some of the tutorials, I had my first blinky (the Hello World of this new Electronics Universe).

<iframe width="640" height="390" src="//www.youtube.com/embed/lhIH2LDgSmQ" frameborder="0" allowfullscreen></iframe>


Then I decided to take it to the next step, and put my new learnings to a good use.

Those who know me, know that I'm a very forgetful person. If it wasn't for constant reminders on my smartphone I might as well forget to breathe. And this has a big toll on those around me (especially my cats, since I'm constantly forgetting to clean the litter box)

![Accio the cat](./accio.jpg)
> I even caught Accio The Cat trying to code a reminder routine so it wouldn't happen again

### The idea
I ended up working on something that would work like this:

1. When a Green LED is lit, all is good (box is clean)
2. After 24h, the Yellow LED is lit (dude, pay attention)
3. After 24h, the Red LED starts to blink (critical!!)
4. After I clean the box, I press a button and the Green LED is back.

### The code
 The code is available on this [Gist](https://gist.github.com/edgarjcfn/9583750.js).

###Results
I have to say that in general, not only the litter box is a lot cleaner after I started using the reminder, I have outsourced my wife's job of having to remind me everyday (she loved it!). And the daily repetition and reminder also helped me to develop a habit in which I barely need to look at the reminder now, to keep the box clean.
