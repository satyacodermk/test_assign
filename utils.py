# utils.py

def calculate_average(grades: list) -> float:
    """Return the average of a list of grades."""
    if not grades:
        return 0.0
    return sum(grades) / len(grades)


def assign_letter_grade(avg: float) -> str:
    """Return letter grade based on numeric average."""
    if avg >= 90:
        return "A"
    elif avg >= 80:
        return "B"
    elif avg >= 70:
        return "C"
    elif avg >= 60:
        return "D"
    else:
        return "F"


def validate_grade(score: str) -> float:
    """
    Validate grade input.
    Must be numeric between 0–100.
    Returns float if valid, raises ValueError if not.
    """
    try:
        value = float(score)
        if 0 <= value <= 100:
            return value
        else:
            raise ValueError("Grade must be between 0 and 100.")
    except:
        raise ValueError("Invalid grade. Enter a number between 0–100.")


def find_class_extremes(students: dict):
    """
    Returns:
      highest_student, highest_avg,
      lowest_student, lowest_avg
    """
    if not students:
        return None, None, None, None

    avg_data = {
        name: calculate_average(grades) for name, grades in students.items()
    }

    highest_student = max(avg_data, key=avg_data.get)
    lowest_student = min(avg_data, key=avg_data.get)

    return (
        highest_student,
        avg_data[highest_student],
        lowest_student,
        avg_data[lowest_student],
    )
