# Courses

## Setup

This repo uses [pnpm](https://pnpm.io/) as the package manager. To install
dependencies, run `pnpm install`.

## Start the application

Run `pnpm dev` to start the development server. Happy coding!

## Build for production

Run `pnpm build` to build the application. The build artifacts are stored in the
output directory (e.g. `dist/` or `build/`), ready to be deployed.

## Running tasks

To execute tasks with Nx use the following syntax:
`pnpx nx <target> <project> <...options>` or
`pnpm exec nx <target> <project> <...options>`

You can also run multiple targets: `pnpx nx run-many -t <target1> <target2>`
..or add `-p` to filter specific projects
`pnpx nx run-many -t <target1> <target2> -p <proj1> <proj2>`

Targets can be defined in the `package.json` or `projects.json`. Learn more
[in the docs](https://nx.dev/features/run-tasks).

## Explore the project graph

Run `pnpx nx graph` to show the graph of the workspace. It will show tasks that
you can run with Nx.

- [Learn more about Exploring the Project Graph](https://nx.dev/core-features/explore-graph)

## Components/UI Library

This project utilises [Shadcn](https://ui.shadcn.com/) for generating local
components in the [ui library](./libs/ui-kit/ui/).

To generate a component, run the command `pnpx shadcn@latest add [component]` as
documented [here](https://ui.shadcn.com/docs/cli). This will add a component to
the ui library at the [this location](./libs/ui-kit/ui/src/lib/ui/). Once
generated, ensure to export the component from the
[index.ts](./libs/ui-kit/ui/src/index.ts) file.

This ui library setup was completed with help from
[this article](https://blog.patrickvaler.ch/how-to-get-started-with-shadcn-ui-and-next-js-within-a-nx-monorepo-57908f48b4ef).

To update the Shadcn components, run `pnpm update-ui-kit`
