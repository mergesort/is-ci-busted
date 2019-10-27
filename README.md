

## Is your CI busted? Let the world know!

![yes!](images/yes.jpg)

## Fixed it up? Update your site.

![no!](images/no.jpg)

### What is this?

A dumb site I made to learn how to use Google Cloud Run and enough JavaScript to make something happen. If you want a dumb site of your own you can deploy this using Docker!

### What does it do?

It lets you set a large white page with the text **Yes** or **No** depending on the state of your CI. Sorry dark mode users, I didn't even do enough work to make a black on white version.

### How do I use it?

Set the text:
```https://mydomain.com/set?value=[yes or no]&token=someVeryRandomToken```

See the text:
```https://mydomain.com```

### How else do I use it?

This is a very dumb site, it doesn't do anything else. Was that not clear enough? If not, feel free to send [PRs](https://github.com/mergesort/is-ci-busted/pulls) that I likely won't notice for weeks.