.PHONY: bootstrap build clean deploy destroy test watch

# Bootstrap CDK for deployment
bootstrap:
	yarn cdk bootstrap

# Compile TypeScript source to JavaScript build artifact
build: clean
	yarn build

# Deletes the build artifacts
clean:
	rm -rf dist

# Deploy this stack to your default AWS account/region
deploy:
	yarn run deploy

# Destroy this stack
remove:
	yarn run remove

# Perform the jest unit tests
test:
	yarn test

# Watch for changes and compile
watch:
	yarn watch
