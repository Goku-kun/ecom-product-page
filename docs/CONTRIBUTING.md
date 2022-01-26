# Contributing

When contributing to this repository, please first discuss the change you wish to make via issue, email, or any other method with the owners of this repository before making a change.
Please note we have a [code of conduct](CODE_OF_CONDUCT.md), please follow it in all your interactions with the project.

## Development environment setup

To set up a development environment, please follow these steps:

1. Clone the repo and change the directory to this repository directory

```sh
git clone https://github.com/Goku-kun/ecom-product-page
cd ecom-product-page
```

2. Install the `node_modules`

```sh
npm install
```

![how to install](./images/how-to-install.gif)

3. Create a new git branch and checkout to it

```sh
git checkout -b feature/new-feature-name
```

4. Start working on your feature!

```sh
npm run start
```

![how to develop](./images/how-to-develop.gif)

5. Write appropriate test for your feature.

6. Run all tests and make sure all the tests are passing.

```sh
npm test
```

![how to test](./images/how-to-test.gif)

7. Submit a pull request.

## Issues and feature requests

You've found a bug in the source code, a mistake in the documentation or maybe you'd like a new feature? You can help us by [submitting an issue on GitHub](https://github.com/Goku-kun/ecom-product-page/issues). Before you create an issue, make sure to search the issue archive -- your issue may have already been addressed!

Please try to create bug reports that are:

- _Reproducible._ Include steps to reproduce the problem.
- _Specific._ Include as much detail as possible: which version, what environment, etc.
- _Unique._ Do not duplicate existing opened issues.
- _Scoped to a Single Bug._ One bug per report.

**Even better: Submit a pull request with a fix or new feature!**

### How to submit a Pull Request

1. Search our repository for open or closed
   [Pull Requests](https://github.com/Goku-kun/ecom-product-page/pulls)
   that relate to your submission. You don't want to duplicate effort.
2. Fork the project
3. Create your feature branch (`git checkout -b feature/amazing_feature`)
4. Commit your changes (`git commit -m 'feature: add amazing_feature'`) ecom-product-page uses [conventional commits](https://www.conventionalcommits.org), so please follow the specification in your commit messages.
5. Push to the branch (`git push origin feature/amazing_feature`)
6. [Open a Pull Request](https://github.com/Goku-kun/ecom-product-page/compare?expand=1)
