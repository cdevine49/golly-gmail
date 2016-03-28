# Flux Stores

### EmailStore

Holds all persisted email data.

##### Actions:
- `receiveAllEmails`
- `receiveSingleEmail`

##### Listeners:
- `EmailIndex` (passes to `EmailPreview` via props)

### LabelStore

Holds un-persisted label data.

##### Actions:
- `receiveAllLabels`
- `receiveLabel`

##### Listeners:
- `LabelForm`


### SearchStore

Holds search parameters to send to the API.

##### Actions:
- `receiveSearchParams`

##### Listeners:
- `SearchIndex`

### SearchSuggestionStore

Holds typeahead suggestions for search.

##### Actions:
- `receiveSearchParams`

##### Listeners:
- `SearchParams`
