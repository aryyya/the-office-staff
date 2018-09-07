# the-office-staff

A server created for educational purposes, to teach the fundamentals of web requests.

https://the-office-staff.herokuapp.com/

## What is this?

This is a server that you can make requests to that will respond with information about the staff members from [The Office (US)](https://en.wikipedia.org/wiki/The_Office_(U.S._TV_series)).

The information includes their names, aliases, photos, quotes, and more! Everything is organized in an easily consumable API, perfect for creating a frontend application with.

## Tutorials

Various tutorials about JavaScript and development that use the API as a teaching tool will be linked here.

- [Tutorial 1: Callbacks](./tutorials/01-callbacks.md)

## API

### Get a list of all staff member ids:

`GET /api/staff`

#### Example:

```json

[
  "dm-scranton-001",
  "dm-scranton-002",
  "dm-scranton-003"
]
```

An array of all staff member ids is returned.

These ids are used in place of the `:id` parameter for all other API requests.

---

### Get information for a staff member:

`GET /api/staff/:id`

Example:

`GET /api/staff/dm-scranton-001`

```json
{
  "name": "Michael Scott",
  "id": "dm-scranton-001",
  "aliases": [
    "Michael Scarn",
    "Ping",
    "Mykonos"
  ],
  "gender": "m"
}
```

An object with information about the staff member is returned.

---

### Get images for a staff member:

`GET /api/image/:id`

#### Example:

`GET /api/image/dm-scranton-001`

```json
{
  "large": "/img/dm-scranton-001-large.jpg",
  "thumbnail": ""
}
```

An object containing URLs to images of the staff member is returned.

---

### Get quotes for a staff member:

`GET /api/quote/:id`

#### Example:

`GET /api/quote/dm-scranton-001`

```json
[
  "Would I rather be feared or loved? Easy. Both. I want people to be afraid of how much they love me."
]
```

An array of quotes from the staff member is returned.
