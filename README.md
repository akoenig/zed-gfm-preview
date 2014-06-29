# GitHub Markdown preview for [Zed](http://zedapp.org/)

## Installation

Install the package via [ZPM](http://zedapp.org/2014/05/zed-package-manager/).

    gh:akoenig/zed-gfm-preview

If you want to use the package as your default markdown preview, change the markdown handler in your `user.json`:

    modes: {
        markdown: {
            handlers: {
                preview: [
                    "!Tools:Preview",
                    "GitHub:Markdown:Preview"
                ]
            }
        }
    }

## Usage

1. Open a Markdown file
2. Open the preview split (Cmd+P or Ctrl+P)
3. Enjoy :)

You can also trigger the rendering manually:

1. Open a Markdown file
2. Open the preview split (Cmd+P or Ctrl+P)
3. Hit Cmd+. or Ctrl+. and select `GitHub:Markdown:Preview`

## GitHub API

If you're riding with the default configuration, you're allowed to preview your markdown file 60 times per hour. Not too much, right? With a private OAuth token you can level this limit up to 5.000 renderings per hour.

Go to your [settings page](https://github.com/settings/tokens/new) and create a new token. Open your [Zed](http://zedapp.org/) configuration project and add this token to your preferences section like:

    "preferences": {
        "githubToken": "YOUR_TOKEN",
        ...
    }

You will receive a warning message if you have only 10 renderings left :)

## Author

Copyright 2014, [André König](http://andrekoenig.info) (andre.koenig@posteo.de)
