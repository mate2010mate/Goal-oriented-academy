def dirReduc(arr):
    # A dictionary to map opposites
    opposites = {
        "NORTH": "SOUTH",
        "SOUTH": "NORTH",
        "EAST": "WEST",
        "WEST": "EAST"
    }
    
    # Use a stack to reduce directions
    stack = []
    
    for direction in arr:
        if stack and stack[-1] == opposites[direction]:
            stack.pop()  # Remove the last direction if it's the opposite
        else:
            stack.append(direction)  # Otherwise, add the current direction
    
    return stack
