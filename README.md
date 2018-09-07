# the-office-staff

A server created for educational purposes, to teach the fundamentals of web requests.

## API

### Get a list of all staff members:

`GET /api/staff`

#### Example:

```json
GET /api/staff

[
  "michael-scott",
  "dwight-schrute",
  "jim-halpert"
]
```

An array of all staff members is returned.

These names are used in place of the `:name` parameter for all other API requests.

---

### Get data for a staff member:

`GET /api/staff/:name`

Example:

```json
GET /api/staff/michael-scott

{
  "name": "Michael Scott",
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

### Get image data for a staff member:

`GET /api/image/:name`

#### Example:

```json
GET /api/image/michael-scott

{
  "main": "/img/michael-scott.jpg",
  "thumbnail": ""
}
```

An object containing URLs to images of the staff member is returned.

---

### Get quote data for a staff member:

`GET /api/quote/:name`

#### Example:

```json
GET /api/quote/michael-scott

[
  "Would I rather be feared or loved? Easy. Both. I want people to be afraid of how much they love me."
]
```

An array of quotes from the staff member is returned.
