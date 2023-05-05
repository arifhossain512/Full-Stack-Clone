<a name="readme-top"></a>

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]

<!-- PROJECT LOGO -->

<div align="center">
  <a href="https://github.com/arifhossain512/Full-Stack-Clone">
    <img src="./client/public/img/fullStackLogo.jpg" alt="Logo" width="80" height="80">
  </a>
   <h3 align="center">Full-Stack-Clone</h3>
   <p align="center">
    A Full-Stack Web-App  
    <br />
    <a href="https://github.com/arifhossain512/Full-Stack-Clone"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/arifhossain512/Full-Stack-Clone">View Demo</a>
    ·
    <a href="https://github.com/arifhossain512/Full-Stack-Clone/issues">Report Bug</a>
    ·
    <a href="https://github.com/arifhossain512/Full-Stack-Clone/issues">Request Feature</a>
  </p>
</div>

[![Fiverr FullStack Clone](https://github.com/arifhossain512/Full-Stack-Clone/actions/workflows/node.yml/badge.svg)](https://github.com/arifhossain512/Full-Stack-Clone/actions/workflows/node.yml)

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage--features">Usage / Features</a></li>
    <li><a href="#local-development-file-setup">Local Development & File setup</a></li>
    <li><a href="#contribution">Contribution</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

[![Fiver-Clone Screen Short][product-screenshot]](https://fiverr-clone-tzhc.onrender.com/)

The Full Stack Clone Project is a powerful and dynamic web application that allows users to experience the core functionality of the popular online marketplace Fiverr.

 With the ability to :

* Create user accounts for buyers and sellers.
* Register , Login and Logout functionality for Authentication.
* The creation and publishing of new gigs by sellers across multiple categories. 
* Integrates Stripe payment processing to facilitate secure online transactions between buyers and sellers.
* Messaging system that allows buyers and sellers to communicate about the details of the gig and to exchange feedback and reviews.

 This Full-Stack Clone project  Built with React for the frontend, NodeJS and Express for the backend server, and MongoDB as the database, this project utilizes a range of cutting-edge technologies to deliver an immersive and intuitive user experience.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



## Built With

This section should list any major frameworks/libraries used to bootstrap your project. Leave any add-ons/plugins for the acknowledgements section. Here are a few examples.


* [![React][React.js]][React-url]
* [![React Query][React-Query]][React-Query-url]
* [![SASS][SASS]][SASS-url]
* [![Node][Node.js]][Node-url]
* [![Express][Express.js]][Express-url]
* [![MongoDB][MongoDB]][MongoDB-url]



<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started

These are the instructions to set up the project locally.

## Prerequisites

Before starting, ensure that you have the following:

Node.js and npm installed. If you don't have them installed, you can download them from https://nodejs.org.


## Installation

* Use git clone or fork the repo to have it on  your remote and local repository.
* go step by step to set the project locally smoothly.
1. Change the `.env.example to .env ` in both client and api folder
    ```sh
    cp .env.example .env
    ```
2. Set your environmental variable in the `.env` file(`applicable when using docker build to run this image in docker container `)
    ```sh
    MONGO=mongodb url (for database connection)
    JWT_KEY= randomly generated string (for authentication)
    STRIPE= stripe private key (only if you want to process payment)
    VITE_UPLOAD_LINK= cloudinary file upload link
    ```
    
3. Install NPM packages for` root directory` first then for api and client with one single command
   ```sh
   npm start
   npm install
   ```
4. To start both client and server in `development mode`
   ```sh
   npm run watch
   ```
5. To start both client and server in `development mode`
   ```sh
   npm run watch
   ```

## Local development file setup
* Change `backend server address` : copy and paste the below code in [newRequest.js](https://github.com/arifhossain512/Full-Stack-Clone/blob/main/client/src/utils/newRequest.js) file.

  ```js
    const newRequest = axios.create({
      baseURL:"http://localhost:8000/api",
      withCredentials: true,
     });
  ```
- > if you dont want to go through ` step 1 & 2 ` then just use the default backend server address in the [newRequest.js](https://github.com/arifhossain512/Full-Stack-Clone/blob/main/client/src/utils/newRequest.js) file to talk to my already served backend server api. `But` you will still need cloudinar upload link to add gigs and register, other wise file upload will `not work`.
<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- USAGE EXAMPLES -->
# Usage / Features
Usage are listed below:

* open buyer or seller account 
* log in as dummy user: 
    ```sh
    => For Buyer
      "username": buyer, "password": buyer
    => For Seller
      "username": seller, "password": seller
    ```
* `search gig in search, search by range min and max price value. filter by category`  
*` as buyer order/buy gigs with stripe payment.`
  + use a card number, such as 4242 4242 4242 4242.
  +  Enter the card number in the Dashboard or in any payment form.
  + Use a valid future date, such as 12/34.
  + Use any three-digit CVC (four digits for American Express cards).
  + Use any value you like for other form fields. 
*  `Give review after buying a gig.`
* `message the seller on order page.`
* `check unread message in message page.`
* `as a seller create new gig on add gig page`
  + add multiple picture in upload field and click upload before submitting you gig.
  + delete added gigs from gigs page.
  + check buyer orders in order page.
  + check buyer messages in message page.


<!-- _For more examples, please refer to the [Documentation](https://example.com)_ -->

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- ROADMAP -->
## `Roadmap of additional features in future`

- [ ] Create all the pages  for all  gig categories.
- [ ] Convert the project with TypeScript in both Frontend & Backend
- [ ] Database Migration from MongoDB to SQL/Postgresql.
- [ ] Hosting migration into any of these three  AWS EC2 instance/Azura Cloud / Google Cloud .
- [ ]  All other functionality the real fiver web-app time to time i will try to implement all of them one by one. Trust me when i say , i will do it for sure at any cost. 
    

See the [open issues](https://github.com/othneildrew/Best-README-Template/issues) for a full list of proposed features (and known issues).

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- CONTRIBUTING -->
## Contribution

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "feature".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- CONTACT -->
## Contact

Md. Arif Hossain - [TWITTER](https://twitter.com/arifhossain512) - mdarifhossain512bd@gmail.com

<!-- Project Link: [https://github.com/your_username/repo_name](https://github.com/your_username/repo_name) -->

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- ACKNOWLEDGMENTS -->
## Acknowledgments

Use this space to list resources you find helpful and would like to give credit to. I've included a few of my favorites to kick things off!

* [Choose an Open Source License](https://choosealicense.com)


<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- MARKDOWN LINKS  -->

<!-- & IMAGES -->
[product-screenshot]: ./client/public/img/fiverrClone.png

<!-- GITHUB URLS -->
[linkedin-url]: https://linkedin.com/in/arifhossain512
[license-url]: https://github.com/arifhossain512/Full-Stack-Clone/blob/master/LICENSE.txt
[contributors-url]: https://github.com/arifhossain512/Full-Stack-Clone/graphs/contributors
[forks-url]: https://github.com/arifhossain512/Full-Stack-Clone/network/members
[stars-url]: https://github.com/arifhossain512/Full-Stack-Clone/stargazers
[issues-url]: https://github.com/arifhossain512/Full-Stack-Clone/issues

<!-- BADGES -->

 [contributors-shield]: https://img.shields.io/github/contributors/arifhossain512/Full-Stack-Clone.svg?style=for-the-badge
[forks-shield]: https://img.shields.io/github/forks/arifhossain512/Full-Stack-Clone.svg?style=for-the-badge

[stars-shield]: https://img.shields.io/github/stars/arifhossain512/Full-Stack-Clone.svg?style=for-the-badge

[issues-shield]: https://img.shields.io/github/issues/arifhossain512/Full-Stack-Clone.svg?style=for-the-badge

[license-shield]: https://img.shields.io/github/license/arifhossain512/Full-Stack-Clone.svg?style=for-the-badge

[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555

[Next.js]: https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white

<!-- BADGES FOR  TECH STACK -->
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-Query]:https://img.shields.io/badge/-React%20Query-20232A?style=for-the-badge&logo=react%20query&logoColor=1572B6
[SASS]:https://img.shields.io/badge/SASS-20232A?style=for-the-badge&logo=SASS&logoColor=1572B6
[Node.js]:https://img.shields.io/badge/Node.js-20232A?style=for-the-badge&logo=node.js
[Express.js]:https://img.shields.io/badge/Express.js-20232A?style=for-the-badge&logo=Express&logoColor=1572B6
[MongoDB]:https://img.shields.io/badge/-MongoDB-20232A?style=for-the-badge&logo=mongodb
[Vue.js]: https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vuedotjs&logoColor=4FC08D
[Angular.io]: https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white
[Svelte.dev]: https://img.shields.io/badge/Svelte-4A4A55?style=for-the-badge&logo=svelte&logoColor=FF3E00
[Laravel.com]: https://img.shields.io/badge/Laravel-FF2D20?style=for-the-badge&logo=laravel&logoColor=white
[Bootstrap.com]: https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white
[JQuery.com]: https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=white

<!-- BADGES URL -->

[Next-url]: https://nextjs.org/
[React-url]: https://reactjs.org/
[React-Query-url]: https://tanstack.com/
[SASS-url]: https://sass-lang.com/


[Node-url]: https://nodejs.org/

[Express-url]: https://expressjs.com/

[MongoDB-url]: https://www.mongodb.com/
[Vue-url]: https://vuejs.org/

[Angular-url]: https://angular.io/

[Svelte-url]: https://svelte.dev/

[Laravel-url]: https://laravel.com

[Bootstrap-url]: https://getbootstrap.com

[JQuery-url]: https://jquery.com
