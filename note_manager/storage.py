"""
storage.py - Handles file I/O operations for JSON persistence
"""
import json
import os
from .note import Note


NOTES_FILE = 'notes.json'


def save_notes(notes_list):
    """
    Save a list of Note objects to the notes.json file.
    
    Args:
        notes_list (list): List of Note objects to save
        
    Returns:
        bool: True if save successful, False otherwise
    """
    try:
        # Convert Note objects to dictionaries
        notes_data = [note.save() for note in notes_list]
        
        # Write to JSON file with proper formatting
        with open(NOTES_FILE, 'w', encoding='utf-8') as file:
            json.dump(notes_data, file, indent=2, ensure_ascii=False)
        
        return True
    
    except Exception as e:
        print(f"Error saving notes: {e}")
        return False


def load_notes():
    """
    Load notes from the notes.json file and convert to Note objects.
    
    Returns:
        list: List of Note objects (empty list if file doesn't exist or is corrupted)
    """
    # If file doesn't exist, return empty list
    if not os.path.exists(NOTES_FILE):
        print("No existing notes file found. Starting with empty notes list.")
        return []
    
    try:
        # Read and parse JSON file
        with open(NOTES_FILE, 'r', encoding='utf-8') as file:
            notes_data = json.load(file)
        
        # Convert dictionaries back to Note objects
        notes_list = []
        for note_dict in notes_data:
            note = Note(
                title=note_dict.get('title', ''),
                content=note_dict.get('content', ''),
                tags=note_dict.get('tags', []),
                timestamp=note_dict.get('timestamp', '')
            )
            notes_list.append(note)
        
        print(f"Successfully loaded {len(notes_list)} note(s) from file.")
        return notes_list
    
    except json.JSONDecodeError:
        print("Error: notes.json file is corrupted. Starting with empty notes list.")
        return []
    
    except Exception as e:
        print(f"Error loading notes: {e}. Starting with empty notes list.")
        return []


def clear_notes_file():
    """
    Clear the notes.json file (optional utility function).
    """
    try:
        with open(NOTES_FILE, 'w', encoding='utf-8') as file:
            json.dump([], file)
        print("Notes file cleared successfully.")
        return True
    except Exception as e:
        print(f"Error clearing notes file: {e}")
        return False