def alphanumeric(s):
    return bool(s) and s.isalnum() and not any(c in s for c in [' ', '_'])