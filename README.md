# beth-stack

To install dependencies:

```bash
bun install
```

To run:

```bash
bun run index.ts
```

This project was created using `bun init` in bun v1.0.0. [Bun](https://bun.sh) is a fast all-in-one JavaScript runtime.

---

## Docker command

### Build

```bash
docker build -t $docker_image_name .
```

### Run

```bash
docker run -it -e DATABASE_URL=$DATABASE_URL \
    -t $docker_image_name
```
