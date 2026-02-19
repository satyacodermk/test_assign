# task_tracker.py
# Command-Line Task Tracker

def display_menu():
    print("\n--- Task Tracker ---")
    print("add      - Add a new task")
    print("view     - View all tasks")
    print("complete - Complete a task")
    print("exit     - Exit the program")


def view_tasks(tasks):
    if not tasks:
        print("No tasks available.")
        return

    for index, task in enumerate(tasks, start=1):
        print(f"{index}. {task}")


def main():
    tasks = []

    while True:
        display_menu()
        command = input("\nEnter command: ").strip().lower()

        if command == "add":
            task = input("Enter task description: ").strip()
            if task:
                tasks.append(task)
                print("Task added successfully.")
            else:
                print("Task cannot be empty.")

        elif command == "view":
            view_tasks(tasks)

        elif command == "complete":
            if not tasks:
                print("No tasks to complete.")
                continue

            view_tasks(tasks)
            task_number = input("Enter task number to complete: ").strip()

            if not task_number.isdigit():
                print("Please enter a valid number.")
                continue

            task_index = int(task_number) - 1

            if task_index < 0 or task_index >= len(tasks):
                print("Invalid task number.")
                continue

            # Mark task as completed
            tasks[task_index] = "[x] " + tasks[task_index]
            print("Task marked as completed.")

        elif command == "exit":
            print("Goodbye!")
            break

        else:
            print("Invalid command. Please try again.")


if __name__ == "__main__":
    main()
