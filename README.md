<p align="center">
  <a href="https://staging.archi-tektur.pl">
    <img src="https://staging.archi-tektur.pl/media/logo/horizontal-color.svg" alt="My logo" width="auto" height="100">
  </a>
   
   
# My portfolio page

Simple application that handles my portfolio.

<!-- TABLE OF CONTENTS -->
## Table of Contents

* [About the Project](#about-the-project)
* [Stack](#stack)
* [Installation](#installation)
* [Usage](#usage)
* [Roadmap](#roadmap)
* [Contributing](#contributing)
* [License](#license)
* [Contact](#contact)



<!-- ABOUT THE PROJECT -->
## About The Project

My refreshened portfolio page built with most leading and popular standards. It uses Symfony 4 on backend which might seem to be overkill, but I plan to place here ERP functionality in near future, so now it's solid base for adding new domains.

On front-end side I used Typescript and SASS bundled with Webpack Encore. All styles are minimalized by PostCSS modules.

## Stack
This section simply shows what tools and technologies I used while working on this project.
### Front-end
* HTML5 with WAI-ARIA
* SASS with modified SASS 7-1 pattern
* PostCSS autoprefixer and minifier
* RWD of course
* TypeScript for handling form asyncronously
* Webpack Encore for package bundling
* Own material design shadow package
### Back-end
* PHP 7.3.5
* Symfony 4.3
* Webpack Encore to Symfony bridge
* SwiftMailer Bundle
* FOSRestBundle
* PHPUnit
* PHPStan integration
* Twig templating engine
### Methodologies
* PHP code that complies all PSR standards
* SASS Block-Element-Modifier (BEM)
* Domain Driven Design (DDD)
* Test Driven Design (TDD)

## Installation

I don't see any reason why you want to download it and run locally, but surely you can do it.
1. Clone the repo
```sh
git clone https:://github.com/archi-tektur/portfolio.git
```
2. Download and install PHP dependiencies in order to run server-side code
```sh
composer install
```
3. Install Yarn packages to build project styles and front-end scripts correctly
```sh
yarn install
```
4. Run Webpack Encore to build styles
```
yarn run encore dev
 ```
5. You can server project locally with Symfony web server by running:
```sh
php bin/console server:run
```

<!-- USAGE EXAMPLES -->
## Usage

Actually I see no usages for this project. It may help you to understand how Symfony works, with unit and functional tests, but mainly here are shown my front-end skills.

## Roadmap

This version contains only portfolio page. Further versions will also contains more CMS/ERP functionalities.

## Contributing

As far as it's my private portfolio page I think that any contributing options should not be allowed, so please don't do so. 

If you have found any typo or other error, please message me directly on mail or Facebook ;)

## License

Distributed under the MIT License. See `LICENSE` for more information.

<!-- CONTACT -->
## Contact

Oskar Barcz, kontakt@archi-tektur.pl

Project Link: [https://github.com/archi-tektur/portfolio](https://github.com/archi-tektur/portfolio)