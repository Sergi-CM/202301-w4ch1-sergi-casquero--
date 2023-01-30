# Data

## Data layer

- List of gentlemen
  - id
  - name
  - status
  - profession
  - twitter
  - picture
  - alternative text
  - selected

## Data modifications

- Toggle selected property of gentleman
- Delete a gentleman
- Select all gentlemen

# Components

## App

- Contains the info
- Contains the functions ('toggle', 'select all', 'delete')
- Sends the 'select all' function to Button
- Sends 'delete' and 'toggle' functions to Gentleman
- Sends the list of gentlemen to Info

## Info

- Receives the list of gentlemen
- Displays number of selected gentlemen

## Button

- Receives the 'select all' function

## Gentleman

- Receives the 'toggle' function
- Receives the 'delete' function
- Receives a gentleman
