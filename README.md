Image upload is one of the routine tasks any decent website would want to do. Fortunately it is simple, thanks to Cloudinary. You d not need huge databases to store the images. Instead we will upload the imgae to Cloudinary's servers and then reference the images by the urls that point to Cloudinary's database servers. For hackathon events, where you just want to get things done, this is ideal. Cloudinary let's you store 50000 images.


Quick Start
-----------

1.) Fork this repo

2.) Sign up for free on Cloudinary (https://cloudinary.com). Note down the cloud_name, api_key and the api_secret.

3.) Replace the noted details in the file server.js in the part mentioned below:

    cloudinary.config({
      cloud_name: 'your_cloud_name',
      api_key   : 'your_api_key',
      api_secret: 'your_api_'
    })

4.) Install the dependencies through:

    npm install

5.) Run the app:

    node server.js

6.) Open your browser and go to:

    localhost:5000


NOTE
-----

There is a small problem with this way of uploading images. Since we use multer to refer to the image's file path, it implicity creates a copy of the image in the uploads/ directory.I am working on finding a way to prevent this local storage of images from happening, since we are anyway storing the image on Cloudinary's database.

If you know how to do this, please let me know, so I can learn and make this code better.

