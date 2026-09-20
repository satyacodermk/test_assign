# grade_calculator.py

from utils import (
    calculate_average,
    assign_letter_grade,
    validate_grade,
    find_class_extremes,
)


def main():
    students = {}

    print("\n=== Grade Calculator ===\n")

    # Collect student names
    while True:
        name = input("Enter student name (leave blank to finish): ").strip()

        if name == "":
            break

        grades = []
        print(f"\nEnter 3 grades for {name}:")
        for i in range(1, 4):
            while True:
                try:
                    score = validate_grade(input(f"  Grade {i}: "))
                    grades.append(score)
                    break
                except ValueError as e:
                    print("  Error:", e)

        students[name] = grades
        print()

    # Print summary report
    print("\n\nName            Average   Letter Grade")
    print("-----------------------------------------")

    for name, grades in students.items():
        avg = calculate_average(grades)
        letter = assign_letter_grade(avg)

        print(f"{name:<15} {avg:>7.2f}       {letter}")

    # Class extremes (bonus)
    print("\n")
    hi_name, hi_avg, lo_name, lo_avg = find_class_extremes(students)

    if hi_name:
        print(f"Highest average: {hi_name} ({hi_avg:.2f})")
        print(f"Lowest average:  {lo_name} ({lo_avg:.2f})")


if __name__ == "__main__":
    main()
