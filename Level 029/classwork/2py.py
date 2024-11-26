import tkinter as tk

def on_button_click():
    print("Button clicked!")

# Create the main window
root = tk.Tk()

# Create a button widget and bind it to the on_button_click function
button = tk.Button(root, text="Click Me", command=on_button_click)
button.pack()

# Start the GUI event loop
root.mainloop()
