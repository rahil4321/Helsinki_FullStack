```mermaid
sequenceDiagram
  participant browser
  participant server

  Note right of browser: User clicks save. JavaScript intercepts the submit event, prevents the default page reload, and redraws the notes list on the screen.

  browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa
  activate server
  Note right of browser: The POST request contains the new note as JSON data: { "content": "single page app does not reload", "date": "2023-1-1" }
  
  server-->>browser: 201 Created
  deactivate server
  ```
