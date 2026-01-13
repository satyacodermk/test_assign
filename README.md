# Note Manager Application

A modular Python-based note-taking system with JSON persistence, demonstrating OOP principles, file I/O, and clean package architecture.

## Features

- **Create Notes**: Add notes with title, content, and tags
- **View All Notes**: Display all stored notes with formatted output
- **Search Notes**: Find notes by keyword in title, content, or tags
- **Delete Notes**: Remove notes by index
- **Tag Filtering**: Filter notes by specific tags (Bonus feature)
- **Persistent Storage**: All notes saved to `notes.json` and automatically reloaded on startup
- **Error Handling**: Robust handling of missing or corrupted files

## Project Structure

```
note_app/
├── note_manager/
│   ├── __init__.py      # Package initialization and exports
│   ├── note.py          # Note class definition
│   └── storage.py       # File I/O operations
├── main.py              # Main entry point (CLI interface)
├── notes.json           # Auto-generated data file
└── README.md            # This file
```

## Installation & Setup

1. **Create the project directory structure**:
   ```bash
   mkdir -p note_app/note_manager
   cd note_app
   ```

2. **Create all required files** as per the structure above

3. **No external dependencies required** - uses only Python standard library

## Usage

Run the application:
```bash
python main.py
```

### Menu Options

1. **Add Note**: Create a new note with title, content, and optional tags
2. **View All Notes**: Display all saved notes
3. **Search Notes**: Search by keyword across all note fields
4. **Delete Note**: Remove a note by selecting its number
5. **Filter by Tag**: Show only notes with a specific tag
6. **Exit**: Save and close the application

## Examples

### Adding a Note
```
Enter note title: Team Meeting
Enter note content: Discuss Q4 roadmap and resource allocation
Enter tags (comma-separated): work, urgent, meeting
✓ Note added and saved successfully!
```

### Searching Notes
```
Enter search term: roadmap
--- Search Results for 'roadmap' (1 found) ---
[Match #1]
============================================================
Title: Team Meeting
Timestamp: 2025-01-15T10:30:45.123456
Tags: work, urgent, meeting
------------------------------------------------------------
Content:
Discuss Q4 roadmap and resource allocation
============================================================
```

### Filtering by Tag
```
Enter tag to filter by: urgent
--- Notes with tag 'urgent' (1 found) ---
```

## Testing

### Test Case 1: Persistence
1. Add 2 notes
2. Exit the program
3. Run again
4. View All Notes → Both notes should appear

### Test Case 2: Search
1. Add notes with different keywords
2. Search for a specific term
3. Verify only matching notes appear

### Test Case 3: Deletion
1. Add 3 notes
2. Delete note #2
3. View All → Only notes #1 and #3 remain

### Test Case 4: Error Handling
1. Delete or corrupt `notes.json`
2. Run the program
3. Should start with empty list, no crash

### Test Case 5: Tag Filtering
1. Add notes with tags "work, urgent"
2. Filter by "urgent"
3. Should display only notes with that tag

## Technical Details

- **Language**: Python 3.6+
- **Persistence**: JSON file format
- **Architecture**: Modular OOP design with separation of concerns
- **Timestamp Format**: ISO 8601 (e.g., `2025-01-15T10:30:45.123456`)

## File Descriptions

- **`note.py`**: Defines the `Note` class with methods for saving, displaying, and searching
- **`storage.py`**: Handles loading/saving notes to `notes.json` with error handling
- **`__init__.py`**: Exports classes and functions for easy package imports
- **`main.py`**: Provides the CLI interface with menu-driven operations
- **`notes.json`**: Auto-generated file storing all notes data

## Error Handling

The application handles:
- Missing `notes.json` file (creates new)
- Corrupted JSON data (starts fresh)
- Empty inputs (validation)
- Invalid menu choices (prompts retry)
- File I/O errors (informative messages)

## License

Educational project - free to use and modify.