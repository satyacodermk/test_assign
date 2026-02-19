"""
main.py - Main entry point for the Note Manager application
Provides a CLI menu-driven interface for managing notes
"""

from note_manager import Note, save_notes, load_notes


def display_menu():
    """Display the main menu options."""
    print("\n" + "="*60)
    print("          NOTE MANAGER - Main Menu")
    print("="*60)
    print("1. Add Note")
    print("2. View All Notes")
    print("3. Search Notes")
    print("4. Delete Note")
    print("5. Filter by Tag (Bonus)")
    print("6. Exit")
    print("="*60)


def add_note(notes):
    """
    Add a new note to the notes list.
    
    Args:
        notes (list): List of existing Note objects
    """
    print("\n--- Add New Note ---")
    title = input("Enter note title: ").strip()
    
    if not title:
        print("Error: Title cannot be empty!")
        return
    
    content = input("Enter note content: ").strip()
    
    if not content:
        print("Error: Content cannot be empty!")
        return
    
    tags_input = input("Enter tags (comma-separated, or press Enter to skip): ").strip()
    tags = [tag.strip() for tag in tags_input.split(',') if tag.strip()] if tags_input else []
    
    # Create and add the note
    note = Note(title=title, content=content, tags=tags)
    notes.append(note)
    
    # Auto-save after adding
    if save_notes(notes):
        print("\n✓ Note added and saved successfully!")
    else:
        print("\n✗ Note added but failed to save to file.")


def view_all_notes(notes):
    """
    Display all notes in the list.
    
    Args:
        notes (list): List of Note objects
    """
    if not notes:
        print("\nNo notes available. Add some notes first!")
        return
    
    print(f"\n--- All Notes (Total: {len(notes)}) ---")
    for idx, note in enumerate(notes, 1):
        print(f"\n[Note #{idx}]")
        note.display()


def search_notes(notes):
    """
    Search for notes containing a specific keyword.
    
    Args:
        notes (list): List of Note objects
    """
    if not notes:
        print("\nNo notes available to search!")
        return
    
    search_term = input("\nEnter search term: ").strip()
    
    if not search_term:
        print("Error: Search term cannot be empty!")
        return
    
    matching_notes = [note for note in notes if note.matches_search(search_term)]
    
    if not matching_notes:
        print(f"\nNo notes found matching '{search_term}'.")
        return
    
    print(f"\n--- Search Results for '{search_term}' ({len(matching_notes)} found) ---")
    for idx, note in enumerate(matching_notes, 1):
        print(f"\n[Match #{idx}]")
        note.display()


def delete_note(notes):
    """
    Delete a note by its index.
    
    Args:
        notes (list): List of Note objects
    """
    if not notes:
        print("\nNo notes available to delete!")
        return
    
    # Display notes with indices
    print(f"\n--- Current Notes (Total: {len(notes)}) ---")
    for idx, note in enumerate(notes, 1):
        print(f"{idx}. {note.title} (Tags: {', '.join(note.tags) if note.tags else 'None'})")
    
    try:
        note_num = int(input("\nEnter note number to delete: "))
        
        if note_num < 1 or note_num > len(notes):
            print(f"Error: Please enter a number between 1 and {len(notes)}.")
            return
        
        # Confirm deletion
        deleted_note = notes[note_num - 1]
        confirm = input(f"Are you sure you want to delete '{deleted_note.title}'? (y/n): ").strip().lower()
        
        if confirm == 'y':
            notes.pop(note_num - 1)
            
            # Auto-save after deletion
            if save_notes(notes):
                print("\n✓ Note deleted and changes saved successfully!")
            else:
                print("\n✗ Note deleted but failed to save changes to file.")
        else:
            print("\nDeletion cancelled.")
    
    except ValueError:
        print("Error: Please enter a valid number!")


def filter_by_tag(notes):
    """
    Filter and display notes that have a specific tag.
    
    Args:
        notes (list): List of Note objects
    """
    if not notes:
        print("\nNo notes available to filter!")
        return
    
    tag = input("\nEnter tag to filter by: ").strip()
    
    if not tag:
        print("Error: Tag cannot be empty!")
        return
    
    matching_notes = [note for note in notes if note.has_tag(tag)]
    
    if not matching_notes:
        print(f"\nNo notes found with tag '{tag}'.")
        return
    
    print(f"\n--- Notes with tag '{tag}' ({len(matching_notes)} found) ---")
    for idx, note in enumerate(matching_notes, 1):
        print(f"\n[Note #{idx}]")
        note.display()


def main():
    """Main application loop."""
    print("\n" + "*"*60)
    print("  Welcome to Note Manager!")
    print("*"*60)
    
    # Load existing notes from file
    notes = load_notes()
    
    # Main menu loop
    while True:
        display_menu()
        choice = input("\nEnter your choice (1-6): ").strip()
        
        if choice == '1':
            add_note(notes)
        
        elif choice == '2':
            view_all_notes(notes)
        
        elif choice == '3':
            search_notes(notes)
        
        elif choice == '4':
            delete_note(notes)
        
        elif choice == '5':
            filter_by_tag(notes)
        
        elif choice == '6':
            # Auto-save before exiting
            save_notes(notes)
            print("\n✓ Notes saved. Thank you for using Note Manager!")
            print("Goodbye!\n")
            break
        
        else:
            print("\n✗ Invalid choice! Please enter a number between 1 and 6.")


if __name__ == "__main__":
    main()