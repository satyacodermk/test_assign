"""
note.py - Defines the Note class with attributes and methods
"""
from datetime import datetime


class Note:
    """
    Represents a single note with title, content, tags, and timestamp.
    """
    
    def __init__(self, title, content, tags=None, timestamp=None):
        """
        Initialize a Note object.
        
        Args:
            title (str): The title of the note
            content (str): The content/body of the note
            tags (list): List of tags associated with the note
            timestamp (str): ISO format timestamp (auto-generated if not provided)
        """
        self.title = title
        self.content = content
        self.tags = tags if tags else []
        self.timestamp = timestamp if timestamp else datetime.now().isoformat()
    
    def save(self):
        """
        Convert the note object to a dictionary for JSON serialization.
        
        Returns:
            dict: Dictionary containing all note attributes
        """
        return {
            'title': self.title,
            'content': self.content,
            'tags': self.tags,
            'timestamp': self.timestamp
        }
    
    def display(self):
        """
        Print the note in a formatted, readable way.
        """
        print("\n" + "="*60)
        print(f"Title: {self.title}")
        print(f"Timestamp: {self.timestamp}")
        print(f"Tags: {', '.join(self.tags) if self.tags else 'No tags'}")
        print("-"*60)
        print(f"Content:\n{self.content}")
        print("="*60)
    
    def matches_search(self, term):
        """
        Check if the search term exists in title, content, or tags.
        
        Args:
            term (str): The search term to look for
            
        Returns:
            bool: True if term found in any field, False otherwise
        """
        term_lower = term.lower()
        
        # Check in title
        if term_lower in self.title.lower():
            return True
        
        # Check in content
        if term_lower in self.content.lower():
            return True
        
        # Check in tags
        for tag in self.tags:
            if term_lower in tag.lower():
                return True
        
        return False
    
    def has_tag(self, tag):
        """
        Check if the note has a specific tag.
        
        Args:
            tag (str): The tag to search for
            
        Returns:
            bool: True if tag exists, False otherwise
        """
        tag_lower = tag.lower()
        return any(tag_lower == t.lower() for t in self.tags)