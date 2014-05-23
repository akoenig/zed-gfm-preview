# GitHub Markdown preview for [Zed](http://zedapp.org/)

**Note:** This package is using a _bleeding edge_ API of Zed which is currently only available in the master branch.

## Installation

Install the package via [ZPM](http://zedapp.org/2014/05/zed-package-manager/).

    gh:akoenig/zed-gfm-preview

If you want to use this as your default markdown preview, change the markdown handler in your `user.json`:

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

## Changelog

See the [HISTORY.md](https://github.com/akoenig/zed-gfm-preview/blob/master/HISTORY.md) file for further information.

## Author

Copyright 2014, [André König](http://andrekoenig.info) (andre.koenig@posteo.de)