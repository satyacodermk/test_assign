# ================================================================
#  Command-Line Task Tracker
#  File: solution.py
#  Description:
#     A simple interactive to-do manager that supports:
#       - add
#       - view
#       - complete
#       - exit
# ================================================================

def show_menu():
    print("\n=== Task Tracker ===")
    print("Commands:")
    print("  add      - Add a new task")
    print("  view     - View all tasks")
    print("  complete - Mark a task as completed")
    print("  exit     - Exit the program")
    print("====================")


def view_tasks(tasks):
    if not tasks:
        print("\nNo tasks found.")
        return

    print("\nCurrent Tasks:")
    for index, task in enumerate(tasks, start=1):
        print(f"{index}. {task}")


def add_task(tasks):
    task = input("Enter task description: ").strip()
    if not task:
        print("Task cannot be empty.")
        return
    tasks.append(task)
    print(f"Task added: {task}")


def complete_task(tasks):
    if not tasks:
        print("No tasks to complete.")
        return

    view_tasks(tasks)

    user_input = input("Enter the task number to complete: ").strip()

    # Validate numeric input
    if not user_input.isdigit():
        print("Please enter a valid number.")
        return

    index = int(user_input)

    # Validate range
    if index < 1 or index > len(tasks):
        print("Invalid task number.")
        return

    # Mark as completed (keeping task instead of removing)
    original_task = tasks[index - 1]
    tasks[index - 1] = f"[x] {original_task}"
    print(f"Task {index} marked as completed.")


def main():
    tasks = []

    print("Welcome to the Task Tracker!")

    while True:
        show_menu()
        command = input("Enter command: ").strip().lower()

        if command == "add":
            add_task(tasks)
        elif command == "view":
            view_tasks(tasks)
        elif command == "complete":
            complete_task(tasks)
        elif command == "exit":
            print("Goodbye!")
            break
        else:
            print("Invalid command. Please try again. new one")


if __name__ == "__main__":
    main()
