"""
__init__.py - Initializes the note_manager package
Exports Note class and storage functions for easy import
"""

from note_manager.note import Note
from note_manager.storage import save_notes, load_notes, clear_notes_file

__all__ = ['Note', 'save_notes', 'load_notes', 'clear_notes_file']