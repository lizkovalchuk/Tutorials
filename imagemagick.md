# Imagemagick

1. [ What it is ](#what-it-is)

<a name="what-it-is"></a>

### **_What it is_**

`Imagemagick` is a library for automating the updating of images which is ideal for updating multiple images. `Imagemagick` was used to watermark all images in a directory with the following command:

```
mogrify -draw "rotate -45 text 0,0 WATERMARK" -pointsize 200 -stroke black  -fill white  -gravity Center -resize 25% *.jpg
```

The above command does the following:

1. Calls the mogrify library
2. `-draw` will draw according to specific parameters:
    - rotate the text by -45 degrees
    - draw text (can draw spaces)
    - `0, 0` specfies to add the text in the center of the image
    - `WATERMARK` prints the text `WATERMARK`
    - `-pointsize` is the size of the text
    - `-stroke` and `-fill` also style the text
    - `gravity Center` centers the text
    - `resize 25%` resizes the image
    - `*.jpeg` applies the transformations to all the images in the directory

Read more at: 

- <https://imagemagick.org/script/command-line-options.php#draw>
- <https://imagemagick.org/script/command-line-options.php#annotate>
