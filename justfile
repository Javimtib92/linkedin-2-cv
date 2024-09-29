default:
  just --list

# Enables corepack in node
corepack-enable:
    ./nvm_exec.sh corepack enable

# Installs project package.json dependencies
install-deps:
    ./nvm_exec.sh pnpm install

# Starts vite development server
dev:
    ./nvm_exec.sh pnpm dev

# Builds application using vite
build:
    ./nvm_exec.sh pnpm build

# Starts remix vite server from build output
start:
    ./nvm_exec.sh pnpm start

# Runs linting and formatting.
check:
    ./nvm_exec.sh pnpm check

# Proxy comand through nvm
nvm-exec command:
    ./nvm_exec.sh {{command}}