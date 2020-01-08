**Super Pizzas Server**
---
Steps to deploy:

1. Run `npm run build` on client project to create a production build of react app in build folder.
2. Follow [Laravel deployment](https://laravel.com/docs/6.x/deployment) guide to deploy the Laravel app. 
3. Copy the contents of react apps `build` folder to Laravel's public folder and update `/resources/views/welcome.blade.php` with contents of `index.html`.

Note: Step 3 can be automated in various ways depending on the hosting environment.
