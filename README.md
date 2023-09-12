## Beth Stack With Lucia Auth

- Bun
- Lucia Auth
- drizzle
- tailwindcss
- elysiajs

---

## Todo

[ ] Middleware for auth check
[ ] Error handling sitewide
[ ] Loading handling sitewide
[ ] More components and better UI

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
