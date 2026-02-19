import React, { useState, useEffect } from 'react';

interface WritingEntry {
  id: string;
  title: string;
  excerpt: string;
  fullText?: string;
  hasReadMore: boolean;
}

const MOCK_WRITINGS: WritingEntry[] = [
  {
    id: 'w-3',
    title: 'DIARY ENTRY #3',
    excerpt: "My name is Jesus Carveros. I’m 67. I take nothing for granted. My life is mindful. Spiritual. Creative. And meditative. My personal goal is to seize and enjoy every moment. To be grateful. And to have fun. Years ago I started wearing Mexican wrestlers masks. And overalls. And going to places dressed like this. No one knew who I was. Lots of people asked me questions.",
    fullText: `My name is Jesus Carveros.
I’m 67.
I take nothing for granted.
My life is mindful.
Spiritual.
Creative.
And meditative.
My personal goal is to seize and enjoy every moment.
To be grateful.
And to have fun.
Years ago I started wearing Mexican wrestlers masks.
And overalls.
And going to places dressed like this.
No one knew who I was.
Lots of people asked me questions.
Dressing as a Mexican wrestler is intriguing.
And engaging.
For me Mexican wrestling has nothing to do with wrestling.
It’s a way to escape.
So this is what I do.
I go to places wearing a Mexican wrestling mask.
And overalls.
As the world around us speeds up.
And goes crazy.
I’ve decided to slow down.
Not to rush.
Not to be busy.
To be present.
Not distracted.
This is easier said than done.
I spend as much time as I can in nature.
I like to feel sand beneath my feet.
I love paddling.
I roll my overalls’ legs up.
And paddle.
I do this very early in the morning.
When the beach is empty.
I feel the breeze.
And the water.
I close my eyes and listen to the waves.
And smell the salt.
I walk slowly.
Very slowly.
I’m in no rush.
This is relaxing.
And up lifting.
I breathe long deep breaths.
I savour every second.
Over the years friends have joined me.
We go to the beach together.
We wear Mexican wrestling masks.
And overalls.
And roll the legs up.
We walk slowly through the water.
We paddle.
No one talks.
There’s no chitter chatter.
Just friends enjoying this special moment.
It’s beautiful.
It brings us together.
We share the experience.
Sometimes there’s eight or ten of us.
Sometimes only a few.
How many doesn’t matter.
It’s the process that’s important.
The doing.
I thought it might be a good idea to share what we do.
To let other people know.
Because other people might want to join us.
To walk slowly through the water.
Wearing Mexican wrestling masks.
And overalls.
No shoes.
No talking.
Breathing.
Being.
It’s free.
And it’s fun.
It takes one hour.
Thirty minutes in one direction.
Thirty minutes back.
We start at 6 am.
And finish at 7.
If you’d like to join us then please contact me thru Nextdoor.
Jesus C. is my name on Nextdoor.
Mexican Wrestlers of Rye.
Go slow.
See you next Tuesday.`,
    hasReadMore: true
  },
  {
    id: 'w-21',
    title: 'DIARY ENTRY #21',
    excerpt: "I woke up thinking. I’m 67. Time is running out. There’s definitely more years behind me than in front. I won’t live til I’m 134. No one will. Not yet. I wouldn’t want to live that long in any case. Living til I’m 80 would be good. Living til I’m 80 would mean I’ve got 13 Summers left. 13 Summers. Mmmmm. 13 Summers.",
    fullText: `I woke up thinking.
I’m 67.
Time is running out.
There’s definitely more years behind me than in front.
I won’t live til I’m 134.
No one will.
Not yet.
I wouldn’t want to live that long in any case.
Living til I’m 80 would be good.
Living til I’m 80 would mean I’ve got 13 Summers left.
13 Summers.
Mmmmm.
13 Summers.
Think about the last 13 Summers.
How quickly they’ve whipped past.
The next 13 Summers will fly by too.
Then that’s it.
Bosh.
Cheerio.
When you consider life in this way it helps you focus.
It reminds you that every moment is important.
And precious.
Not to take anything for granted.
That every day is a gift.
We’ve heard all this before.
Well it’s true.
It’s the reason I became a Mexican wrestler.
It was a turning point.
A milestone.
A day when everything changed.
I decided to simplify my life.
To get rid of what I didn’t need.
All that stuff was bogging me down.
Trapping me.
For me the less I own the more I feel free.
So I pared everything back to bare essentials.
I decided to keep what is necessary.
Nothing else.
I have a simple view on living.
I want to enjoy the passage of time.
That’s it.
No more or less.
Enjoying the passage of time.
That’s all there is to it.
Well that’s what I think.
Luckily we’re all different.
It’d be a shame if we were all the same.
And if we all agreed with each other.
The more opinions the merrier in my book.
This means the concept of enjoyment takes many forms.
Some people like fishing.
Others like playing golf.
Some people enjoy sitting around watching telly.
Others love drinking.
Or riding.
It’s horses for courses.
I’ve made the decision not to judge people.
Everyone to their own.
It’s hard not to be judgemental.
These days most people are ready and willing to criticise.
To judge.
Not me though.
I try not to have expectations.
I do my best to accept people for what they are.
After all, how they want to be is up to them.
If you don’t have expectations then you won’t be disappointed.
Expectations set people up to let you down.
To fail.
If you accept people then everything’s fine.
You’re not disappointed.
Simplifying life makes it better in my opinion.
But that’s my opinion.
I’ve only got my opinion.
Sometimes life’s hard to simplify though.
Because life is naturally complicated.
And confusing.
Keeping things simple takes a lot of effort.
It’s not easy.
You have to work at it.
If you don't keep it simple life goes back to being complicated.
Then you have to make it simple again.
It’s a recurring rhythm.
It ebbs and flows.
While the world goes mad around us I think its a good idea to go slow.
To keep still.
Not to worry about how long we’ve got left.
To enjoy the moment.
It’s all we have.`,
    hasReadMore: true
  },
  {
    id: 'w-36',
    title: 'DIARY ENTRY #36',
    excerpt: "I went to Jempson’s in Peasmarsh today. I love it there. The first thing I did was go to the car wash. Not the drive thru. It never gets into the corners and cracks. I prefer the car wash they call the jet wash. Basically you do it yourself. You used to go to the shop and pay them and they’d give you a token. Then you’d put the token in the machine.",
    fullText: `I went to Jempson’s in Peasmarsh today.
I love it there.
The first thing I did was go to the car wash.
Not the drive thru.
It never gets into the corners and cracks.
I prefer the car wash they call the jet wash.
Basically you do it yourself.
You used to go to the shop and pay them and they’d give you a token.
Then you’d put the token in the machine.
Well you don’t do that anymore.
Now you park in the space and you have a series of digital options to choose from.
The first is how long you want to spend doing it yourself.
I thought 8 minutes would be enough time so I paid for 8 minutes. It cost £4.
Cheaper than it cost previously by 50p.
Next you have a series of options regarding what you want to do. This is where it gets challenging.
There’s 3 different coloured pipes offering 3 different functions. You choose what you want by pressing an area on a screen. There’s an attachment that sprays out foam.
An attachment that sprays out water.
And an attachment that has a brush on it that has water coming through the bristles.
To be honest you have to spend time trying to work out what the 3 options are as it’s not explained that well.
2 of the pipes hang from above.
The other is on the ground.
Once you pay by putting your credit or debit card up to the machine, a timer comes on.
Now you’ve got 8 minutes to wash your car yourself.
The digital clock has large numerals on it so you can see it while you’re washing and brushing and spraying.
It’s pretty stressful as you have to allocate a certain amount of time to each task.
First spraying the foam.
This wasn’t an option previously.
It’s quite therapeutic when you’re doing it.
A wall of white foam bursts from the nozzle like a fountain.
You walk around the vehicle, covering it in white foam.
Then you press the brush icon on the digital screen.
And you rush around with the brush, getting the foam off.
It feels like life is rushing past as the digital clock reminds you that you only have a certain amount of time remaining.
Then comes the last part of the process.
The high pressure spray.
This is a bit more fun than foaming or brushing.
The race against time continues.
I had around 80 seconds to spray the car and get the suds off.
I just managed to finish the task when the buzzer went and the machine stopped.
Then I gave a sigh of relief.
I’d done it.
I’d managed to use Jempson’s new jet wash without asking anyone what to do.
This was a satisfying moment.`,
    hasReadMore: true
  },
  {
    id: 'w-67',
    title: 'DIARY ENTRY #67',
    excerpt: "I’m not sure why but I keep seeing snails in Rye. Not people driving slowly. Actual snails. They look very similar to each other in appearance. That shiny browny colour on the outside. With a moist, slimy inner bit. Seeing the snails gave me an idea. I’d go on a snail crawl. This would give me something interesting to do. Well I did and I counted 267 snails today.",
    fullText: `I’m not sure why but I keep seeing snails in Rye.
Not people driving slowly.
Actual snails.
They look very similar to each other in appearance.
That shiny browny colour on the outside.
With a moist, slimy inner bit.
Seeing the snails gave me an idea.
I’d go on a snail crawl.
This would give me something interesting to do.
Well I did and I counted 267 snails today.
I walked around Rye with my eyes peeled.
Looking for snails.
And boy did I see lots.
It was very satisfying.
Some snails are a lot easier to spot than others.
Some snails are in obvious places.
Some snails are hidden away.
I found 6 on the bottom edges of drainpipes.
49 were on walls in the High Street.
28 were on window ledges.
64 were in cracks between buildings.
31 were on glass window panes.
3 were on front doors.
1 was on a bin.
I can’t remember where the others were as I lost track.
I was thinking to myself: “What am I doing walking around Rye counting snails?”
It dawned on me that I was the only person doing this.
Numerous passers-by asked me what I was doing as I was wearing a high-vis, reflective yellow jacket, and a pith helmet.
The jacket allowed people to see me easily.
And the pith helmet gave the impression I was an explorer from the 1940s.
I had my black Wellingtons on too.
Just in case.
They are one size too small and they hurt my feet.
When I wear them I limp.
I was on my knees (bending down) a lot so I wore knee pads.
When you bend down and put pressure on your knees I find knee pads help.
They make a little cushion between your knee and the hard ground.
I didn’t actually touch any snails.
I just looked at them and took photos of them on my Olympus 35mm camera.
I like the Olympus as it’s small and easy to handle.
The only problem is that it’s not digital.
I have to buy 35mm film and load it by hand.
Then unload it and get it developed.
Then I have to print photos from the negatives.
Even though I have my own darkroom at home it takes ages to print photos.
Youngsters these days have no idea what we used to have to do to get a printed photo.
These days they all have iPhones and see the image immediately.
In some way this makes things a bit too easy.
They just take lots of photos instead of concentrating on each individual image.
It’s a lazy way to take photos.
Anyway I photographed each snail.
And made a note of the time and the place of each photo.
I wrote these details (using a Bic biro) in my notepad.
I like to use old methods where I can.
Writing instead of typing.
A proper notebook instead of a tablet.
Dunno about you but I find the word “tablet” very annoying.
Tablet?
I always thought a tablet was the same as a pill.
Not these days it isn't.
It’s a small computer.
Why did they call it a tablet?
It’s not a tablet.
It’s a small computer.
Anyhow I’m going back out tomorrow to see if the snails have moved.
I can’t wait.
If you see me please stop and say hello.
Counting snails can be a lonely business.
It’s nice when people stop and chat.
Much better than sending texts or emails.
Whatever happened to talking?
Talking of talking, I made an important discovery.
Something I never knew happened.
If you look very closely at a snail you can see it’s got a little face.
It has a mouth and eyes but no nose.
Watch closely and you’ll see the mouth start to move.
I think snails talk.
Don’t ask me what language.
Obviously not English.
Well I don't think it's English but it might be.
I wonder if snails in England talk the same language as snails in France?`,
    hasReadMore: true
  },
  {
    id: 'w-82',
    title: 'DIARY ENTRY #82',
    excerpt: "I’m giddy with excitement. I can’t hold it in. I’m pretty confident I’ve uncovered a secret sect. I’ll explain what happened. I was walking around a local supermarket doing my shopping. It’s such a fantastic place. And the staff are lovely. They are all so helpful and friendly. And knowledgeable. Whoever you ask. Whatever you ask. They know the answer.",
    fullText: `I’m giddy with excitement.
I can’t hold it in.
I’m pretty confident I’ve uncovered a secret sect.
I’ll explain what happened.
I was walking around a local supermarket doing my shopping.
It’s such a fantastic place.
And the staff are lovely.
They are all so helpful and friendly.
And knowledgeable.
Whoever you ask.
Whatever you ask.
They know the answer.
Sometimes I test them by asking for obscure types of herbs or mouthwash or dairy products.
They always know where to find them.
When I go supermarket shopping I allow at least 4 hours.
It’s more of a day out than a shopping trip.
Parking is always an issue.
The car parking spaces are narrower than I’d like them to be.
Being a Mexican wrestler I drive an American car.
It’s a 1961 Cadillac Coupe de Ville.
It’s very long.
And very wide.
However it’s very comfy.
Like driving a marshmallow.
I always wear one of my Mexican wresters masks when I drive the Caddy.
Don’t ask me why.
So there I was.
Minding my own business.
Buying things I don’t need.
Like Twirls.
And Creme Eggs.
And Halo Top ice cream.
Halo Top is very low in calories.
Only 360 calories in a tub.
This means you can eat a whole tub and not feel guilty.
I was near the section where they sell the frozen food.
This is where I spotted what I believed to be a sect member.
She looked normal.
I think members of sects generally look normal.
This is because they don’t want to draw attention to themselves.
They want to blend in.
There was something about her.
Her intense gaze perhaps.
Or the red armband on her left arm.
This was the thing that looked most out of place.
A red armband.
She was pushing one of those trolleys that’s the size of a small car.
Some people take pride in filling their trolley til it overflows.
Then just walking about the store with it.
They often have smirks on their faces.
Are they showing off?
Do they want people to look at them and their trolley?
Do they want people to think they’re rich enough to buy lots of food?
Maybe.
Or maybe they’ve got a big family.
And they need lots of food.
It’s funny how you can view the same situation from differing perspectives.
One positive.
One negative.
And cynical.
I prefer to take a positive point of view myself.
Not thinking bad things about people I don’t even know.
The woman with the red armband had one of these trolleys.
It was piled high with all sorts of produce.
From exotic fruit to frozen pizza.
Instead of picking things up she was putting things back !
She was taking things out of her trolley and putting them in sections they shouldn’t be in.
She was relaxed and casual in her actions.
Confident.
I saw her place a frozen pizza on a shelf beside a box of Kellogg’s Crunchy Nut Cornflakes.
A family size pack of mint Aeros on a shelf next to a watermelon.
A bag of red potatoes in a freezer beside some frozen peas.
A loaf of bread on a narrow shelf next to a copy of Vogue magazine.
I couldn’t believe my eyes.
At one point I thought I was dreaming.
Was someone really putting things where they shouldn’t be?
For the sake of it.
I watched her for 20 minutes or so.
I felt like an undercover cop.
Or a private detective.
I found myself hiding in case she saw me.
Peeping round aisle corners.
She took joy in placing products in the wrong places.
Moving stuff around.
Then something strange happened.
She stopped at the fish counter.
And stood there.
Just looking at the fish.
A man sidled up beside her.
He stopped.
They were both standing there.
Staring at the fish.
Next, the man did something unusual.
He leant forward.
And he put a bunch of carrots next to a sea bass.
Then he walked off.
This is when I spotted something I couldn’t quite believe.
The man was wearing a red armband.
Just like the woman’s red armband.
Same size.
Same shade of red.
The man had a trolley full of food and drinks.
Quietly and cautiously I followed him
He cruised up to the bread and cake section.
I saw him place 3 large tins of Heinz Tomato soup next to some Eccles cakes.
I watched him some more.
He pushed his trolley to the frozen ready-meal section.
He started taking stuff out of his trolley.
And putting it in the freezer.
Next to the frozen curry.
He removed at least a dozen tubes of Colgate toothpaste.
A small box of ear buds.
2 bottles champagne.
Some pasta in a box.
Each item was carefully placed in a freezer cabinet.
The woman with the red armband moved next to him.
She stopped.
She started putting her stuff in the cabinet next to his.
I saw her put a bunch of tulips in the freezer.
Followed by a packet of processed cheese.
At one point I could swear they were both laughing.
The pair of them standing there.
Unloading.
What was going on?
What was I witnessing?
Perplexed and confused I walked off.
I call their actions “Removing”.
Then I nearly fell over.
I saw 3 more people wearing red armbands.
Exactly the same shape and colour as the armbands I spotted on the man and the woman.
All 3 of them looked pretty normal.
But what does normal mean these days?
What is normal?
And who says what’s normal?
And what isn’t normal.
Whose prerogative is it to judge?
Maybe I’ve uncovered a sect.
They might be anarchists.
Or conceptual artists.
This could be a performance art piece.
Or maybe Removing is a phenomenon I simply don't know about.
People worldwide might be doing this.
There could be a network of online chatrooms and websites all sharing information about Removing.
This might be a hobby.
Or a compulsion.
Or a habit that people can’t stop.
Who knows?
What’s normal to me probably isn't normal to them.
We’re all so different aren’t we.
And isn’t that a good thing.
I’m sure some people think dressing as a Mexican wrestler isn’t normal.
Well it’s normal to me.`,
    hasReadMore: true
  },
  {
    id: 'w-99',
    title: 'DIARY ENTRY #99',
    excerpt: "I walked up the hill from Rye to Playden today. It was cold. But I kept going. I got puffed out and started to think about the people that built the pyramids in Egypt. And how they got those huge blocks of stone in place. No one seems to have an explanation. Or do they? Was it really possible? Or were aliens involved? The blocks were far too heavy and massive.",
    fullText: `I walked up the hill from Rye to Playden today.
It was cold.
But I kept going.
I got puffed out and started to think about the people that built the pyramids in Egypt.
And how they got those huge blocks of stone in place.
No one seems to have an explanation.
Or do they?
Was it really possible?
Or were aliens involved?
The blocks were far too heavy and massive for groups of people to move by themselves.
Don’t forget they didn’t have machines back then.
Or computers.
Just donkeys.
Well you try getting a donkey to move a heavy block of stone in the boiling sun.
They’re not that keen let me tell you.
Getting to the top of Rye Hill was an achievement.
I felt like I’d conquered Everest when I got there.
I had a sit down when I got to the top.
And ended up watching the cars.
Blimey they’re rapid aren’t they?
Zooming down the hill towards CostCutter.
You’d think they were in a race.
But they’re not.
They’re just driving along.
Very quickly.
I don’t understand why they go quite so fast.
If they have an accident they’ll hurt themselves.
And others.
And what for?
To get somewhere a bit sooner.
Mmmmm.
Is it worth it?
And suppose they’re not late.
They still drive fast.
Maybe they think it’s clever.
Well I don't think it is clever.
I think it’s a bit thick.
Some people think doing flashy things like driving fast is impressive.
Impressive to who though?
Who is impressed if someone drives fast?
Who really cares?
Here’s a thought about trying to impress others.
Why do people buy things they don’t need with money they don’t have to impress people that don’t like them?
Or care about them?
Cars.
Jewellery.
Clothes.
All this flashy stuff.
What’s the point?
Is there a point?
Can someone please explain ?`,
    hasReadMore: true
  },
  {
    id: 'w-101',
    title: 'DIARY ENTRY #101',
    excerpt: "Does anyone know how to get your foot out of a drainpipe? I spent the afternoon putting my foot into different drainpipes and it’s got stuck. Now I can’t get it out. I don’t want to cut the drainpipe. Or take my shoe off. It’s cold and I’m wearing thin socks. I should have worn thicker socks but I didn’t. It’s my left foot. My right foot is OK.",
    fullText: `Does anyone know how to get your foot out of a drainpipe?
I spent the afternoon putting my foot into different drainpipes and it’s got stuck.
Now I can’t get it out.
I don’t want to cut the drainpipe.
Or take my shoe off.
It’s cold and I’m wearing thin socks.
I should have worn thicker socks but I didn’t.
It’s my left foot.
My right foot is OK.
Both hands are fine too.
I’m wearing my leather gardening gloves.
It’s getting dark.
And cold. Any advice will be much appreciated.
This has never happened before.
I mean my foot has never got stuck before.
That said I’ve not put it up a drainpipe before.
Isn’t it odd when you try new things.
Sometimes they work out fine.
Sometimes they don’t.
This time it hasn’t.`,
    hasReadMore: true
  }
];

const Writings: React.FC = () => {
  const [expandedEntry, setExpandedEntry] = useState<WritingEntry | null>(null);

  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setExpandedEntry(null);
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  return (
    <div id="cat_main">
      <div id="cat_left">
        {/* Empty cat_left to maintain layout without sub-navigation items */}
      </div>

      <div id="cat_right">
        <div id="writing_objects">
          {MOCK_WRITINGS.map((writing) => (
            <div key={writing.id} className="writing-card">
              <h3>{writing.title}</h3>
              <p>{writing.excerpt}</p>
              {writing.hasReadMore && (
                <a 
                  href="#" 
                  onClick={(e) => {
                    e.preventDefault();
                    setExpandedEntry(writing);
                  }}
                >
                  Read More
                </a>
              )}
            </div>
          ))}
        </div>
      </div>

      {expandedEntry && (
        <div className="expanded-writing-overlay">
          <div className="close-btn" onClick={() => setExpandedEntry(null)}>
            Close (ESC)
          </div>
          <div className="expanded-writing-content">
            <h2>{expandedEntry.title}</h2>
            <div className="full-text">
              {expandedEntry.fullText || expandedEntry.excerpt}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Writings;