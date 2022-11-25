from subprocess import check_output
import os


def get_process_index(processes: str, process_id: int) -> int | None:
    for index in range(1, len(processes)):
        process = processes[index]
        id = int(process.split()[0])
        if id == process_id:
            return index
    return None


def highlight_line(lines: list[str], highlighting_index: int) -> list[str]:
    for index in range(0, len(processes)):
        if index == highlighting_index:
            lines[index] = f"\x1b[0;30;42m👉️{lines[index]}\x1b[0m"
        else:
            lines[index] = f"  {lines[index]}"
    return lines


if __name__ == "__main__":
    process_id = os.getpid()
    processes = check_output(["ps", "-e"]).decode("utf-8").split("\n")
    process_index = get_process_index(processes, process_id)
    if process_index is not None:
        highlighted_process = highlight_line(processes, process_index)
        print("\n".join(highlighted_process))
