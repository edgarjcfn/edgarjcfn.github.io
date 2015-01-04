title: Lucy is a Spy with Diamonds
date: 2014-12-28 19:03:10
tags:
 - programming
 - hackathon
 - javascript
categories:
 - Blog
 - Lucy
---
A few weeks ago, me and my brother made a game together for the first time ever. We scored first place in a [global Hackathon](http://koding.com/Hackathon) and had a lot of fun in the meantime!
<!-- more -->
It was about time I did a game with my brother. Me and [Ziro](http://zironeto.carbonmade.com/) have both been working with games for more than 10 years each. And it helps that we have complementary skills: I'm a developer, he's a game artist, animator and concept artist. Honestly, I don't really know why it took us so long to start working together on a game, but we were so happy with the results that we are definitely going to keep on working together in the future

It all started when I opened a newsletter from [Koding, Inc.](http://www.koding.com) explaining that they were organizing the world's first global hackathon. This company develops an amazing tool for online real-time collaboration between developers. They have a browser-based IDE complete with terminal, file explorer, and syntax highlighting. Once I realised that one of the themes for the Hackathon was _"A game for introducing software development to a beginner"_, I was immediately interested. 

I had already been working on the previous few weeks on a similar pet project and I could use the learnings from this project to make a really cool game. To be completely fair with other competitors I wrapped-up a starter kit for the Hackathon that included all of the boilerplate code for hooking a python interpreter to a game canvas. The starter kit can be found [here](https://github.com/edgarjcfn/koding-game-starterkit).



So I decided to invite my brother who is extremely talented and in the 48h of the competition we made a game called _Lucy is a Spy with Diamonds_ (You can play it at [my virtual machine on Koding.com](http://edgarjcfn.koding.io/Lucy), and [check out the repository here](https://github.com/edgarjcfn/koding-spy) )

{% rawblock %}
<blockquote class="twitter-tweet" lang="en"><p>Going on an almost 24h of effort into our educational game for the <a href="https://twitter.com/koding">@koding</a> <a href="https://twitter.com/hashtag/hackathon?src=hash">#hackathon</a>. It&#39;s starting to shape up! <a href="http://t.co/SpMpOT5a1Y">pic.twitter.com/SpMpOT5a1Y</a></p>&mdash; Edgar Neto (@edgarjcfn) <a href="https://twitter.com/edgarjcfn/status/541675411529543681">December 7, 2014</a></blockquote>
<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>
{% endrawblock /%}


###About the game
In this game the player has to control Lucy, a kick-ass spy for a top secret government agency called _Organization of Marvelous Girls (O.M.G.)_. She's in a top-secret mission to recover diamonds stolen by the baddies at the _World Thieves Federation (W.T.F.)_
But after single-handedly defeating all the thieves, Lucy finds herself locked in their headquarters and the player needs to help her escape.
The player will do so by typing very simple commands into an interpreter and our groovy spy will obey them one-by-one.

![Lucy](./screenshot1.png "Lucy")

###Technical rundown
The game was written in [Typescript](http://www.typescriptlang.org). I chose this strongly-typed javascript compiler because it felt like a good bridge for me, since I used to develop in C# for many years. 

Being a new language and still in beta there were some challenges found during the way, but overall I had a very good impression of Typescript and its toolsets. 

The heart of the game lies in an awesome open-source python interpreter called [Skulpt](http://www.skulpt.org/). With it you have a full-fledged python interpreter on your browser that you can expand by writing your own modules to it. 
In the end, the module that controls Lucy is quite simple, here's the main part of it (the documentation on how to write custom Skulpt modules can be found [here](https://github.com/skulpt/skulpt/blob/master/HACKING.rst#adding-a-module)).

```javascript
var $builtinmodule = function(name)
{
    'use strict';

    //...    
    var mod = { };
    mod.moveForward = new Sk.builtin.func(function(x) {
            var amount = x.v || 1;
            for (var i=0; i < amount; i++)
            {
                var moveCmd = new KodingSpy.Command.MoveCommand(1, SkulptAnimator);
                Sk.commandChain.append(moveCmd, Sk.currLineNo);
            }
        });
    mod.turnLeft = new Sk.builtin.func(function() {
        var turnCmd = new KodingSpy.Command.TurnLeftCommand(SkulptAnimator);
        Sk.commandChain.append(turnCmd, Sk.currLineNo);
    });
    mod.turnRight = new Sk.builtin.func(function() {
        var turnCmd = new KodingSpy.Command.TurnRightCommand(SkulptAnimator);
        Sk.commandChain.append(turnCmd, Sk.currLineNo);
    });
    //...
    return mod;
}
```

```Sk.currLineNo``` is provided by Skulpt but ```Sk.commandChain``` and ```SkulptAnimator``` are custom classes that I wrote and passed on to the Skulpt interpreter as global variables. (Inconsistent naming and global variables, that's what you get by coding it all in 48h)

The command chain is responsible for storing commands and executing them in a sequence, while the Animator is responsible for actually making the character move around in the game canvas.

The actual game was all done using the [Phaser](http://phaser.io) HTML5 game framework. They are open-source, with a really good focus on keeping Typescript support.

If the player can count on a full-fledged python interpreter thanks to Skulpt, the actual textbox provides custom autocompletion, keyboard shortcuts and syntax highlighting thanks to [Ace JS](http://ace.c9.io/). I was amazed how easy it was to extend it to provide custom autocompletion, and I managed to do it in the very last minutes of the Hackathon.

### Looking Forward

Future implementations: chose language, angular js, code.org

acknoledgements: thank natalia and olga





